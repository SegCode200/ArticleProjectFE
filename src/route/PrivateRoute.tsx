import React, { PropsWithChildren } from 'react'
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useSelector((state: any) => state.user)

    return (
        <div>
            {
                user ?
                    <>
                        {children}
                    </> :
                    <Navigate to="/siginin1" />
            }
        </div>
    )
}

export default PrivateRoute