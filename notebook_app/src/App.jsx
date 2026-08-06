import { Button, Divider, Empty, Form, Input, Modal } from "antd";
import { Edit2, File, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useNote } from "./zustand/useNote";
import { nanoid } from "nanoid";
import moment from "moment";

const App = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [read, setRead] = useState(null);
  const { notes, setNote, deleteNote, updateNote } = useNote();
  const [editId, setEditId] = useState(null);
  const handleClose = () => {
    setOpen(false);
    form.resetFields();
    setEditId(null);
  };

  const createNote = (values) => {
    values.id = nanoid();
    values.date = new Date();
    setNote(values);
    handleClose();
  };

  const removeNote = (id) => {
    deleteNote(id);
    setRead(null);
  };

  const editNote = (item) => {
    setOpen(true);
    form.setFieldsValue(item);
    setEditId(item.id);
  };

  const saveNote = (values) => {
    const updatedNote = { ...values, id: editId, date: new Date() };
    updateNote(editId, updatedNote);
    setRead(updatedNote); // Now 'read' retains its 'id'
    handleClose();
  };
  return (
    <div className="min-h-screen bg-gray-200">
      <aside className="overflow-auto space-y-6 bg-[linear-gradient(153deg,_#00c6ff,_#0072ff,_hsl(306.6,_62.516230790359984%,_49.84212833218897%))] fixed top-0 left-0 w-[300px] h-full px-4 py-8 ">
        <div className="bg-white p-3 rounded-lg space-y-6">
          {notes.map((item, index) => (
            <button
              onClick={() => setRead(item)}
              key={item.id}
              className="flex items-start gap-1 hover:bg-gray-100 w-full hover:p-3 duration-300 cursor-pointer"
            >
              <File className="w-4 h-4 mt-[5px]" />
              <div className="flex flex-col">
                <label className="font-medium text-black/80 text-left ">
                  {item.filename}
                </label>
                <label className="text-xs text-gray-500 text-left capitalize">
                  {moment(item.date).format("DD MM YYYY, hh:mm A")}
                </label>
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 bg-rose-500 hover:bg-rose-600  hover:scale-105 transition-transform duration-300 text-white font-medium w-full py-3 justify-center rounded-lg"
        >
          <Plus />
          New File
        </button>
      </aside>
      <section className="ml-[300px] py-12">
        {read ? (
          <div className="w-10/12 mx-auto bg-white  rounded-xl">
            <div className="px-6 py-4 border-b border-gray-300 border-dashed flex justify-between items-center">
              <div>
                <h1 className="text-lg font-medium">{read.filename}</h1>
                <label className="text-gray-500 text-xs">
                  {moment(read.date).format("DD MM YYYY, hh:mm A")}
                </label>
              </div>

              <div className="space-x-3">
                <button
                  onClick={() => editNote(read)}
                  className="bg-green-500 p-2 rounded text-white hover:bg-green-600 hover:scale-105 transition-transform duration-300"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
                <button
                  onClick={() => removeNote(read.id)}
                  className="p-2 rounded text-white bg-rose-500 hover:bg-rose-600  hover:scale-105 transition-transform duration-300"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500">{read.content}</p>
            </div>
          </div>
        ) : (
          <div className="w-10/12 mx-auto bg-white  rounded-xl p-16 flex items-center justify-center">
            <Empty description="Choose a file to read" />
          </div>
        )}
      </section>
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        width={"70%"}
        maskClosable={false}
      >
        <h1 className="text-xl font-semibold">Create a new file</h1>
        <Divider />
        <Form
          layout="vertical"
          onFinish={editId ? saveNote : createNote}
          form={form}
        >
          <Form.Item
            label="Filename"
            name="filename"
            rule={[{ required: true }]}
          >
            <Input size="large" placeholder="enter file name" />
          </Form.Item>

          <Form.Item label="Content" name="content" rule={[{ required: true }]}>
            <Input.TextArea
              size="large"
              placeholder="content goes here"
              rows={10}
            />
          </Form.Item>
          <Form.Item>
            {editId ? (
              <Button size="large" type="primary" htmlType="submit" danger>
                Save
              </Button>
            ) : (
              <Button size="large" type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
