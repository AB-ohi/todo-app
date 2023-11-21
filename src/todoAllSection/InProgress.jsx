import { useEffect, useState } from "react";
import DoneBtn from "./btn/DoneBtn";
// import { hot } from "react-hot-loader";

const InProgress = () => {
  const [inprogress,setInprogress] = useState([])
  const fetchData = () => {
    fetch('http://localhost:1234/inprogress')
      .then(res => res.json())
      .then(data => setInprogress(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {

    fetchData();
  }, []);

    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
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
            inprogress.length > 0 ? (
              inprogress.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.task_name}</td>
                  <td></td>
                  <td><DoneBtn task_name={task.task_name} id={task._id} fetchData={fetchData}/></td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-slate-400" colSpan="4">No tasks in Progress</td>
              </tr>
            )
          }
    </tbody>
  </table>
</div>
    );
};

export default (InProgress);