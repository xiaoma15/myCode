import { Card, Button, Form, Input, message } from "antd"
import './index.scss'
import { useDispatch } from "react-redux"
import { fetchLogin } from "@/store/modules/user"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        await dispatch(fetchLogin(values))
        navigate('/home')
        message.success('登陆成功')
    };

    return (
        <div className="login" style={{ position: 'relative', width: '100vw', height: '100vh' }} >
            <Card title="登陆页" className="content">
                <Form
                    onFinish={onFinish}
                    validateTrigger="onBlur"
                >
                    <Form.Item label="手机号"
                        name="mobile"
                        rules={[{
                            required: true,
                            message: '请输入手机号',

                        }, {
                            pattern: /^1[3456789]\d{9}$/,
                            message: '请输入正确的手机号',
                        }
                        ]}
                    >
                        <Input placeholder="请输入手机号..." />
                    </Form.Item>
                    <Form.Item label="验证码" name='code' rules={[{
                        required: true,
                        message: '请输入验证码',
                    }, {
                        pattern: /^\d{6}$/,
                        message: '请输入正确的验证码',
                    }]}>

                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>登陆</Button>
                    </Form.Item>

                </Form>
            </Card>
        </div >
    )
}

export default Login


/**
 * 
 *import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
 */