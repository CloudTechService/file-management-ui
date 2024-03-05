import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
// import "../assets/css/index.css";
// import "../assets/css/common.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Floatingmenu from './Floatingmenu';

const Layout = ({children,...props}) => {
  return (
    <div {...props}>
      <div className="wrapper">
        <div className="m-3">
          <Header />
          {/* <Floatingmenu /> */}
                    <div className="page-container">
           {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
