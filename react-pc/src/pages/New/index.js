import { Card, Breadcrumb, Form, Input, Select, Button, Space, Radio, Upload, message } from "antd"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import "./index.scss"
import { publishArticleAPI, getArticleByIdAPI, editeArticleAPI } from "@/apis/article";
import { PlusOutlined } from "@ant-design/icons"
import { useChannel } from "@/hooks/useChannel";

const New = () => {
    const { channels } = useChannel()

    const navigate = useNavigate()
    const onFinish = async (values) => {

        if (imageKind !== imageList.length) return message.warning('封面类型和图片数量不匹配')

        const cover = {
            type: imageKind,
            images: imageList.map(item => {
                if (item.response) {
                    return item.response.data.url
                } else {
                    return item.url
                }
            })
        }

        const data = {
            ...values,
            cover
        }

        if (id) {
            await editeArticleAPI({ ...data, id })
        } else {
            await publishArticleAPI(data)
        }

        navigate('/home/article')

    };

    const [imageList, setImageList] = useState([]);
    const handleUploadChange = (info) => {
        setImageList(info.fileList);
    };

    const [imageKind, setImageKind] = useState(0)

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')
    const [form] = Form.useForm();

    useEffect(() => {
        async function fetchArticle() {
            const res = await getArticleByIdAPI(id)
            const _data = res.data.data
            const { cover } = _data
            form.setFieldsValue({
                ..._data,
                type: cover.type
            })

            setImageKind(cover.type)

            setImageList(cover.images.map(url => { return { url } }))

        }

        if (id) {
            fetchArticle()
        }

    }, [id, form])

    return (
        <div>
            <Card >
                <Breadcrumb items={[
                    { title: <Link to="/home">首页</Link> },
                    { title: id ? '编辑文章' : '发布文章' }
                ]} style={{ marginBottom: 20 }} />

                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    initialValues={{ type: imageKind }}
                    onFinish={onFinish}
                    form={form}
                >

                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>

                    <Form.Item label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择频道' }]}>
                        <Select
                            placeholder="请选择文章频道"
                            style={{ width: 400 }}
                        >
                            {channels.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={(e) => setImageKind(e.target.value)} value={imageKind}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {
                            imageKind !== 0 && <Upload
                                name="image"
                                listType="picture-card"
                                showUploadList
                                action={'http://geek.itheima.net/v1_0/upload'}
                                onChange={handleUploadChange}
                                maxCount={imageKind}
                                fileList={imageList}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>
                        }

                    </Form.Item>

                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]} >
                        <ReactQuill className="publish-quill" theme="snow" placeholder="请输入文章内容..." />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button type="primary" htmlType="submit" size="large">
                                发布文章
                            </Button>
                        </Space>

                    </Form.Item>


                </Form>

            </Card>
        </div >
    )
}

export default New