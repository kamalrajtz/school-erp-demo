import React from 'react'
import { Star } from 'lucide-react'

const MAX_STARS = 5

const StarRatingDisplay = ({ rating, size = 16, showCount = false }) => {
    const clampedRating = Math.min(Math.max(rating, 0), MAX_STARS)

    return (
        <div className='flex items-center gap-0.5'>
            {Array.from({ length: MAX_STARS }, (_, index) => {
                const isFilled = index < clampedRating
                return (
                    <Star
                        key={index}
                        size={size}
                        className={isFilled ? 'fill-[#FFC107] text-[#FFC107]' : 'fill-none text-[#D9D9D9]'}
                    />
                )
            })}
            {showCount && (
                <span className='text-sm text-[#667085] ml-1'>
                    ({clampedRating}/{MAX_STARS})
                </span>
            )}
        </div>
    )
}

export default StarRatingDisplay
