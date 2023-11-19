import { useEffect, useState } from "react";
import InprogressBtn from "./btn/inprogressBtn";

const Todo = () => {

  const [todo,setTodo] = useState([])


  useEffect(()=>{
    fetch('http://localhost:1234/todo')
    .then(res => res.json())
    .then(data => setTodo(data))
},[])
    return (
            <div className="overflow-x-auto">
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
        todo.map((todos, index)=>
          <tr key={todos._id}>
        <th>{index+1}</th>
        <td>{todos.task_name}</td>
        <td></td>
        <td><InprogressBtn/></td>
      </tr>
          )
      }
      
    </tbody>
  </table>
</div>
    );
};

export default Todo;