
import './App.css';
import React from 'react';

function App() {

  const [form,setForm]=React.useState({
    name:"",
    age:"",
    address:"",
    salary:"",
    department:"",
    maritial:false,
 })

//  async function display(){
//    let res=await fetch(`http://localhost:3000/employeData`)
//    let data=await res.json()
//    console.log(data)

//  }

//  React.useEffect(()=>{
//   display()
//  })

 function handleChange(e){
  let {name,value,checked,type}=e.target

value=type==="checkbox"?checked:value;

  setForm({...form,[name]:value})
}

 

 function submit(e){
  // setForm("")
  e.preventDefault()
  console.log(form)
// const payload={
// name:name,
// age:age,
// salary:salary,
// department:department,
// maritial:maritial,
// }

// fetch( `http://localhost:3000/employeData`,{
//  method:"POST",
//  body: JSON.stringify(payload),
//  headers: { "Content-Type": "application/json" }, 
// })
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// console.log(payload)
 }

 

 const {name,age,address,salary,department,maritial}=form;

  return (
    <>
    <div className="App">
     <h1>Employee Data</h1>
     <br/>
     <form>
      {/* <input type={"text"} placeholder="name" ></input> */}
      <input type={"text"} placeholder='Name' name='name' value={name} onChange={handleChange}></input><br/>
      <input  type={"number"} placeholder='Age' name='age' value={age} onChange={handleChange}></input><br/>
      <input  type={"text"} placeholder='Address' name='address' value={address} onChange={handleChange}></input><br/>
      <input type={"text"} placeholder='salary' name='salary' value={salary} onChange={handleChange}></input><br/>
     
      <input  type={"checkbox"} checked={maritial} name='maritial'  onChange={handleChange}></input>
      <label>Married</label>
     
     
      <select name='department' value={department} onChange={handleChange}>
        <option value="">Department</option>
        <option value="IT">IT</option>
        <option value="Non-IT">Non-IT</option>
      </select>
      <br/>
      <input type={"submit"} onClick={submit}></input>
     </form>
    </div>
    </>
  )
}

export default App;
