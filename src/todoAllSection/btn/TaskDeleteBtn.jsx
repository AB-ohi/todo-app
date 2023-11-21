


// eslint-disable-next-line react/prop-types
const TaskDeleteBtn = ({id, doneData}) =>{
    const handelAddToCart = () => {
      fetch(`http://localhost:1234/done/${id}`, {
        method: "DELETE",
      })
      doneData()
      
      };
      return(
        <div>
            <button onClick={handelAddToCart} className="btn">
              Delete
              </button>
        </div>
      )

}

export default TaskDeleteBtn;