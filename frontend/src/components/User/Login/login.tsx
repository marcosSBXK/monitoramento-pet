/* eslint-disable jsx-a11y/anchor-is-valid */
//import wave from "assets/img/wavee.png";
//import bg from "assets/img/bg.svg";
//import avatar from "assets/img/avatar.svg";
import { useHistory } from "react-router-dom"
import { Button, Col, Input, message, Row, Form } from "antd";
import { useAuth } from "context/AuthProvider/useAuth";
import wave from "assets/img/wavee.png"
import bg from "assets/img/bg.svg";
import avatar from "assets/img/avatar.svg";
import "assets/css/styles.css"


export const Login = () => {
    const auth = useAuth();
    const history = useHistory();

    async function onFinish(values: { email: string, password: string }) {

        try {
            await auth.authenticate(values.email, values.password);

            history.push("/main");
        } catch (error) {
            message.error('Invalid email or password');
        }
    }

    return (
        <div>
            <img src={wave} className="wave" alt=""></img>
            <div className="containerr">
                <div className="bg">
                    <img src={bg} className="bg" alt=""></img>
                </div>
                <div className="login-content">

                    <Row
                        justify='center'
                        align='middle'
                        style={{
                            height: '100vh'
                        }}
                    >
                        <Col span={12}>
                            <Form
                                name='basic'
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                onFinish={onFinish}
                            >

                                <img src={avatar} className="avatar" alt="icon"></img>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    onFinish={onFinish}
                                ></Form>
                                <Form.Item
                                    label='Email'
                                    name='email'
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label='Password'
                                    name='password'
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"

                                    style={{ background: "#38d39f", borderColor: "#38d39f" }}

                                >
                                    Login
                                </Button>



                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};


