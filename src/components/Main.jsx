import { useState } from 'react';
import Card from './Card';
import axios from 'axios';
import './style.css'

const Main = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const searchBook = (e) => {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDO8kDr88oSR_M__bK-W-JEqkod0q2DULw&maxResult=40`)
                .then(res => setData(res.data.items))
            .catch(err=> console.log(err))
    }

  return (
      <div>
          <div className="header">
              <div className="row1">
              <h1>A room without books is like <br /> a body without a soul.</h1>
              </div>
              
              <div className="row2">
                  <h2>Find your book</h2>
                  <div className="search">
                      <input 
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          placeholder='Enter your book name' 
                          onKeyDown = {searchBook}
                      />
                      <button
                          className='search-icon'
                          onClick={searchBook}>
                          <i className="fas fa-search"></i>
                      </button>
                  </div>

                  <img src="./images/bg2.png" alt="background" />
              </div>
          </div>

          <div className="container">
              {
                  <Card data={data}/>
              }
          </div>
    </div>
  )
}

export default Main;