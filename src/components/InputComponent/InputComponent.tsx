import React from "react";
import { FaPlus } from "react-icons/fa6";
import styles from "./input.module.css";
import { BsFillSendFill } from "react-icons/bs";
import { AlertContext } from "../../App";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputComponent = ({ addATodo }: any) => {
  const [value, setValue] = React.useState("");
  const setAlert = React.useContext(AlertContext);
  const handleAddTodo = () => {
    if (value) addATodo(value).then(() => setValue(""));
    setAlert({
      content: "Đã thêm thành công",
      status: true,
    });
  };

  return (
    <div className={styles.inputForm}>
      <div>
        <FaPlus />
      </div>
      <input
        className={styles.input}
        type="text"
        name=""
        value={value}
        placeholder="Thêm Job"
        onKeyDown={(e) => e.keyCode === 13 && handleAddTodo()}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>
        <BsFillSendFill />
      </button>
    </div>
  );
};

export default InputComponent;
