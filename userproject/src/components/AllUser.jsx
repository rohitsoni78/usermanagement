import users from "./User";
import SingleUser from "./SingleUser";
import { useState } from "react";

const AllUser=()=>{
    const [emp,setEmp]=useState([]);
    const [showemp,setShowemp]=useState(false);

    const addEmp=()=>{
        setEmp(users);
        setShowemp(true);
    }
    const deleteAllUser=()=>{
        setEmp([]);
        setShowemp(false);
    }

    const deleteUser=(id)=>{
        const UpdatedEmp=emp.filter(e=>e.id!==id);
        setEmp(UpdatedEmp);
        if(UpdatedEmp.length===0)
        {
            setShowemp(false);
        }

    }

    return(
        <>
        <div>
            <h1>Employees Data</h1>
            {!showemp && (
                <button onClick={addEmp}>Add Emp</button>
            )}

            {showemp &&(
             <table border={1} cellPadding={3} cellSpacing={8}>
                <tbody>
                    {emp.map(e=>(
                        <SingleUser key={e.id} user={e} deleteUser={deleteUser}/>
                    ))}
                </tbody>
             </table>   
            )}
            {showemp &&(
                <button onClick={deleteAllUser}>Delete All Emp</button>
            )}
        </div>
        </>
    )
}
export default AllUser;