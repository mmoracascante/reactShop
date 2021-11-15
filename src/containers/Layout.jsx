import React, { Children } from 'react'

export const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            { children }
        </div>
    )
}
