const Todo = () => {
    return (
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Name</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td></td>
        <td><button className="btn">Add In-Progress</button></td>
      </tr>
      
    </tbody>
  </table>
</div>
    );
};

export default Todo;