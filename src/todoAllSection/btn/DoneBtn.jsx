import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const DoneBtn = ({ task_name, id, fetchData }) => {
  const handelAddToCart = () => {
    const doneTaskAdd = { task_name, id };

    fetch("http://localhost:1234/done", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doneTaskAdd),
    })
    .then(() => {
      fetch(`http://localhost:1234/inprogress/${id}`,{
        method: "DELETE",
      })
      .then(() => {
        fetchData()
        Swal.fire({
          icon: "success",
          title: "Add your task in progress",
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
        Done
      </button>
    </div>
  );
};

export default DoneBtn;
