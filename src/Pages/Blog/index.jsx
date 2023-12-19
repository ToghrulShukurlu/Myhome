import React from 'react'
import "./style.scss"
import { news } from "../../Data/data"

const Blog = () => {
  return (
    <>
      <div className="blog"></div>
      <h1>Read more blog & article</h1>
      <div className="cards">
        {news.map((item, index) => (
          <div className="card">
            <div className="card-img">
              <img src={item.img} alt="" />
            </div>
            <div className="card-txt">
              <h6>{item.info}</h6>
              <p>{item.txt}</p>
              <span>{item.txt2}</span>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog