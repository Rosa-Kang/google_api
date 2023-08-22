import React, { useState } from 'react'
import Modal from './Modal';

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
      <>
          {
              data.map((item) => {
                  console.log(item)
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                  let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                  let id = item.id
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div
                                    className="card"
                                    onClick={() => { setShow(true); setBookItem(item) }}
                                    key={id}
                            >
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                              <Modal show={show} bookItem={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
          }
               
    </>
  )
}

export default Card