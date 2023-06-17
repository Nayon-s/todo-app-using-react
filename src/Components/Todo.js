import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todo() {
  const [text, setText] = useState({
    title: "",
    description: "",
  });
  const { title, description } = text;
  const [pending, setPending] = useState([]);
  const [completed,setCompleted]=useState([])
  const changes = (e) => {
    if (e.target.name === "title") {
      setText({
        title: e.target.value,
        description,
      });
    }
    if (e.target.name === "description") {
      setText({
        title,
        description: e.target.value,
      });
    }
  };
  const addTodo = () => {
    setPending([...pending, text]);
    setText({
      title: "",
      description: "",
    });
    toast("New Task is added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      backgroundColor: "#ffffff"
      });
  };
  const deletes=(id)=>{

    const newpending = pending.filter((todo, index) => index !== id);
    const newCompleted=pending[id]
    setCompleted([...completed, newCompleted])
    setPending(newpending)

    toast('This Task is Completed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }
  const clear=()=>{
    setCompleted([])
  }
  
  
  return (
    <div className="d-flex justify-content-center align-items-center">
      
        
    <div className="bg-dark text-light m-5 w-50">
      <form className="text-center">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           <h2 >Title</h2> 
          </label>
          <input
            required
            type="name"
            value={title}
            onChange={changes}
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
           <h2 >Description</h2> 
          </label>
 
          <textarea
            required
            onChange={changes}
            name="description"
            value={description}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="text-center mt-3">
        <button disabled={title.trim() === '' || description.trim() === ''} type="submit" onClick={addTodo} className="btn btn-light mb-3 fs-5">
          Add Todo List 
        </button>
        </div>
      </form>
     <div className="row mt-5">
     <div className="col-6 ">
      <h2 className="text-center">Pending</h2>
      {pending.map((index, id) => {
        return (
          <div>
          <div className="card mt-3 " key={id}>
        
          <h3 className="card-header text-dark">{index.title}</h3>
          
        
          <p className="card-body text-dark bg-light">{index.description}</p>

        
        
      </div>
      <button onClick={() => deletes(id)} className="btn btn-light mt-1 w-100  fs-5">Delete</button>
      </div>
        );
      })}
      </div>
       
       <div className="col-6 ">
        
        <h2 className="text-center">Completed</h2>
       
      {completed.map((index, id) => {
        return (
          
          <div className="card mt-3 " key={id}>
        <h3 className="card-header text-dark">{index.title}</h3>
          <p className="card-body text-dark bg-light">{index.description}</p>

      </div>
        );
      })}
      {completed.length>5 &&
      <button onClick={clear} className="btn btn-light mt-4">Clear All</button>}
      </div>
     </div>
    </div>
    
      <ToastContainer  />
    
    
    </div>
  );
}
