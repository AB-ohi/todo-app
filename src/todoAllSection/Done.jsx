const Done = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Name</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td><button className="btn">Delete</button></td>
      </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Done;