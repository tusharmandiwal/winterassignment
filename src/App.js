import './App.css';
import Navbar from './components/Navbar';
import React ,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import FormAction from './components/FormAction';


function App() {
  
  const [info,getInfo] = useState({
    name:"Tushar",
    email:"tusharmandiwal@gmail.com",
    age:"22",
    address:"purnia"
  })

  const handleSubmit = (data)=>{
    getInfo(data);
  }
  return (
    <div className="App">
      <Router>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home data = {info}/>}/>
          <Route path="/form" element={<FormAction onFormSubmit={handleSubmit} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
