import React from 'react'

import homeIcon from '../../assets/icons/home.svg'
import userIcon from '../../assets/icons/user.svg'
import goodsIcon from '../../assets/icons/goods.svg'
import ordersIcon from '../../assets/icons/orders.svg'
import styles from '../../css/admin.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/admin/dashboard">       
        <div className="icon"><button className="icon_button"><img src={homeIcon} alt=""/></button></div>
      </Link> 
      <Link to="/admin/users">
        <div className="icon"><button className="icon_button"><img src={userIcon} alt=""/></button></div>
      </Link>
      <Link to="/admin/items">
        <div className="icon"><button className="icon_button"><img src={goodsIcon} alt=""/></button></div>
      </Link>
      <Link to="/admin/orders">
        <div className="icon"><button className="icon_button"><img src={ordersIcon}alt=""/></button></div>
      </Link>
    </div>
  )
}
