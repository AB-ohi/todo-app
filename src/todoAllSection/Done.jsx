import { useEffect, useState } from "react";

const Done = () => {
  const [done,setDone] = useState([])


  useEffect(()=>{
    fetch('http://localhost:1234/inprogress')
    .then(res => res.json())
    .then(data => setDone(data))
},[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Task Name</th>
      </tr>
    </thead>
    <tbody>
    {
            done.length > 0 ? (
              done.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.task_name}</td>
                  <td></td>
                  <td><button className="btn">Done</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-slate-400" colSpan="4">No tasks in Done</td>
              </tr>
            )
          }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Done;