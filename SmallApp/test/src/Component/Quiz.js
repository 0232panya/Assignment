import React, { useEffect, useState } from 'react'
import Answer from './Answer';

function Quiz(){

  const [questions,setQuestions] = useState([]);
  const [currentQue, setCurrentQue] = useState(0);
  const [correctAnswer, setCorrectAnser] = useState("");
  const [score, setScore] = useState(0);

  const [colorRed,setColorRed] = useState("red");


    // const Answer = [
    //   [questions[currentQue]?.incorrect_answers[0], isCorrect=false],
    //   [questions[currentQue]?.incorrect_answers[1], isCorrect=false],
    //   [questions[currentQue]?.incorrect_answers[2], isCorrect=false],
    //   [questions[currentQue]?.correct_answer, isCorrect=true]
    //   ]

    
//  Answer.sort(() => Math.random() - 0.6);


    let url = "https://opentdb.com/api.php?amount=10&category=17"
    let url2 = "https://the-trivia-api.com/v2/questions"
    let url3 = "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"

  useEffect(()=>{
    fetch(url3)
      .then(res => res.json())
      .then((response) =>{
        setQuestions(response);
        console.log(response);
      })
  },[]);

  // const handleAnswer = (e,id) =>{

  //   //console.log(questions[currentQue]?.correctAnswer);
  //   // let isCorrect = questions[currentQue]?.correct_answer;

  //   if(e){
  //     console.log(e);
     
  //   }
    
    
  // }

  const nextHandleQues = () =>{

    if(currentQue < 9){
      setCurrentQue(currentQue =>(currentQue + 1))
    }
  }

  function prevHandleQues(){

    if(currentQue > 0){
      setCurrentQue(currentQue - 1);
    }
  }

  return (
    <div className='border-box'>
      <div className='quiz-box'>
        <div className='question-line'>
            <div className='questions'>
               {questions[currentQue]?.question}
            </div>
            <div className='question-no'>
              <div className='que-no'>{currentQue + 1} / {questions.length}</div>
            </div>
        </div>  

        <div className='answer-list'>
          <Answer questions={questions} currentQue={currentQue} correctAnswer={correctAnswer} />
          {/* <ul>
              {
                 Answer.map((element,index) =>(
                  <li onClick={(e) => handleAnswer(e.target.value)} key={index}>{element}</li>
                ))
              }
          </ul> */}
        </div>
        <div className='button'>
                <button onClick={prevHandleQues}>Previous</button>
                <button onClick={() => nextHandleQues()}>Next</button>
        </div>

      </div>
    </div>
  )
}


export default Quiz



