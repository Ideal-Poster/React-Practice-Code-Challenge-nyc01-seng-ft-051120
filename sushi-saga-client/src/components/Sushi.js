import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { sushi, name, price } = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ null}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={ sushi.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { sushi.name } - ${sushi.price }
      </h4>
    </div>
  )
}

export default Sushi