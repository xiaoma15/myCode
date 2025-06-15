import { Card, Breadcrumb, Form, Select, Button, Space, Radio, DatePicker, Table, Tag, Image, Popconfirm } from "antd"
import { data, Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import { getArticleListAPI, deleteArticleAPI } from "@/apis/article";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import locale from "antd/es/date-picker/locale/zh_CN";
import img404 from "@/assets/error.png"
import './index.scss'
import { useChannel } from "@/hooks/useChannel";
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')


const { RangePicker } = DatePicker;

const Article = () => {
    const { channels } = useChannel()
    const navigate = useNavigate()

    //枚举定义状态
    const status = {
        0: <Tag color="orange">草稿</Tag>,
        1: <Tag color="orange">待审核</Tag>,
        2: <Tag color="success">审核通过</Tag>,
        3: <Tag color="orange">审核未通过</Tag>
    }

    const columns = [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            width: 80,
            fixed: 'left',
            render: (text, record, index) => index + 1
        },
        {
            title: '封面',
            dataIndex: 'cover',
            key: 'cover',
            width: 80,
            fixed: 'left',
            render: covers => <Image src={covers["images"][0] || img404} alt="" />
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            width: 150,
            fixed: 'left'
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            render: data => status[data]
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate',
            key: 'pubdate',
            width: 150,
            fixed: 'left'
        },
        {
            title: '阅读数',
            dataIndex: 'read_count',
            key: 'read_count',
            width: 150,
            fixed: 'left'
        },
        {
            title: '评论数',
            dataIndex: 'comment_count',
            key: 'comment_count',
            width: 150,
            fixed: 'left'
        },
        {
            title: '点赞',
            dataIndex: 'like_count',
            key: 'like_count',
            width: 150,
            fixed: 'left'
        },
        {
            title: '操作',
            key: 'action',
            width: 150,
            fixed: 'right',
            render: (data) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<EditOutlined />}
                        onClick={() => navigate(`/home/new?id=${data.id}`)} />

                    <Popconfirm
                        description="是否删除此文章？"
                        title="删除文章"
                        okText="是"
                        cancelText="否"
                        onConfirm={async () => {
                            await deleteArticleAPI(data.id)
                            setReqData({ ...reqData })
                        }}
                    >
                        <Button
                            type="primary"
                            shape="circle"
                            danger
                            icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            )
        }
    ]

    const [articleList, setArticleList] = useState([])
    const [count, setCount] = useState(0)

    const [reqData, setReqData] = useState({
        page: 1,
        per_page: 4,
        channel_id: '',
        type: '',
        begin_pubdata: '',
        end_pubdata: ''
    })

    useEffect(() => {
        async function fetchArticles(params) {
            const res = await getArticleListAPI(params)
            setArticleList(res.data.data.results)
            setCount(res.data.data.total_count)
        }
        fetchArticles(reqData)
    }, [reqData])
    const onFinish = (data) => {
        const params = {
            ...reqData,
            channel_id: data.channel_id,
            type: data.type,
            begin_pubdata: data.date[0].format("YYYY-MM-DD HH:mm:ss"),
            end_pubdata: data.date[1].format("YYYY-MM-DD HH:mm:ss")
        }
        setReqData(params)
        console.log(data, params)
    }

    const onPageChange = (page) => {
        setReqData({
            ...reqData,
            page: page
        })
    };
    return (
        <div>
            <Card >
                <Breadcrumb items={[
                    { title: <Link to="/home">首页</Link> },
                    { title: '文章列表' }
                ]} style={{ marginBottom: 20 }} />

                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    initialValues={{ type: 0 }}
                    onFinish={onFinish}
                >
                    <Form.Item label="状态">
                        <Form.Item name="type">
                            <Radio.Group
                            // onChange={(e) => setImageKind(e.target.value)} 
                            // value={imageKind}
                            >
                                <Radio value={0}>全部</Radio>
                                <Radio value={1}>草稿</Radio>
                                <Radio value={2}>审核通过</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="频道"
                        name="channel_id"
                    // rules={[{ required: true, message: '请选择频道' }]}
                    >
                        <Select
                            placeholder="请选择文章频道"
                            // onChange={onChannelSelect}
                            style={{ width: 400 }}
                        >
                            {channels.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="日期"
                        name="date"
                    >
                        <RangePicker locale={locale} />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button type="primary" htmlType="submit" size="large">
                                筛选
                            </Button>
                        </Space>

                    </Form.Item>


                </Form>

            </Card>

            <Card title={`共找到${count}篇文章`} className="article-list">
                <Table columns={columns} dataSource={articleList} rowKey="id"
                    pagination={{
                        total: count,
                        pageSize: reqData.per_page,
                        onChange: onPageChange
                    }}
                />
            </Card>
        </div >
    )
}

export default Article