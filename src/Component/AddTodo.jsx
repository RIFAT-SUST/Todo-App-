import {useState} from "react";
import { MdOutlineAddCircle } from "react-icons/md";



function AddTodo({onNewItem}){

const [todoName,setTodoName] = useState("");
const [todoDueDate,setTodoDueDate] = useState("");

const handleNamechange=(event)=>{
  setTodoName(event.target.value);
}

const handleDateChange = (event) =>{
  setTodoDueDate(event.target.value);
}

const handleAddButtonClicked =()=>{
  onNewItem(todoName,todoDueDate);
  setTodoDueDate("");
  setTodoName("");
}

  return <div className="container">
  <div className="row kg-row">
  <div className="col-6">
    <input type= "text" placeholder ="Enter Your Task"
    onChange ={handleNamechange} value = {todoName}
    ></input>
  </div>
  <div className="col-4">
    <input type="time" placeholder = "Enter Time" onChange = {handleDateChange} value= {todoDueDate}></input>
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-success kg-button"
  onClick ={ handleAddButtonClicked  } 
> Add<MdOutlineAddCircle /></button>
  </div>
</div>
</div>
}

export default AddTodo;