import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import './SignUp.css';
 
function Signup({updateSignUpText}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [weight, setWeight] = useState('');
    // const [targetWeight, setTargetWeight] = useState('');
    // const [goal, setGoal] = useState('');
    const [lifestyle, setLifestyle] = useState('');
    const [height, setHeight] = useState('');
    const [bmi,setBmi] = useState('');
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
  
    const handleSignUp = (e) => {
      e.preventDefault();
      const userData = {
        username: username,
        email: email,
        password: password,
        weight: weight,
        // targetWeight: targetWeight,
        // goal: goal,
        lifestyle: lifestyle,
        height: height,
        bmi : bmi,
        birthday: birthday,
        age: age,
        sex: sex,
      };
      console.log('User data:', userData); //Saving data
  
      //comment the below part 
      
      // const valueForSignUp = document.getElementById('SignUp');
      // const name1 = username;
      // // const name = '${name1}';
      // const linkElement = <Link to="/signup">{name1}</Link>;
      // ReactDOM.render(linkElement, valueForSignUp);
  
  
      // if (username) {
      //   console.log(username);
      //   console.log(document.querySelector('#This-Text').innerHTML);
      //   document.querySelector('#This-Text').innerHTML = username;
      //   document.querySelector('#This-Text').setAttribute('to','/profile-details');
      //   // document.querySelector('#This-Text') = 
      //   // updateSignUpText(username);
      // }
  
      //un comment the below part 
  
      // setUsername('');
      // setEmail('');
      // setPassword('');
      // setWeight('');
      // // setTargetWeight('');
      // // setGoal('');
      // setLifestyle('');
      // setHeight('');
      // setBmi('');
      // setBirthday('');
      // setAge('');
      // setSex('');
    };
  
    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(birthday);
      const ageDifference = today - birthDate;
      const calculatedAge = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25));
      setAge(calculatedAge);
    };
  
    const calculateBmi = () => {
      if (!height || !weight) return;
      const heightInMeters = parseFloat(height) / 100; // Convert height to meters
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2))); // Round BMI value to two decimal places
    };
    
  
    return (
      <div className="sign-up-container">
        <h2 className="sign-up-title">Sign Up</h2>
        <form onSubmit={handleSignUp} className="sign-up-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter username'
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
              required
            />
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value)
                calculateBmi();
              }}
              placeholder='Enter weight in kg'
              required
            />
          </div>
          <div>
            <label htmlFor="lifestyle">Lifestyle:</label>
            <select
              id="lifestyle"
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value)}
              required
            >
              <option value="">Select Lifestyle</option>
              <option value="sedentary">Sedentary</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value)
                calculateBmi();
              }}
              placeholder='Enter height in cm'
              required
            />
          </div>
          <div>
            <label htmlFor="bmi">Bmi:</label>
            <input
              type="number"
              id="bmi"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              readOnly
              placeholder='Calculated from height and weight'
              required
            />
          </div>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => {
                setBirthday(e.target.value);
                calculateAge();
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              readOnly
              placeholder='Calculated from birthday'
              required
            />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }

  export default Signup;