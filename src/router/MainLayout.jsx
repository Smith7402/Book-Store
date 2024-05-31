import React from 'react'
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer/Footer";


function MainLayout(props) {
    return (
        <>
            <Header />
            {props?.children}
            <Footer />
        </>
    )
}

export default MainLayout