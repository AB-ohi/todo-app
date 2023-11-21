


// eslint-disable-next-line react/prop-types
const TaskDeleteBtn = ({id, doneData}) =>{
    const handelAddToCart = () => {
      fetch(`https://todo-app-sever.vercel.app/done/${id}`, {
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