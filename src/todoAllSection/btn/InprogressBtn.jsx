/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const InprogressBtn = ({ task_name, id, updateTodoList  }) => {
  const handelAddToCart = () => {
    const AddTodo = { task_name, id };
    console.log(AddTodo);

    fetch("http://localhost:1234/inprogress", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddTodo),
    })
    .then(() => {
      fetch(`http://localhost:1234/todo/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          updateTodoList()
          
          Swal.fire({
            icon: "success",
            title: "your task add in progress",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while adding to cart.",
            confirmButtonText: "OK",
          });
        });
    });
  };
  return (
    <div>
      <button onClick={handelAddToCart} className="btn">
        In Progress
      </button>
    </div>
  );
};

export default InprogressBtn;
