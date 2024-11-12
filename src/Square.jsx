import React from 'react'

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className='relative h-20 w-20 rounded-xl border shadow bg-gradient-to-t from-slate-100'
      onClick={onSquareClick}
    >
      <p className='absolute text-3xl text-slate-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{value}</p>
    </button>
  )
}

export default Square