import React, { useContext } from 'react'
import deleteIcon from '@icons/icon_close.png'
import AppContext from '../context/AppContext'
import '@styles/OrderItem.scss'

export const OrderItem = ({product}) => {
    const { deleteItem } = useContext(AppContext)

    const handleDelete = (item) => {
        deleteItem(item)
    }


    return (
        <div className="shopping-cart">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img onClick={() => handleDelete(product)} src={deleteIcon} alt="delete" />
        </div>
    )
}
