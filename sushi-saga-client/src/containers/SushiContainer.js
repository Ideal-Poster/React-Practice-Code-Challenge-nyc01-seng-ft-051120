import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.sushi.map(sushi => <Sushi sushi={sushi}></Sushi>)

        }
        <MoreButton nextSushi={ props.nextSushi }/>
      </div>
    </Fragment>
  )
}

export default SushiContainer