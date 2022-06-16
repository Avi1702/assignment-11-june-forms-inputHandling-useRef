import React from "react";

function Data(){
    const [data,setData]=React.useState([])

    React.useEffect(()=>{
        fetch(`http://localhost:30001/employeData`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
      },[])

    return(<>
    <hr></hr>
    <h2>Employees Data</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Maritial Status</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{
                                item.salary}</td>
                                <td>{item.maritial?"Married":"Unmarried"}</td>
                                <td>{item.department}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

    {

    }
    </>);
}

export default Data