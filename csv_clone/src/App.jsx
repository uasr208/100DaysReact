import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { CSVLink } from "react-csv";

const App = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const createRecord = (values) => {
    values.date = moment(values.date).toDate();
    setData([...data, values]);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  };
  return (
    <div className="bg-gray-200 min-h-screen space-y-8 py-12">
      <h1 className="text-center text-4xl font-bold ">CSV EXPORT</h1>
      <div className="space-y-2">
        <div className="bg-white mx-auto p-4 w-9/12 flex items-center gap-5 rounded-lg">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 px-7 py-4 rounded-lg   text-white font-medium"
          >
            NEW RECORD
          </button>
          <CSVLink data={data}>
            <button className="bg-rose-600 p-4 rounded-lg px-7 py-4 text-white font-medium">
              EXPORT TO CSV
            </button>
          </CSVLink>
        </div>
        <div className="bg-white mx-auto p-4 w-9/12">
          <table className="w-full ">
            <tr className="bg-rose-500 text-white text-left ">
              <th className="p-4">Customar's name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            {data.map((item, index) => (
              <tr className="text-black/60 key={index}">
                <td>{item.customerName}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.product}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>{moment(item.date).format("MMM DD YYYY, hh:mm,A")}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Modal open={open} footer={false} onCancel={handleClose}>
        <Form onFinish={createRecord} layout="vertical" form={form}>
          <Form.Item
            label="Customer's name"
            name="customerName"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Customer's Name" />
          </Form.Item>
          <Form.Item label="Mobile" name="mobile" rules={[{ required: true }]}>
            <Input placeholder="Mobile number" size="large" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input size="large" placeholder="abcd@mail.com" />
          </Form.Item>
          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Product" />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, type: "Number" }]}
          >
            <Input size="large" placeholder="Amount" />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select size="large" placeholder="Choose Status">
              <Select.Option value="hot">Hot</Select.Option>
              <Select.Option value="cold">Cold</Select.Option>
              <Select.Option value="closed">Closed</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker size="large" className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
