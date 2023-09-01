import React, { useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IoTrash, IoAdd } from "react-icons/io5";
import { ButtonComp, InputComp } from "./Comp";
import { Formik } from "formik";
import { addTodo, deleteTodo, updateStatusTodo } from "./features/todoSlice";

const TodoCard = ({ data, ind }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ index: ind }));
  };

  const handleUpdateStatusClick = () => {
    dispatch(updateStatusTodo({ ...data, status: "done", index: ind }));
  };

  return (
    <div className="row justify-content-center my-4">
      <div className="col-4">
        <Card style={{ backgroundColor: "#40444B" }}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div
                className={`btn ${
                  data.dueDate === new Date().toISOString().split("T")[0]
                    ? "btn-danger"
                    : data.status === "done"
                    ? "btn-success"
                    : "btn-secondary"
                } btn-sm`}
              >
                {data.dueDate === new Date().toISOString().split("T")[0]
                  ? "OVERDUE"
                  : data.status.toUpperCase()}
              </div>
              <div
                style={{ backgroundColor: "#36393F", cursor: "pointer" }}
                className="px-2"
                onClick={handleDeleteClick}
              >
                <IoTrash />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div>
                <div>{data.title}</div>
                <div>Due Date :</div>
                <div>{data.dueDate}</div>
              </div>
              {data.status !== "done" && (
                <div className="pt-4 mt-3">
                  <ButtonComp
                    text="Done"
                    size="sm"
                    className="px-3"
                    style={{ backgroundColor: "#5440D1", border: "none" }}
                    onClick={handleUpdateStatusClick}
                  />
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const CreateModal = ({ setShowModal, showModal }) => {
  const dispatch = useDispatch();

  const formInitialValues = {
    dueDate: "",
    title: "",
    status: "open",
  };

  const formSubmitHandler = (value) => {
    dispatch(addTodo(value));
    setShowModal(false);
  };
  return (
    <Modal show={showModal}>
      <Modal.Body style={{ backgroundColor: "#36393F" }}>
        <div>
          <b>New Todo</b>
        </div>
        <Formik initialValues={formInitialValues} onSubmit={formSubmitHandler}>
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <InputComp
                label="Title"
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              <InputComp
                label="Due Date"
                type="date"
                name="dueDate"
                value={values.dueDate}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-center">
                <ButtonComp
                  text="Save"
                  className="mb-2 px-4"
                  type="submit"
                  style={{
                    backgroundColor: "#5440D1",
                    border: "none",
                  }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <ButtonComp
                  text="Cancel"
                  className="px-4"
                  style={{
                    backgroundColor: "#36393F",
                    border: "none",
                  }}
                  onClick={() => setShowModal(false)}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};
const TodoHomeScreen = () => {
  const { user, todo } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className="row justify-content-center my-4">
        <div className="col-4">
          <h1>Hi, {user.name}</h1>
        </div>
      </div>
      {todo.length > 0 ? (
        todo.map((val, ind) => <TodoCard data={val} ind={ind} />)
      ) : (
        <div className="row justify-content-center my-4">
          <div className="col-4">
            <h3>Tidak Ada Data</h3>
          </div>
        </div>
      )}
      <div className="row justify-content-center my-4">
        <div className="col-4 d-flex justify-content-end">
          <div
            className="btn btn-success"
            style={{ borderRadius: 80, width: 60, height: 60 }}
            onClick={() => setShowModal(true)}
          >
            <div className="mt-1">
              <IoAdd fontSize={35} color="#36393F" />
            </div>
          </div>
        </div>
      </div>
      <CreateModal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default TodoHomeScreen;
