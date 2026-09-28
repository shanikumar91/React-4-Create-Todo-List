import { useState } from "react";
import {v4 as uuidv4} from 'uuid';


// Create Todo List 
// export default function TodoActivity(){
//     let[todos, setTodos] = useState(["sample Task"]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = ()=>{
//         setTodos([...todos, newTodo]);
//         setNewTodo("");
//     }
//     let updateTodoValue = (event) =>{
//             // console.log(event.target);
//             // console.log(event.target.value);
//             setNewTodo(event.target.value);
//     }
//     return(
//         <div>
//             <br /><br />
//             <input placeholder="add a task" 
//             value={newTodo}
//              onChange={updateTodoValue}/>
//             <br /><br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br /><br /><br />
//             <h4>Tasks Todo </h4>
//             <ul>
//                 {todos.map((todo)=>(
//                     <li>{todo}</li>
//                 ))};
//             </ul>
//         </div>
//     );
// }



// Unique Key for list Items 
// export default function TodoActivity(){
//     let[todos, setTodos] = useState([{task:"sample Task", id:uuidv4()}]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = ()=>{
//         setTodos([...todos, {task: newTodo, id:uuidv4()}]);
//         setNewTodo("");
//     }
//     let updateTodoValue = (event) =>{
//             // console.log(event.target);
//             // console.log(event.target.value);
//             setNewTodo(event.target.value);
//     }
//     return(
//         <div>
//             <br /><br />
//             <input placeholder="add a task" 
//             value={newTodo}
//              onChange={updateTodoValue}/>
//             <br /><br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br /><br /><br />
//             <h4>Tasks Todo </h4>
//             <ul>
//                 {todos.map((todo)=>(
//                     <li key={todo.id}>{todo.task}</li>
//                 ))};
//             </ul>
//         </div>
//     );
// }



// Deleting from Array 
// export default function TodoActivity(){
//     let[todos, setTodos] = useState([{task:"sample Task", id:uuidv4()}]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = ()=>{
//         setTodos((prevTodos) => {
//             return[...prevTodos, {task: newTodo, id:uuidv4()}]});

//         setNewTodo("");
//     }
//     let updateTodoValue = (event) =>{
//             // console.log(event.target);
//             // console.log(event.target.value);
//             setNewTodo(event.target.value);
//     }
//     let deleteTodo = (id) =>{
//         // console.log("Task to be deleted"+id);
//          setTodos(() => todos.filter((todo) => todo.id != id));
//     }
//     return(
//         <div>
//             <br /><br />
//             <input placeholder="add a task" 
//             value={newTodo}
//              onChange={updateTodoValue}/>
//             <br /><br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br /><br /><br />
//             <h4>Tasks Todo </h4>
//             <ul>
//                 {todos.map((todo)=>(
//                     <li key={todo.id}>
//                         <span>{todo.task}</span>
//                         &nbsp; &nbsp; &nbsp;
//                         <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
//                         </li>
//                 ))};
//             </ul>
//         </div>
//     );
// }



// Updating all elements in Array 
// export default function TodoActivity(){
//     let[todos, setTodos] = useState([{task:"sample Task", id:uuidv4()}]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = ()=>{
//         setTodos((prevTodos) => {
//             return[...prevTodos, {task: newTodo, id:uuidv4()}]});

//         setNewTodo("");
//     }
//     let updateTodoValue = (event) =>{
//             setNewTodo(event.target.value);
//     }
//     let deleteTodo = (id) =>{
//         // console.log("Task to be deleted"+id);
//          setTodos(() => todos.filter((todo) => todo.id != id));
//     }
//     let upperCaseAll = ()=>{
//        setTodos(
//         todos.map((todo)=>{
//             return {
//                 ...todo,
//                 task: todo.task.toUpperCase()
//             };
//         }) );
//     }
//     return(
//         <div>
//             <br /><br />
//             <input placeholder="add a task" 
//             value={newTodo}
//              onChange={updateTodoValue}/>
//             <br /><br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br /><br /><br />
//             <h4>Tasks Todo </h4>
//             <ul>
//                 {todos.map((todo)=>(
//                     <li key={todo.id}>
//                         <span>{todo.task}</span>
//                         &nbsp; &nbsp; &nbsp;
//                         <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
//                         </li>
//                 ))};
//             </ul>
//             <br /><br />
//             <button onClick={upperCaseAll}>UpperCase All</button>
//         </div>
//     );
// }


// Updating One Elements in Array 
// export default function TodoActivity(){
//     let[todos, setTodos] = useState([{task:"sample Task", id:uuidv4()}]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = ()=>{
//         setTodos((prevTodos) => {
//             return[...prevTodos, {task: newTodo, id:uuidv4()}]});

//         setNewTodo("");
//     }
//     let updateTodoValue = (event) =>{
//             setNewTodo(event.target.value);
//     }
//     let deleteTodo = (id) =>{
//         // console.log("Task to be deleted"+id);
//          setTodos(() => todos.filter((todo) => todo.id != id));
//     }
//     let upperCaseOne = (id)=>{
//        setTodos(
//         todos.map((todo)=>{
//             if(todo.id === id){
//                 return {
//                 ...todo,
//                 task: todo.task.toUpperCase(),
//             };
//             }
//             else{
//                 return todo;
//             }
//         }) );
//     }
//     return(
//         <div>
//             <br /><br />
//             <input placeholder="add a task" 
//             value={newTodo}
//              onChange={updateTodoValue}/>
//             <br /><br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br /><br /><br />
//             <h4>Tasks Todo </h4>
//             <ul>
//                 {todos.map((todo)=>(
//                     <li key={todo.id}>
//                         <span>{todo.task}</span>
//                         &nbsp; &nbsp; &nbsp;
//                         <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
//                         <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button>
//                         </li>
//                 ))};
//             </ul>
//         </div>
//     );
// }



// Changing Todo : Implement "Done Task" feature to the todo 
export default function TodoActivity(){
    let[todos, setTodos] = useState([{task:"sample Task", id:uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodos) => {
            return[...prevTodos, {task: newTodo, id:uuidv4(), isDone:false}]});

        setNewTodo("");
    }
    let updateTodoValue = (event) =>{
            setNewTodo(event.target.value);
    }
    let deleteTodo = (id) =>{
        // console.log("Task to be deleted"+id);
         setTodos(() => todos.filter((todo) => todo.id != id));
    }
    let markAsDone = (id)=>{
       setTodos(
        todos.map((todo)=>{
            if(todo.id === id){
                return {
                ...todo,
                isDone: true,
            };
            }
            else{
                return todo;
            }
        }) );
    }
    return(
        <div>
            <br /><br />
            <input placeholder="add a task" 
            value={newTodo}
             onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <h4>Tasks Todo </h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                ))};
            </ul>
        </div>
    );
}