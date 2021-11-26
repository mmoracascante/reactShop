import React from 'react'
import { ProductList } from '../containers/ProductList'
import { Header } from '../components/Header'

export const Home = () => {
    return (
        <>
            <Header />
            <ProductList />
        </>
    )
}
