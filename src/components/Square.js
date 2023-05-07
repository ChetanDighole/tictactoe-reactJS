import React from 'react'

const Square = (props) => {

  return (
    <div className='w-24 h-24 border-2 border-gray-500 flex justify-center items-center'
    onClick={props.onClickEvent}
    >
        <h2 className={(props.val==='X')? 'text-5xl font-bold text-sky-500':'text-5xl font-bold text-red-500'}>{props.val}</h2>
    </div>
  )
}

export default Square
