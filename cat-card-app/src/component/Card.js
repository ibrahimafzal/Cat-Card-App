import React from 'react'

const Card = (props) => {
  return (
    <div className='cards' key={props.id}>
    <img src={props.url} alt="cat" className='card-img' />
    <div className='container'><p>{props.name}</p></div>
</div>
  )
}

export default Card;