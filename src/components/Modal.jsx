import React from 'react'

const Modal = ({ show, bookItem, onClose }) => {
  
  if (!show) {
    return null;
  }

  let thumbnail = bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
  let book = bookItem.volumeInfo;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{book.title}</h1>
              <h3>{book.authors}</h3>
              <h4>{book.publisher} <span>{book.publishedDate} </span></h4><br />
              <a className='more-button' href={book.previewLink} target='_blank'> <button>More</button></a>
            </div>
          </div>
              <h4 className="description">{book.description}</h4>
        </div>
      </div>
    </>
  )
}

export default Modal