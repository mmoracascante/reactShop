import React, { useState, useContext } from 'react'
import {Menu} from '@components/Menu'
import { MyOrder } from '@containers/MyOrder'
import AppContext from '../context/AppContext'
import Logo from '@logos/logo_yard_sale.svg'
import MenuIcon from '@icons/icon_menu.svg'
import ShoppingCart from '@icons/icon_shopping_cart.svg'
import '@styles/Header.scss'

export const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders)
  }

    return (
        <nav id='#navbar'>
        <img src={MenuIcon} alt="menu" className="menu" />
    
        <div className="navbar-left">
          <img src={Logo} alt="logo" className="nav-logo" />
    
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
    
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
              </li>
            <li className="navbar-shopping-cart" onClick={() => handleToggleOrders()}>
              <img src={ShoppingCart} alt="shopping cart" />
              { state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {
          toggle ? <Menu /> : null
        }
        {
          toggleOrders && <MyOrder  handleToggleOrders={handleToggleOrders}/>
        }
      </nav>
    )
}
