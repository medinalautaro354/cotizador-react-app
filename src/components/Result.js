import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Result = props => {
  const result = props.result;
  const menssage = (!result) ? 'Elije Marca, año y tipo de seguro': 'el total es: $';
  return (
    <div className="big-total">
    {menssage}
      <TransitionGroup component="span" className="result">
        <CSSTransition
          className="result"
          key={result}
          timeout={{ enter: 500, exit: 500 }}
        >
          <span>{result}</span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Result;
