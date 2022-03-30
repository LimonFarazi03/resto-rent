import React from 'react';
import './Question.css'

const Question = () => {
  return (
    <div className='qus-container'>
      <div className='fst-ques'>
            <h1>How React Works?</h1>
            <p>One of the qualities of React is its Simplicity. It is core JavaScript It also uses a special syntax called JSX Allows us to write 100% HTML inside JavaScript. React is not just a web application, The funny thing is that it also makes all the nice mobile applications Goes.UseState: First we have the functional component which does not support state. In other words a functional component is a stateless component Noe with Hooks we have the functional component but stateful it is achieved by using useState</p>
      </div>
      <div className='fst-ques'>
            <h1>Whats is the difference between props and state ?</h1>
            <p>The Main difference is props are read only and state can be changes asynchronous and props can not be modified but state can be modified using this.setState , And also you can store data using State but you can't store data using props , props used just for send data , and state used for store data props is sending method and state as like a bucket where you can store all kind of data.</p>
      </div>
    </div>
  );
};

export default Question;