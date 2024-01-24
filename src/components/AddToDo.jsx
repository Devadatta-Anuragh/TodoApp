import { useRef } from "react";

function AddToDo({ onAddBtn }) {
  // const [textValue, settextValue] = useState("");
  // const [dateValue, setdateValue] = useState("");

  const textValueElement = useRef();
  const dateValueElement = useRef();

  const addBtnClicked = (event) => {
    event.preventDefault();
    const textValue = textValueElement.current.value;
    const dateValue = dateValueElement.current.value;
    onAddBtn(textValue, dateValue);
  };

  return (
    <div className="container text-center">
      <form className="row each-row" onSubmit={addBtnClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={textValueElement}
            className="text"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dateValueElement} className="date"></input>
        </div>
        <div className="col-2">
          <button type="submit" className={"btn btn-success each-btn"}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
