const TaskDeleteBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task")
        // const cartItem = { name, image, description, id, email, services };
       
    
    
        // fetch("/api/trynow", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(cartItem),
        // })
        //   .then(() => {
        //     setClicked(true);
        //     Swal.fire({
        //       icon: "success",
        //       title: "Added to Cart",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //   })
        //   .catch((error) => {
        //     console.error("Error adding to cart:", error);
        //     Swal.fire({
        //       icon: "error",
        //       title: "Error",
        //       text: "An error occurred while adding to cart.",
        //       confirmButtonText: "OK",
        //     });
        //   });
      };
      return(
        <div>
            <button onClick={handelAddToCart} className="btn">Delete</button>
        </div>
      )

}

export default TaskDeleteBtn;