import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, auther, date, source} = props;

    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img src={imageUrl? imageUrl : "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/07/Rohit-Sharma-Jos-Buttler-1.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
              </span></h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {auther ? auther : "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
