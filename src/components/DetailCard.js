import React from 'react'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function DetailCard({ label , count }) {
    return (
        <div className='w-full py-2 bg-gray-800 text-center rounded-md'>
            <span className='block mb-1 text-sm'>{ numberWithCommas(count) }</span>
    <span className='block text-xs text-gray-500 uppercase'>{ label }</span>
        </div>
    )
}
