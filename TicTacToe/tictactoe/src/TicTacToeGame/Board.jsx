import React, { useState} from "react";
import Square from "./Square";

const Board = () => {

    let [board,setBoard] = useState(Array(9).fill(null));
    let [isXTurn,setIsXTurn] = useState(true);

    function checkWinner(){
        let winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let logic of winnerLogic){
            let [a,b,c] = logic;
            if(board[a] !== null && board[a] === board[b] && board[b] === board[c]){
                return true;
            }
        }
        return false;
    }

    const isWinner = checkWinner();


    function handleClick(index){
        // console.log("clicked", index);
        const copyState = [...board]; // COPYING THE WHOLE STATE;
        copyState[index] = isXTurn ? "X" : "0"; 
        setBoard(copyState); 
        setIsXTurn(!isXTurn); 
    }

    return (
        <div className="board-Container">
            {isWinner ? (
                <>Someone won</>
            ):(
                <>
                <div className="board-row">
                <Square onClick={() =>handleClick(0)} value = {board[0]}/>
                <Square onClick={() =>handleClick(1)} value = {board[1]}/>
                <Square onClick={() =>handleClick(2)} value = {board[2]}/>
                 </div>
                 <div className="board-row">
                <Square onClick={() =>handleClick(3)} value = {board[3]}/>
                <Square onClick={() =>handleClick(4)} value = {board[4]}/>
                <Square onClick={() =>handleClick(5)} value = {board[5]}/>
                </div>
                <div className="board-row">
                <Square onClick={() =>handleClick(6)} value = {board[6]}/>
                <Square onClick={() =>handleClick(7)} value = {board[7]}/>
                <Square onClick={() =>handleClick(8)} value = {board[8]}/>
                </div>
                </>
            )}
        </div>
    );
}

export default Board;