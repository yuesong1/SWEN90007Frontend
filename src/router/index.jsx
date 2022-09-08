import Admin from '../Admin'
import Error from '../components/Error'
import AdminNavBar from '../components/admin/NavBar'
import AdminOrders from '../components/admin/Orders'
import AdminUsers from '../components/admin/Users'
import AdminDashboard from '../components/admin/Dashboard'
import AdminItems from '../components/admin/Items.jsx'
import AdminLogin from '../components/admin/Login.jsx'

import AdminOrdersDetail from '../components/admin/OrdersDetail'
import AdminItemsDetail from '../components/admin/ItemsDetail'
import AdminUsersDetail from '../components/admin/UsersDetail'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const BaseRouter = () => {
    return (
        <BrowserRouter> 
      
            
            <Routes>

                <Route exact path="/admin" element={<><AdminLogin /></>}/>
                <Route exact path="/admin/dashboard" element={<><AdminNavBar /><AdminDashboard /></>}/>
                <Route exact path="/admin/orders" element={<><AdminNavBar /><AdminOrders /></>}/>
                <Route exact path="/admin/users" element={<><AdminNavBar /><AdminUsers /></>}/>
                <Route exact path="/admin/items" element={<><AdminNavBar /><AdminItems /></>}/>
                
                <Route exact path="/admin/orders/:id" element={<><AdminNavBar /><AdminOrdersDetail /></>}/>
                <Route exact path="/admin/items/:id" element={<><AdminNavBar /><AdminItemsDetail /></>}/>
                <Route exact path="/admin/users/:id" element={<><AdminNavBar /><AdminUsersDetail /></>}/>


                <Route path="*" element={<Error />}></Route>
            </Routes>
          
        </BrowserRouter>
    )
}
export default BaseRouter;