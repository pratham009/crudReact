import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {Link, useNavigate} from 'react-router-dom'



function Home(){
let history = useNavigate();
const handleClick =() =>{
    localStorage.clear();
    window.location.reload();
}   

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

        const handleDelete =(id)=>{
            var index = Employees.map(function(e){
                return e.id
            }).indexOf(id)

            Employees.splice(index,1);
            history('/');
        }

    return (
        <>
            <div style={{margin:"10rem"}}>
                <Table stripped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0 
                            ? 
                            Employees.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>

                                            <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
            
                                            &nbsp;
                                            <Link to={`/edit`}>
                                            <Button onClick={()=>handleEdit(item.id, item.Name,item.age)}>Edit</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data avalaible"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link to = "/create">
                    <Button size="lg" >Create</Button>
                </Link>
                <Button onClick={handleClick} size="lg" type="submit">Logout</Button>

         
               
            
            </div>
        </>
    )
}
export default Home;