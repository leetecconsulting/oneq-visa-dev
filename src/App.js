import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import StepWizard from 'react-step-wizard';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import SelectComponent from './SelectComponent';
import Btn from './Btn';

function App(props) {
 
  const [applName, setApplName] = useState("");
  const [fullName, setFullName] = useState("test name");
  const [obj, setObj] = useState({name:'john', age:30});
  
  const updateObj = (newObj) => {
    setObj(newObj);
    console.log(newObj.name + newObj.age);
  }

  useEffect(() =>{
   //console.log(fullName) 
   //setFullName
  }, [fullName])

  //this is frist page
const First = props => {
  const update = (e) => {
    //props.udpate(e.targe.name, e.targe.value);
    //console.log(e);
  };

  const[selectedOption, setSelectedOption] = useState("");

  const fullName = <h1>{formatName("1", "")}</h1>;


  return (
    
      <div>
<header className="App-header">
        {/* <Heading title={props.title}/> */}
        {/* <h1>{formatName("Jake", "Lee")}</h1> */}
        {fullName}
        {/* <h3>Welcome! Have a look around!</h3> */}
        <label>이름: </label>
        <input type='text' className='form-control' name='firstname' placeholder='이름'
                onChange={update} /><br />
                <label>성: </label>
        <input type='text' className='form-control' name='lastname' placeholder='성'
                onChange={update} />

      {/* {console.log(props.fullName)} */}

         {/* <SelectComponent
          options={options}
          onChange={(item) => setSelectedOption(item)}
          selectedKey={selectedOption}
          placeholder={"type to search"}
          label={"drop down label 1:  "}
          obj={obj}
          updateObj={updateObj}
        /> 
        <Btn 
          fullName = {props.fullName}
          obj={obj}
          updateObj={updateObj}
        /> */}
            <Stats step={1} {...props} />
            {/* <p><button onClick={...props, previousStep}>Previous Step</button></p> */}
            </header>
      </div>
  );
};

const Second = props => {
  const update = (e) => {
    props.udpate(e.targe.name, e.targe.value);
  };

  return (
    <div> 
      <header className="App-header">
      <h1>3</h1>
        <fieldset>
          <legend>성별</legend>
          <div>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                
                />
              <span>남자</span>
            </label>
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                
                />
              <span>여자</span>
            </label>
          </div>
        </fieldset>
        <PDFDownloadLink 
            document={<Step2 name='testing lastname'/>} 
            fileName='Visa'>
          {({loading})=>(loading ? <button>Loading document...</button> : <button>Download</button>)}
        </PDFDownloadLink>
        <Stats step={3} {...props} />
        </header>
    </div>
      // <div>
      //   <h3>Welcome! Have a look around!</h3>
      //   <label>First Name</label>
      //   <input type='text' className='form-control' name='firstname' placeholder='First Name'
      //           onChange={update} />
      //       <Stats step={1} {...props} />
      // </div>
  );
};

  return (
    <StepWizard isHashEnabled={true} initialStep={1}>
      <First hashKey={'FirstStep'}  title={props.title} fullName = {fullName}/>
      <Third hashKey={'Second'} /> 
      <Second hashKey={'TheEnd'} />
    </StepWizard>
  );  
};
export default App;



function formatName(firstName, lastName){
  return (
    firstName + " " + lastName
  );
}

function Heading(props){
  let title = props.title; //"this is heading text";

  return(
    <h1>{title}</h1>
  );
}

const options =[
  { key: 1, value : "Test 1"},
  { key: 2, value : "Test 2"},
  { key: 3, value : "Test 3"},
  { key: 4, value : "Test 4"}
]



const Third = props =>{
  const update = (e) => {
    props.update(e.targe.name, e.targe.value)
  };

  return(
    <div className="App">
      <header className="App-header">
      <h1>2</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > </a>*/}
          주소
        
        <input type="text" id="sample4_postcode" placeholder="우편번호" readOnly="true" />
        {/* <input type="button" onClick="sample4_execDaumPostcode()" value="우편번호 찾기" /><br /> */}
        <button onClick={window['sample4_execDaumPostcode']}>Call</button>
        <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
        <input type="text" id="sample4_jibunAddress" placeholder="지번주소" />
        <span id="guide" />
        <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
        <input type="text" id="sample4_extraAddress" placeholder="참고항목" />
        <Stats step={2} {...props} />
      </header>

    </div>
  );
}

const Stats = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step,
}) => (
  <div>
      <hr />
      { step > 1 &&
          <button className='btn btn-default btn-block' onClick={previousStep}>Go Back</button>
      }
      { step < totalSteps ?
          <button className='btn btn-primary btn-block' onClick={nextStep}>Continue</button>
          :
          <button className='btn btn-success btn-block' onClick={nextStep}>Finish</button>
      }
      <hr />
      <div style={{ fontSize: '21px', fontWeight: '200' }}>
          <h4>Other Functions</h4>
          <div>Current Step: {currentStep}</div>
          <div>Total Steps: {totalSteps}</div>
          <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
          <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
          <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
      </div>
  </div>
);
