import { todoSelector, getAllTodoActions, clearTodo, updateTodoStatusAction, removeTodoAction} from '../todo_store/todoReducer/TodoReducer';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../todo_store/appReducer/AppReducer';
import { useEffect } from 'react';

const TodoList = ()=>{

    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();
    const currentUserid = localStorage.getItem('USER_ID')

    useEffect(() => {
        dispatch(getAllTodoActions(currentUserid))
    }, [dispatch])

    console.log('todos: ', todos)

    return(
        <>
        <ul>
             
                {todos.map((todo,index)=>
                    <li key = {index}>
                        <div className='row'>
                            <input className='check_box' type="checkbox"
                                checked={todo.status}
                                onChange={e => {
                                    console.log('todo.status: ', todo.status)
                                    return dispatch(updateTodoStatusAction(index, e.target.checked, todos, currentUserid))}}/>
                            <span style={{textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => dispatch(removeTodoAction(index, todos, currentUserid))}>Remove</button>
                        </div>
                    </li>)
                }
            </ul>
            <div className="row">
                <button onClick={() => {
                    dispatch(logoutAction())
                    dispatch(clearTodo())
                }}style={{marginLeft: 'auto'}}>Logout</button>
            </div>
        </>
    )
}

export default TodoList;