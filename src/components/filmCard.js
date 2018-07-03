import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.png';

const FilmCard = ({ image, title, url }) => (
  <Link to={url} className="card">
    <div>
      <img src={image} alt={title} />
      <div className="card-text">
        {title.split(' ').map((item, key) => {
          return <h1 key={key}>{item}<br/></h1>
        })}
      </div>
    </div>
  </Link>
)

export default FilmCard
