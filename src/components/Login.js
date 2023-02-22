import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home', {replace: true});
  };

  return (
    <div style={{
      backgroundImage: `url('https://financialhorse.com/wp-content/uploads/2022/02/Splitter_DBS7-scaled.jpg.webp')`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Form
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '400px',
          textAlign: 'center',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          // label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
        >
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>;
    </div>
  );
}
export default Login;