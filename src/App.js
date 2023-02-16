
import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {


  // States
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('')

// ---------------------------------------
// logic of bmi
// ---------------------------------------

let calcBmi=(e)=>{

  e.preventDefault();

if(weight==0||height==0){
  alert('please enter a valid weight and hieght')
}

else{
  let bmi=(weight/(height*height)*703)
  setBmi(bmi.toFixed(1))
//
if(bmi<25){
  setMessage('you are underweight')
}
else if (bmi<=25 && bmi<30 ){
  setMessage('you are a Healthy Weight Person')
}
else{
  setMessage('you are over weight')
}
}
}


// reload logic

let reload=()=>{
  window.location.reload()
}

  return (
 //   <div className="App container">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input type={Text} placeholder="Enter Your Weight Value" value={weight}
              onChange={(e) => setWeight(e.target.value)}></input>
          </div>
          <div>
            <label>Hieght(In)</label>
            <input type={Text} placeholder="Enter Your Height Value" value={height} onChange={(event) => setHeight(event.target.value)}></input>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <br></br>
            <button className='btn btn-outline' onClick={reload} type="submit">Reload</button>
          </div>
          <div className='center'>
            <h3> Your BMI Is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
  //  </div>

  );
}

export default App;
