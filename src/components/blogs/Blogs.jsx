import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Menu2 from '../common/Menu2'
import BlogWriter from './BlogWriter'

const Blogs = () => {
  return (
    <div>
      <Header />
      <Menu2 />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <BlogWriter />
        </div>
        <div className="col-1"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs
