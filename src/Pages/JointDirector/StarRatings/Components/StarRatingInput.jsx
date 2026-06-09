import React, { useState } from 'react'
import { Star } from 'lucide-react'

const MAX_STARS = 5

const StarRatingInput = ({ value = 0, onChange }) => {
    const [hoverRating, setHoverRating] = useState(0)
    const displayRating = hoverRating || value

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: MAX_STARS }, (_, index) => {
                const starValue = index + 1
                const isFilled = starValue <= displayRating

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onChange(starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="cursor-pointer transition-transform hover:scale-110"
                        aria-label={`Rate ${starValue} out of ${MAX_STARS}`}
                    >
                        <Star
                            size={20}
                            className={isFilled ? 'fill-[#FFC107] text-[#FFC107]' : 'fill-none text-[#D9D9D9]'}
                        />
                    </button>
                )
            })}
        </div>
    )
}

export default StarRatingInput
