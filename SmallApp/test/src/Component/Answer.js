
import React, { useState } from 'react';


const Answer = ({questions,currentQue,correctAnswer}) => {


    // const Answer = [
    //     questions[currentQue]?.incorrect_answers[0],
    //     questions[currentQue]?.incorrect_answers[1],
    //     questions[currentQue]?.incorrect_answers[2],
    //     questions[currentQue]?.correct_answer
    // ];

    // Answer.sort(() => Math.random() - 0.6);


    // console.log(questions[currentQue]?.correctAnswer)

    // console.log(Answer.splice(RandomAnsno,1));

    const handleAnswer = (e,id) =>{

      let correctAnswer = questions[currentQue]?.correctAnswer;

      if(e){
        console.log(true);
      }else{
        console.log(false)
      }
    }

  return (
    <div className='answer-list'>
           <ul>
            {
              questions[currentQue]?.choices && Object..map((e,id) =>(
                <li onClick={() => handleAnswer((e,id))} key={id} >{e}</li>
              ))
            }
           </ul>        
    </div>
  )
}

export default Answer;
