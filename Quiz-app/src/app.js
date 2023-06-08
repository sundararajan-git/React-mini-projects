import React, { useState } from "react";
import "./app.css";

export default function App() {
  const quiz = [
    {
      question: "What is the capital of America?",
      answer: [
        { answerText: "Texas", isCorrect: false, id: 1 },
        { answerText: "California", isCorrect: false, id: 2 },
        { answerText: "Washington, D.C.", isCorrect: true, id: 3 },
        { answerText: "Florida", isCorrect: false, id: 4 },
      ],
    },
    {
      question: "What is the capital of Canada?",
      answer: [
        { answerText: "Nunavut", isCorrect: false, id: 5 },
        { answerText: "Manitoba", isCorrect: false, id: 6 },
        { answerText: "Alberta.", isCorrect: false, id: 7 },
        { answerText: "Ottawa", isCorrect: true, id: 8 },
      ],
    },
    {
      question: "What is the capital of China?",
      answer: [
        { answerText: "Beijing", isCorrect: true, id: 9 },
        { answerText: "Tianjin", isCorrect: false, id: 10 },
        { answerText: "Chongqing", isCorrect: false, id: 11 },
        { answerText: "Shanghai", isCorrect: false, id: 12 },
      ],
    },
    {
      question: "What is the capital of Russia?",
      answer: [
        { answerText: "Altai.", isCorrect: false, id: 13 },
        { answerText: "Moscow", isCorrect: true, id: 14 },
        { answerText: "Amur", isCorrect: false, id: 15 },
        { answerText: "Bryansk", isCorrect: false, id: 16 },
      ],
    },
  ];
  const [page, setpage] = useState(0);
  const [btncolor, setbtncolor] = useState(0);
  const [i, setindex] = useState();
  const [score, setscore] = useState(0);
  const [display, setdisplay] = useState();
  const [click, setclick] = useState(false);
  const handlepagePrev = () => {
    if (page === 0) {
      return null;
    } else {
      setpage(page - 1);
    }
    setbtncolor("");
  };
  const handlepageNext = (e) => {
    if (page === quiz.length - 1) {
      return null;
    } else {
      setpage(page + 1);
    }
    setbtncolor("");
  };
  const submitanswer = (event, isCorrect, index, id) => {
    if (isCorrect) {
      setbtncolor("green");
      setscore(score + 1);
    } else {
      setbtncolor("red");
    }
    setindex(event.target.value);
    output(id);
  };
  const output = (id) => {
    if (id <= 4) {
      setclick(4);
    } else if (id <= 8) {
      setclick(8);
    } else if (id <= 12) {
      setclick(12);
    } else {
      setclick(16);
    }
  };
  const showScore = () => {
    setdisplay("score");
  };
  return (
    <div className="quiz">
      <div className={display ? "score" : "container"}>
        <h4>Question {page + 1}/4</h4>
        <p>{quiz[page].question}</p>
        <div className="btns">
          {quiz[page].answer.map((item, index) => {
            return (
              <button
                className={index == i ? btncolor : null}
                key={index}
                onClick={(event) =>
                  submitanswer(event, item.isCorrect, index, item.id)
                }
                value={index}
                disabled={item.id <= click ? true : false}
              >
                {item.answerText}
              </button>
            );
          })}
        </div>
        <div className="page">
          <button
            onClick={(e) => handlepagePrev(e)}
            disabled={page === 0 ? true : false}
          >
            {"Prev"}
          </button>
          <button
            onClick={(e) => handlepageNext(e)}
            disabled={page === quiz.length - 1 ? true : false}
          >
            {"Next"}
          </button>
          {page === quiz.length - 1 && (
            <button onClick={showScore} id="sub">
              Submit
            </button>
          )}
        </div>
      </div>
      <div className={display ? "container" : "score"}>
        <p className="p">
          Your Score {score}/{quiz.length}
        </p>
      </div>
    </div>
  );
}
