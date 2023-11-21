import Done from "../todoAllSection/Done";
import Todo from "../todoAllSection/Todo";
import InProgress from "../todoAllSection/inProgress";

const TodoList = () => {
  return (
    <div>
      <div className="tabs tabs-bordered">
         <input
          type="radio"
          name="my_tabs_2"
          className="tab md:text-black text-white"
          aria-label="Todo"
          checked
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-box p-10">
          <Todo/>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab md:text-black text-white"
          aria-label="Inprogress"
         
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-box p-10">
          <InProgress/>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab md:text-black text-white"
          aria-label="Done"
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-box p-10">
          <Done/>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
