import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Users() {

    const sample=[
        {
            id:'1',
            name:'Ann',
            createAt:8.3,
            type: 'seller',
            ordersNum:32
        },
        {
            id:'2',
            name:'Glen',
            createAt:8.3,
            type: 'Buyer',
            ordersNum:23
        }
    ]

    const navigate=useNavigate()
    function toDetail( id ){
        navigate(`${id}`)
    }

    const [record,setRecord]=React.useState([]);
    React.useEffect(()=>{
        setRecord(sample);
        const result = fetch('http://localhost:8080/SWEN90007_2022_Try_Catch_war_exploded/GetAllEmployee', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
          result.then(ret => {
            ret.json().then(data => {
                setRecord(data)
                console.log(data)
            })
          })
    },[])

  return (
    <div class="body">
            <div class="setting"> 
                <p>Hello! adminname    </p>
                <a href="/logout">logout</a>
            </div>
            <div class="right-container">
                <div class="rt-container">
                    <h1 class="title">Users</h1>
                </div>
                <div class="mid-container">
                    <div class="buttonset">
                        <div class="tag1">
                            <button class="tag">Buyer</button>
                        </div>
                        <div class="tag2">
                            <button class="tag">Seller</button>
                        </div>
                    </div>
                    <div class="searchbar">
                        <input type="text" name="search" id="1" placeholder="Search"/>
                    </div>
                </div>
                <div class="lt-container">
                    <div class="table">
                        <table class="table_box">
                            <thead>
                                <tr class="req_name">
                                    <th class="data_name">Username</th>
                                    <th class="data_name">Register Time</th>
                                    <th class="data_name">Orders</th>
                                    <th class="data_name">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(record||[]).map((item)=>{
                                    return(
                                    
                                        <tr onClick={()=>toDetail(item.employee_id)}>
                                    
                                            <td>{item.username}</td>
                                            <td>{item.createAt}</td>
                                            <td>{item.ordersNum}</td>
                                            <td>Seller</td>
                                        </tr>
                                )
                                })}
                            </tbody>
                    </table>
                    </div>
                </div>
            </div>

       
    </div>
  )
}
