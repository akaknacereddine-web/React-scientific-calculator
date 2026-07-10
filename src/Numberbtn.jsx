import { useState } from 'react';
import './App.css';
export default function Numbers() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const buttons = []; // fresh array each render
  for (let index = 0; index < 10; index++) {
    buttons.push(
      <button
        key={index}
        className="btn"
        onClick={() => setInput(input + index)}
      >
        {index}
      </button>
    );
  }

  return (
    <div className="Calcu">
      <div className="screen">
      <div className="history">  {history.map((item, i) => (
    <div key={i} className="history-item">{item}</div>
  ))}</div>
      <input type="text" disabled value={input} /></div>
      {buttons}
            <button className="multiply" onClick={() => setInput(input + '*')} >×</button>
            <button className="devide" onClick={() => setInput(input + '/')}>÷</button>
            <button className="add" onClick={() => setInput(input + '+')}>+</button>
            <button className="subtract" onClick={() => setInput(input + '-')}>-</button>
            <button className="clear" onClick={() => setInput("")}>C</button>
            <button className="root" onClick={() => setInput(Math.sqrt(input))}>√</button>
            <button className="percentage" onClick={() => setInput(input / 100)}>%</button>
            <button className="sin" onClick ={() => setInput(Math.sin(input))}>sin</button>
            <button className="cos" onClick={() => setInput(Math.cos(input))}>cos</button>
            <button className="tan" onClick={() => setInput(Math.tan(input))}>tan</button>
            <button className="log" onClick={() => setInput(Math.log(input))}>log</button>
            <button className="ln" onClick={() => setInput(Math.log10(input))}>ln</button>
            <button className="pi" onClick={() => setInput(Math.PI)}>π</button>
            <button className="e" onClick={() => setInput(Math.E)}>e</button>
            <button className="dot" onClick={() => setInput(input + '.')}>.</button>
            <button className="Bracket1" onClick={() => setInput(input + "(")}>(</button>
            <button className="Bracket2" onClick={() => setInput(input + ")")}>)</button>
            <button className="power" onClick={() => setInput(Math.pow(input))}>^</button>
            <button className="factorial" onClick={() => setInput(Math.factorial(input))}>!</button>
            <button className='hyp' onClick={() => setInput(Math.hypot(input))}>hyp</button>
            <button className='square' onClick={() => setInput(input * input)}>x^2</button>
            <button className='cube' onClick={() => setInput(input * input * input)}>x^3</button>
            <button className='reci' onClick={() => setInput(Math.reciprocal(input))}>1/x</button>
            
                  <button className="equal" onClick={() => {
        try {
          const result = eval(input).toString();
          setHistory([input + " = " + result, ...history]); // save equation in historyinput + " = " + result); // save equation
          setInput(result); // show result in input
        } catch {
          setInput("Error");
        }
      }}>=</button>
          <button className="allclear" onClick={() => { setInput(""); setHistory([]); }}>AC</button>
    </div>
  );
}