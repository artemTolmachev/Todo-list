import {useState, useEffect, useRef} from 'react'
import {ITodo} from '../types/data';
import { TodoList } from './TodoList';


const App: React.FC = () => {

    const [value, setValue] = useState('');
    const [todos, setTodo] = useState<ITodo[]>([]);

    const addTodo = () => {
        if(value){
            setTodo([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('');
        }
    }


    return <div>
        <div>
            <input onChange={(e) => setValue(e.target.value)} />
            <button >Add</button>
            <TodoList items={todos} />
        </div>
    </div>
}
export {App}