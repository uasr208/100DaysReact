import React, { useState } from "react";
import "animate.css";
import {
  Button,
  Card,
  Empty,
  Form,
  InputNumber,
  message,
  Select,
  Tooltip,
} from "antd";
import { Copy } from "lucide-react";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  const [payload, setPayload] = useState("");

  const designations = [
    "manager",
    "sales executive",
    "front-end developer",
    "backend-developer",
    "ceo",
    "cto",
    "product manager",
  ];
  const getDesignation = () => {
    const index = Math.floor(Math.random() * designations.length);
    return designations[index];
  };
  const generateUser = () => {
    return {
      id: nanoid(),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      mobile: faker.phone.number({ style: "international" }),
      gender: faker.person.gender(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      pincode: Number(faker.location.zipCode()),
      createdAt: faker.date.anytime,
    };
  };

  const generateProducts = () => {
    return {
      id: nanoid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({ min: 1000, max: 20000 })),
      discount: Number(faker.commerce.price({ min: 0, max: 50 })),
      rating: Number(faker.commerce.price({ min: 1, max: 5 })),
      category: faker.commerce.productAdjective(),
      brand: faker.company.buzzNoun(),
      image: faker.image.urlLoremFlickr({ category: "product" }),
      createdAt: faker.date.anytime(),
    };
  };

  const generatePayments = () => {
    return {
      id: nanoid(),
      user: {
        id: nanoid(),
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        mobile: faker.phone.number({ style: "international" }),
        gender: faker.person.gender(),
      },
      product: {
        id: nanoid(),
        title: faker.commerce.productName(),
      },
      amount: Number(faker.commerce.price({ min: 1000, max: 20000 })),
      orderId: `OID-${nanoid()}`,
      transactionId: `TSC-${nanoid()}`,
      method: "UPI",
      tax: Number(faker.commerce.price({ min: 0, max: 50 })),
      createdAt: faker.date.anytime(),
    };
  };

  const generateEmployees = () => {
    return {
      id: nanoid(),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      mobile: faker.phone.number({ style: "international" }),
      gender: faker.person.gender(),
      designation: getDesignation(),
      salary: Number(faker.commerce.price({ min: 20000, max: 100000 })),
      address: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      pincode: Number(faker.location.zipCode()),
      createdAt: faker.date.anytime,
    };
  };

  const generateData = (values) => {
    const tmp = [];
    for (let i = 0; i < values.noOfdata; i++) {
      if (values.data === "users") {
        tmp.push(generateUser());
      } else if (values.data === "products") {
        tmp.push(generateProducts());
      } else if (values.data === "payments") {
        tmp.push(generatePayments());
      } else if (values.data === "employees") {
        tmp.push(generateEmployees());
      } else {
        message.error("Match not found");
      }
    }
    const str = JSON.stringify(tmp, null, 4);
    setPayload(str);
  };
  const onCopy = () => {
    navigator.clipboard.writeText(payload);
    message.success("Data copied");
  };
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="w-9/12 mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Dummy Data Generator</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            fuga exercitationem consequatur adipisci sequi pariatur aut placeat
            similique. Inventore temporibus quo ullam ea laboriosam! Nemo rem
            illum odit ea nihil?
          </p>
        </div>
        <Card>
          <Form
            className="flex gap-8"
            layout="vertical"
            onFinish={generateData}
            initialValues={{
              data: "users",
              noOfdata: 24,
            }}
          >
            <Form.Item
              label="Choose Data"
              name="data"
              rules={[{ required: true }]}
              className="w-full"
            >
              <Select size="large" placeholder="Choose data">
                <Select.Option value="users">Users</Select.Option>
                <Select.Option value="products">Products</Select.Option>
                <Select.Option value="payments">Payments</Select.Option>
                <Select.Option value="employees">Employees</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Number of Data"
              name="noOfdata"
              rules={[{ required: true }]}
              className="w-full"
            >
              <InputNumber
                size="large"
                placeholder="Enter number of data"
                className="!w-full"
                max={100}
              />
            </Form.Item>
            <Form.Item label=" ">
              <Button htmlType="submit" size="large">
                Generate
              </Button>
            </Form.Item>
          </Form>
        </Card>
        {payload.length === 0 ? (
          <Empty description="Click generate button to get your first payload" />
        ) : (
          <Card
            title="Users"
            extra={
              <Tooltip className="Copy data">
                <Copy onClick={onCopy} className="cursor-pointer" />
              </Tooltip>
            }
          >
            <SyntaxHighlighter
              language="javascript"
              style={a11yDark}
              showLineNumbers
            >
              {payload}
            </SyntaxHighlighter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default App;
