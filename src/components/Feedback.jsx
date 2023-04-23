import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import "./Feedback.css";
import FeedbackImage from "../EthTransLogo.png";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    message.success("Thanks for your feedback!");
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      {!submitted ? (
        <Form className="feedback-form" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input className="feedback-input" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="feedback-input" type="email" />
          </Form.Item>

          <Form.Item
            label="Feedback"
            name="feedback"
            rules={[
              {
                required: true,
                message: "Please enter your feedback!",
              },
            ]}
          >
            <Input.TextArea className="feedback-input" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button className="feedback-submit" htmlType="submit">
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="feedback-thanks-container">
          <div className="feedback-image-container">
            <img
              src={FeedbackImage}
              alt="Feedback"
              className="feedback-image"
            />
            <div className="feedback-image-overlay"></div>
          </div>
          <div className="feedback-thanks-message">
            <SmileOutlined /> Thank You for your feedback!
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
