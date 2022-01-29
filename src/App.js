import React, { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Data from "./components/Data";
function App() {
  const [questions, setQuestions] = useState(Data);

  return (
    <>
      <div className="container">
        <h3>Questions and answers about React Js</h3>
        <section className="info">
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
