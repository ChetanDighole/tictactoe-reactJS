import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

    const [mainArr, setMainArr] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState(true)

    const handleClick = (index) => {
        if(mainArr[index] !==null){
            return
        }
        const copy = [...mainArr]
        copy[index] = (player)? 'X' : 'O'
        setMainArr(copy)
        setPlayer(!player)
    }


    const isWinner = () => {

        const winArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winArray.length; i++) {

            let ele = winArray[i];
            let [a, b, c] = ele

            if (mainArr[a] !== null && mainArr[a] === mainArr[b] && mainArr[a] === mainArr[c]) {
                return mainArr[a]
            }

        }
        return null

    }

    const win = isWinner()

    const resetFun = () => {
        setMainArr(Array(9).fill(null))
    }

    return (

        <div className='flex flex-col items-center justify-center gap-4'>

            <div className='flex flex-col items-center justify-center'>

                <div className='flex justify-center items-center'>
                    <Square onClickEvent={() => handleClick(0)} val={mainArr[0]} />
                    <Square onClickEvent={() => handleClick(1)} val={mainArr[1]} />
                    <Square onClickEvent={() => handleClick(2)} val={mainArr[2]} />
                </div>
                <div className='flex justify-center items-center'>
                    <Square onClickEvent={() => handleClick(3)} val={mainArr[3]} />
                    <Square onClickEvent={() => handleClick(4)} val={mainArr[4]} />
                    <Square onClickEvent={() => handleClick(5)} val={mainArr[5]} />
                </div>
                <div className='flex justify-center items-center'>
                    <Square onClickEvent={() => handleClick(6)} val={mainArr[6]} />
                    <Square onClickEvent={() => handleClick(7)} val={mainArr[7]} />
                    <Square onClickEvent={() => handleClick(8)} val={mainArr[8]} />
                </div>
            </div>

            <button className='bg-green-500 text-green-50 px-4 py-2 rounded-lg' onClick={()=>resetFun()}>Reset</button>

            {
                (win) ? <h1 className="text-center font-semibold text-4xl"><span className={(win==='X')? 'text-sky-500 font-bold':'text-red-500 font-bold'}>{win}</span> is is the winner</h1> : ''
            }
        </div>
    )
}

export default Board
