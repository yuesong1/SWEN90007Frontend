import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg'
import { useParams } from 'react-router-dom';

const sample=[
    {
        id:'1',
        name:'apple',
 
        seller:'b',
        createAt:8.3,
        quantity:20,
        price:5,
        type: 'auction',
        description:'ultra fresh '
    }

]
const sample2=[
    {
        id:'1',
        name:'apple',
        buyer: 'a',
        seller:'b',
        createAt:8.3,
        quantity:20,
        price:5,
        type: 'auction'
    },
    {
        id:'2',
        name:'cup',
        buyer: 'Ann',
        seller:'Glen',
        createAt:8.24,
        quantity:24,
        price:34,
        type: 'auction'
    }
]

export default function ItemsDetail() {
    console.log(useParams().id)
    const navigate=useNavigate()
    function toDetail( id ){
        navigate(`/admin/orders/${id}`)
    }
    function back(){
        navigate(`/admin/items`)
    }

    const [records,setRecords]=React.useState([]);
    const [orders,setOrders]=React.useState([]);
    React.useEffect(()=>{
        setRecords(sample);
        setOrders(sample2);
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
            <p>Hello! adminname    </p>
            <Link to="/logout">logout</Link>
        </div>
        <div className="right-container">
            <div className="rt-container" style={{paddingTop: '5vh'}}>
                <div className="back" onClick={()=>back()}>
                    <button className="back"><img src={backIcon} alt=""/></button>
                </div>
                <div className="title">
                    <h1 className="title" style={{padding: '20px'}}>Listing</h1>
                </div>
            </div> 
        
            <div className="lt-container" style={{borderRadius: '30px'}}>
                <div className="info">
                    <div className="text" style={{paddingLeft: '30px'}}>
                        {(records||[]).map((record)=>{
                            return (
                                <>                         
                                <p className="id" style={{color: 'gray', fontSize: 'smaller'}}>id: {record.id}</p>
                                <p className="username">Item name: {record.name}</p>
                                <p className="registerTime">Create at: {record.createAt}</p>
                                <p className="description">Description: {record.description}</p>
                                </>
                            )
                        })}

                    </div>
                    <div className="delete">
                        <button className="delete">delete</button>
                    </div>
                </div>

                <p className="tabletitle">Orders</p>
                <div className="table" style={{height: "35vh"}}>
                    <table className="table_box">
                        <thead>
                            <tr className="req_name">
                                <th className="data_name">Buyer</th>
                                <th className="data_name">Seller</th>
                                <th className="data_name">Quantity</th>
                                <th className="data_name">Price</th>
                                <th className="data_name">Create at</th>
                                <th className="data_name">Type</th>

                            </tr>
                        </thead>
                        <tbody>
                            {(orders||[]).map((item)=>{
                                return(
                                
                                    <tr onClick={()=>toDetail(item.id)}>
                                        <td>{item.buyer}</td>
                                        <td>{item.seller}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>{item.createAt}</td> 
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
