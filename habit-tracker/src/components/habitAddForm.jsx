import React from "react";
import { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
//PureComponent: props, state에 안에 들어있는 데이터가 최상위 데이터가 변하지 않으면 render함수가 호출 되지 안습니다.
// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   onSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     //this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };

//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="add-input"
//           placeholder="Habit"
//         />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }
