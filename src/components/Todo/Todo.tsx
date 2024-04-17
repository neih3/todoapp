import React from "react";
import styles from "./todo.module.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import classNames from "classnames";
import { statusTodo } from "../../getAPI";
import { CiEdit } from "react-icons/ci";
import { MdDownloading } from "react-icons/md";
import { AlertContext } from "../../App";

interface TodoProps {
  value: any;
  deleteTodo: any;
  editATodo: any;
}

const Todo = ({ value, deleteTodo, editATodo }: TodoProps) => {
  const setAlert = React.useContext(AlertContext);
  const [completed, setCompleted] = React.useState(value.completed);
  const [showInput, setShowInput] = React.useState(false);
  const [editing, setEditing] = React.useState<boolean>(false);
  const [text, setText] = React.useState(value.name);
  const className: any = classNames(styles.todo, {
    [styles.todoCompleted]: completed,
  });
  React.useEffect(() => {
    document.getElementById("editInput")?.focus();
  }, [editing]);
  const handleEdit = () => {
    if (text) {
      editATodo(value, text).then(() => {
        setText("");
        setShowInput(!showInput);
        setAlert({
          content: "Sửa thành công ",
          status: true,
        });
      });
    } else {
      setText(value.name);
      setShowInput(!showInput);
    }
  };
  const pressEnter = () => {
    setEditing(!editing);
    handleEdit();
  };
  return (
    <>
      <div className={className}>
        <div style={{ display: "flex", gap: "0 12px" }}>
          <div
            onClick={() => {
              statusTodo(value, completed).then((res) => {
                setCompleted(res.completed);
              });
            }}
          >
            {completed ? (
              <RiCheckboxCircleFill />
            ) : (
              <RiCheckboxBlankCircleLine />
            )}
          </div>

          <span>
            {showInput ? (
              <>
                <input
                  className={styles.input}
                  type="text"
                  name=""
                  id="editInput"
                  value={text}
                  placeholder={text}
                  onKeyDown={(e) => e.keyCode === 13 && pressEnter()}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                />
                {/* <button onClick={handleEdit}>
                  <IoMdSave />
                </button> */}
              </>
            ) : (
              `${value.name}`
            )}
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <button
            className={styles.editBtn}
            onClick={() => {
              setEditing(!editing);
              setText(value.name);
              setShowInput(!showInput);
              editing && handleEdit();
            }}
          >
            {editing ? <MdDownloading></MdDownloading> : <CiEdit />}
          </button>
          <button
            onClick={() => {
              deleteTodo(value.id);
              setAlert({
                content: "Xóa thành công",
                status: true,
              });
            }}
          >
            <div className={styles.deleteBtn}>
              <IoMdClose />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
