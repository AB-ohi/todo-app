import TodoList from '../Todo/TodoList';
import "./Main.css"

const Main = () => {
    return (
        <div className='full-body flex items-center justify-around'>
            <div>
                <h1 className='text-center title-name md:text-black text-white'>Todo List</h1>
                <div className='header-underline'></div>
                <p className='text-red-600 text-center text-[14px]'>Please reload the page after select your task in each section*</p>
            <TodoList/>
            </div>
            <div></div>
        </div>
    );
};

export default Main;