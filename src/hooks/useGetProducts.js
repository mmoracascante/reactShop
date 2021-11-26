import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
            const response = await axios(API)
            setProducts(response.data)
        } catch(e) {
            throw new Error('Error', e)
        }
       
    }

    useEffect(() => {
        getData()
    }, [])

    return products

}

export default useGetProducts