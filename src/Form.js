import React from 'react'
import { Button, Checkbox, Form, Input,DatePicker,Select } from 'antd';
import 'antd/dist/antd.css'
import './App.css'

function FormValidation () {


  return (
    <>
    <h1>Login Form</h1>
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 5 }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, 
                  message: 'Please input your username!' 
                },
                {min:3},{max:15},
                {
                  validator: (_, value) => {
                  if (/^[a-zA-Z]+$/.test(value)) {
                  return Promise.resolve();
                  } else {
                  return Promise.reject('please enter correct name');
                  }
                 }
                }
              ]}
        hasFeedback
      >
        <Input placeholder='enter your name' />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, 
                  message: 'Please input your password!'
                },
                {min:8},{max:15},
                {
                  validator: (_, value) => {
                  if (/^[a-zA-Z]+$/.test(value)) {
                  return Promise.resolve();
                  } else {
                  return Promise.reject('please enter correct password');
                  }
                 }
                }
                ]}
        hasFeedback
      >
        <Input.Password placeholder='enter your password' />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="Confirm Password"
        rules={[{ required: true, 
                  message: 'Please input your password!'
                },
                ({getFieldValue})=>({
                    validator(_,value){
                        if(!value || getFieldValue("password") === value){
                            return Promise.resolve()
                        }
                        return Promise.reject("password does not match");
                    },
                }),
                ]}
        hasFeedback
      >
        <Input.Password placeholder='enter your confirm password' />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="Gender"
        rules={[{ required: true, 
                  message: 'Please select your gender!' }]}
      >
        <Select placeholder='select your gender'>
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
        </Select> 
      </Form.Item>

      <Form.Item
        label="Date Of Birth"
        name="dob"
        rules={[{ required: true, 
                  message: 'Please choose your date of birth!' }]}
        hasFeedback
      >
        <DatePicker picker='date' placeholder='choose your date of birth' />
      </Form.Item>


      <Form.Item 
        name="remember" 
        wrapperCol={{ offset:9 }}
        hasFeedback
      >
        <Checkbox>
        Agree To Our <a href='#'>Terms And Condition</a>
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 11 }}>
        <Button type="primary" onSubmit={(values)=>{console.log(values)}} htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default FormValidation;