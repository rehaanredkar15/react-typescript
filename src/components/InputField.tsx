import React,{useRef} from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
