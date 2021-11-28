import React from 'react'
import '@styles/MenuMobile.scss'

export const MenuMobile = () => {
    return (
        <div class="mobile-menu">
        <div>
            <ul>
                <li><a href="">CATERGORIES</a></li>
                <li><a href="">All</a></li>
                <li><a href="">Clothes</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Furnitures</a></li>
                <li><a href="">Toys</a></li>
                <li><a href="">Others</a></li>
            </ul>
        </div>
               
        <div>
            <ul>
                <li><a href="">My orders</a></li>
                <li><a href="">My account</a></li>
    
            </ul>
        </div>
        
        <div>
            <ul>
                <li><a href="" class="email">example@gmail.com</a></li>
                <li><a href="" class="sign-out">Sign out</a></li>
    
            </ul>
        </div>
        
    </div>
    )
}
