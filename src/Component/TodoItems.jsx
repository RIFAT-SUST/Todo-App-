import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

const TodoItems=({todoItems,onDeleteClick})=>{
  return ( 
  <div className={styles.bam}>
    {todoItems.map((item)=>(
    <TodoItem key= {item.name}
    todoDate={item.tarik} 
    todoName={item.name} 
   onDeleteClick = {onDeleteClick} ></TodoItem>))}
  </div>
  );
};

export default TodoItems;