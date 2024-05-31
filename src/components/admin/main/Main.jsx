import React from 'react'

function Main(props) {
    return (
        <main style={{ paddingTop: 50 }}>
            {props?.children}
        </main>
    )
}

export default Main