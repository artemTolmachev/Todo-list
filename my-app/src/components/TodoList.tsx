import {TodoItem} from './TodoItem';

import {ITodo} from '../types/data';

//описываем что мы ожидаем в пропсах:
interface ITodoListProps {
    items: ITodo[];
}
const TodoList: React.FC <ITodoListProps> = (props) => {
   
    return <div>
        {props.items.map(item => <TodoItem key={item.id} {...item}/>)}
    </div>
}

export {TodoList}