import React from 'react'

const Modal = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src="" alt="" />
            <div className="info">
              <h1>ReactJS by Example - Building Modern Web Application</h1>
              <h3>Rosa Kang</h3>
              <h4>Lorem Ipsum <span>yyyy-mm-dd</span></h4><br />
              <a href="#"> <button>More</button></a>
            </div>
          </div>
                    <h4 className="description"></h4>
        </div>
      </div>
    </>
  )
}

export default Modal