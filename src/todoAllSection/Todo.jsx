import { useEffect, useState } from "react";
import InprogressBtn from "./btn/inprogressBtn";

const Todo = () => {

  const [todo,setTodo] = useState([])
  const [addTaskInput, setAddTaskInput] = useState('')
  const handelAddTask = async(event) =>{
    event.preventDefault()

    const form = event.target;
    const task_name = form.task.value;
    const AddTask = {task_name}
    // console.log(task_name)

    await fetch("https://todo-app-sever.vercel.app/todo",{
      method:"POST",
      headers:{
        'content-type':'application/json' 
      },
      body:JSON.stringify(AddTask)
    })
    setAddTaskInput('')
    fetch('https://todo-app-sever.vercel.app/todo')
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }

  useEffect(()=>{
    fetch('https://todo-app-sever.vercel.app/todo')
    .then(res => res.json())
    .then(data => setTodo(data))
},[])

const updateTodoList = () => {
  fetch("https://todo-app-sever.vercel.app/todo")
    .then((response) => response.json())
    .then((data) => setTodo(data))
    .catch((error) => console.error("Error fetching updated todo list:", error));
}
    return (
            <div className="overflow-x-auto">
              <div>
                <form onSubmit={handelAddTask}>
                  <input  value={addTaskInput} onChange={(e) => setAddTaskInput(e.target.value)} className="outline-none bg-[#f5dc6e] px-6 py-2 rounded-s-xl" type="text" name="task" placeholder="Add Task" />
                  <input className="bg-[#FFF5E5] px-6 py-2 rounded-e-xl cursor-pointer" type="submit" value="Add"/>
                </form>
              </div>
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Task Name</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        todo.length > 0? (
          
            todo.map((todos, index)=>(
              <tr key={todos._id}>
            <th>{index+1}</th>
            <td>{todos.task_name}</td>
            <td></td>
            <td><InprogressBtn task_name={todos.task_name} id={todos._id}  updateTodoList={updateTodoList} /></td>
          </tr>
            ))
          
        ):(
          <tr>
                <td className="text-slate-400" colSpan="4">Add your task</td>
              </tr>
        )
      }
      
    </tbody>
  </table>
</div>
    );
};

export default Todo;