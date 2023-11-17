import TodoList from '../Todo/TodoList';
import "./Main.css"

const Main = () => {
    return (
        <div className='full-body flex items-center justify-around'>
            <div>
                <h1 className='text-center title-name'>Todo List</h1>
                <div className='header-underline'></div>
            <TodoList/>
            </div>
            <div></div>
        </div>
    );
};

export default Main;