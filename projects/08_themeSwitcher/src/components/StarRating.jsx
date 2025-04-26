import React, { useState } from 'react';

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);         // Selected rating
    const [hover, setHover] = useState(null);        // Hover state

    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;

                return (
                    <button
                        key={starValue}
                        type="button"
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(null)}
                        className="focus:outline-none cursor-pointer"
                    >
                        <svg
                            className={`w-6 h-6 mr-1 transition-colors duration-150 ${
                                (hover || rating) >= starValue
                                    ? 'text-yellow-300'
                                    : 'text-gray-300'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>

                    </button>

                );
            })}
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                {rating} out of {totalStars}
            </span>
        </div>
    );
};

export default StarRating;
