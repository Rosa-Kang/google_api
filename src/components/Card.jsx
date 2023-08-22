import React from 'react'

const Card = ({ data }) => {

  return (
      <>
          {
              data.map((item, index) => {
                  
                  let title = item.volumeInfo.title;
                  let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                  let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                  
                  
                  if (thumbnail != undefined && amount != undefined) {
                        return (
                    <div className="card" key={index}>
                        <img src={thumbnail} alt={title} />
                        <div className="bottom">
                            <h3 className="title">{title}</h3>
                              <p className='amount'>&#8377;{amount}</p>
                        </div>
                    </div>
                  )
                    }
                  
                  
              })
          }
               
    </>
  )
}

export default Card