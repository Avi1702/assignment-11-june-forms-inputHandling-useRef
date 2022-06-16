import React from "react";

function Form(){
    
        const [form,setForm]=React.useState({
            name:"",
            age:"",
            address:"",
            salary:"",
            department:"",
            maritial:false,
         })
    
 const {name,age,address,salary,department,maritial}=form;

     function handleChange(e){
      let {name,value,checked,type}=e.target
    
    value=type==="checkbox"?checked:value;
    
      setForm({...form,[name]:value})
    }
    
     
    
    function submit(e){
     
      e.preventDefault()
   
    const payload={
    name:name,
    age:age,
    salary:salary,
    department:department,
    maritial:maritial,
    }
    
    fetch( `http://localhost:30001/employeData`,{
     method:"POST",
     body: JSON.stringify(payload),
     headers: { "Content-Type": "application/json" }, 
    })
    // .then((res)=>res.json())
    // .then((res)=>)
    .catch((err)=>console.log(err))
    window.location.reload()
    // console.log(payload)
     }
  

    return(<>
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
     <br/>
    
      <select name='department' value={department} onChange={handleChange}>
        <option value="">Department</option>
        <option value="IT">IT</option>
        <option value="Non-IT">Non-IT</option>
      </select>
      <br/>
      <input type={"submit"} onClick={submit}></input>
   

     </form>
    </>);
}

export default Form