import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getIndex){
        setRating(getIndex)
        console.log("clicked " + getIndex)
    }
    function handleMouseOver(getIndex){
        setHover(getIndex)
        console.log("Hover at " + getIndex)
    }
    function handleMouseLeave(){
        setHover(rating)
        console.log("Leave at " + rating)
    }
  return (


    <div className='star-rating'>
         {[...Array(noOfStars)].map((_, index) => {
                index += 1
                return (
                  
                    <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseOverCapture={()=> handleMouseOver(index)}
                        onMouseLeave={()=> handleMouseLeave()}
                        style={{
                            color: index <= (hover || rating) ? "gold" : "gray",
                            cursor: 'pointer'
                        }}
                        size={40}
                    />
                 
                )
            })}
    </div>
    
      
  )
}

export default StarRating
