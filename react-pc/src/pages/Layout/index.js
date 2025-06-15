import { useEffect } from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Popconfirm } from 'antd';
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, logout } from '@/store/modules/user';

const { Header, Sider, Content } = Layout;
const App = () => {

    const items = [
        {
            key: '/home',
            icon: <UserOutlined />,
            label: '首页',
        },
        {
            key: '/home/article',
            icon: <VideoCameraOutlined />,
            label: '文章管理',
        },
        {
            key: '/home/new',
            icon: <UploadOutlined />,
            label: '创建文章',
        },
    ];

    const navigate = useNavigate()

    const location = useLocation()
    const onMenuClick = (e) => {
        navigate(e.key);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch])
    const user = useSelector(state => state.user.userInfo)

    const quiteClick = () => {
        dispatch(logout());
        navigate('/');
        // window.location.reload()
    }
    return (
        <Layout style={{ minHeight: '100%' }}>

            <Header className="header" style={{ color: 'white', height: '50px', lineHeight: '50px' }}>
                <div className='logo'>极客园</div>
                <div className='userInfo'>
                    <span className='user'>{user && user.data.name}</span>
                    <Popconfirm title="是否推出登录？" okText="是" cancelText="否" onConfirm={quiteClick}>
                        <a className='quite'>退出</a>
                    </Popconfirm>
                </div>
            </Header>

            <Layout>

                <Sider trigger={null} collapsible >
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['/home']}
                        items={items}
                        selectedKeys={[location.pathname]}
                        onClick={onMenuClick}
                    />
                </Sider>

                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;