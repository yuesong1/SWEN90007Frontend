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
        navigate(`/admin/users`)
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
        <div class="body">
            <div class="setting"> 
                <p>Hello! adminname    </p>
                <a href="/logout">logout</a>
            </div>
            <div class="right-container">
                <div class="rt-container" style={{paddingTop: '5vh'}}>
                    <div class="back" onClick={()=>back()}>
                        <button class="back"><img src={backIcon} alt=""/></button>
                    </div>
                    <div class="title">
                        <h1 class="title" style={{padding: '20px'}}>Buyer</h1>
                    </div>
                </div> 

                <div class="lt-container" style={{borderRadius: '30px'}}>
                    <div class="info">
                        <div class="text" style={{paddingLeft: '30px'}}>
                            <p class="id" style={{color: 'gray', fontSize: 'smaller'}}>id 997492</p>
                            <p class="username">Username: Ann</p>
                            <p class="registerTime">RegisterTime: 2020.1.4</p>
                        </div>
                        <div class="delete">
                            <button class="delete">delete</button>
                        </div>
                    </div>

                    <p class="tabletitle">Orders</p>
                    <div class="table" style={{height: '35vh'}}>
                        <table class="table_box">
                            <thead>
                                <tr class="req_name">
                                    <th class="data_name">Item</th>
                                    <th class="data_name">Seller</th>
                                    <th class="data_name">Quantity</th>
                                    <th class="data_name">Price</th>
                                    <th class="data_name">Type</th>
                                    <th class="data_name">Create at</th>
                                </tr>
                            </thead>
                            <tbody>
    
                                <tr>
                                    <td>Apple</td>
                                    <td>Glen</td>
                                    <td>78</td>
                                    <td>2.33 $</td>
                                    <td>Fixed-price</td>
                                    <td>2020.1.2</td>
                                </tr>

                            </tbody>
                    </table>
                    </div>
                </div>
            </div>

        </div>
  )
}
