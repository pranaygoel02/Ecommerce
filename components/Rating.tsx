'use client'

import {BsStarFill,BsStarHalf} from 'react-icons/bs'

interface Props {
    rating: number;
}

function Rating({rating} : Props) {
  return (
    <div className="flex items-center gap-1 text-xs">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <BsStarFill className="text-green-600" />
      ))}
      {rating % 1 !== 0 && <BsStarHalf className="text-green-600" />}
      ({rating})
    </div>
  )
}

export default Rating