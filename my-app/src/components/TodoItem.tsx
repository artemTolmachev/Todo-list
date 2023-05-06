import { ITodo } from "../types/data"

//Описание интерфейса, что будет в списке дел
//Расширять ITodo (список дел) с помощью ITodoItem
interface ITodoItem extends ITodo { }

const TodoItem: React.FC <ITodoItem> = (props) => {
    const {id, title, complete} = props;
    return <div>
        
    </div>
}

export {TodoItem}