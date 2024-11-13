// import "./App.css";
import {useState} from "react";
import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItems from "./Component/TodoItems";
import EmptyMassage from "./Component/EmptyMassage";



function App() {
  

  const [todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDate)=>{

  //   setTodoItems((currVal) => {
  //  const newTodoItems = 
  //   [
  //     ...currVal ,{name:itemName, tarik:itemDate},
  //   ]
  // });
  // return newTodoItems;
  // }
   const newTodoItems = [...todoItems ,{ name :itemName,
    tarik:itemDate
   },
  ];
  setTodoItems(newTodoItems);
  }

  const handleDeleteItem =(TodoItemsName)=>{
      const newTodoItems =todoItems.filter((item) => item.name !==TodoItemsName 
    );
    setTodoItems(newTodoItems);
  }
  

  return <center className ='todo-container'>
    <AppName></AppName>
    <AddTodo onNewItem = {handleNewItem}></AddTodo>
    {todoItems.length <=0 && <EmptyMassage></EmptyMassage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
 
  </center>
}
          
export default App;
