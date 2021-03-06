import React, { useContext } from 'react'
import {OrderItem} from '@components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '@icons/flechita.svg';
import '@styles/MyOrders.scss'

export const MyOrder = ({ handleToggleOrders }) => {
	const {state} = useContext(AppContext)
	
	const sumTotal = () => {
		const reducer = (acum, currentValue) => acum + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}

    return (
        <aside className="MyOrder">
			<div className="title-container">
				<img onClick={() => handleToggleOrders()} src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}				
			</div>
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
		</aside>
    )
}
