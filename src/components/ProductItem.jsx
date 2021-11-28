import React, { useContext } from 'react'
import '@styles/ProductItem.scss'
import AddToCart from '@icons/bt_add_to_cart.svg'
import AddedToCart from '@icons/bt_added_to_cart.svg'
import AppContext from '../context/AppContext'

export const ProductItem = ({product}) => {

	const { state, addToCart } = useContext(AppContext)
	const isAdded = state.cart.find(item => item.id === product.id)

	const handleCart = (item) => {
		addToCart(item)
	}

    return (
        <div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleCart(product)}>
					{
						isAdded ?
						<img src={AddedToCart} alt="add" /> :
						<img src={AddToCart} alt="add" />
					}
				</figure>
			</div>
		</div>
    )
}
