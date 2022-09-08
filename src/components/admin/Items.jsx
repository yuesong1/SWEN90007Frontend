import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const sample=[
    {
        id:'1',
        name:'apple',
 
        seller:'b',
        createAt:8.3,
        quantity:20,
        price:5,
        type: 'auction'
    },
    {
        id:'2',
        name:'cup',
        seller: 'Ann',
  
        createAt:8.24,
        quantity:24,
        price:34,
        type: 'auction'
    }
]

export default function Goods() {

    const navigate=useNavigate()
    function toDetail( id ){
        navigate(`${id}`)
    }

    const [record,setRecord]=React.useState([]);
    React.useEffect(()=>{
        setRecord(sample);
        // const result = fetch('http://localhost:80/forms', {
        //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //       accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     }
        //   });
        //   result.then(ret => {
        //     ret.json().then(data => {
        //         setRecord(data.data)
      
        //     })
        //   })
    },[])

  return (
    <div className="body">
            <div className="setting"> 
                <p>Hello! adminnam    </p>
                <a href="/logout">logout</a>
            </div>
            <div className="right-container">
                <div className="rt-container">
                    <h1 className="title">Listings</h1>
                </div>
                <div className="mid-container">
                    <div className="buttonset">
                        <div className="tag1">
                            <button className="tag">Fixed-price</button>
                        </div>
                        <div className="tag2">
                            <button className="tag">Auction</button>
                        </div>
                    </div>
                    <div className="searchbar">
                        <input type="text" name="search" id="1" placeholder="Search"/>
                    </div>
                </div>
                <div className="lt-container">
                    <div className="table">
                        <table className="table_box">
                            <thead>
                                <tr className="req_name">
                                    <th className="data_name">Item name</th>
                                    <th className="data_name">Create at</th>
                                    <th className="data_name">Quantity</th>
                                    <th className="data_name">Seller</th>
                                    <th className="data_name">Price</th>
                                    <th className="data_name">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(record||[]).map((item)=>{
                                    return(
                                    
                                        <tr onClick={()=>toDetail(item.id)}>
                                            <td>{item.name}</td>
                                            <td>{item.createAt}</td> 
                                            <td>{item.quantity}</td>
                                            <td>{item.seller}</td> 
                                            <td>{item.price}</td>
                                            <td>{item.type}</td>
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
