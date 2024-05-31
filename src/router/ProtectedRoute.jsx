import React from 'react'
import CustomRoute from './CustomRoute'

function ProtectedRoute({
    route,
}) {
    return (
        <CustomRoute path={route.path} exact Layout={route.layout} route={route} >
            {route.component}
        </CustomRoute >
    )
}

export default ProtectedRoute