//import logo from './logo.svg';
import './App.css';
import EmployeePayrollForm from './component/EmployeePayrollForm';
import EmployeePayrollHomePage from './component/EmployeePayrollHomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/payroll-form' element={<EmployeePayrollForm />}></Route>
          <Route path='/' element={<EmployeePayrollHomePage />}></Route>
          <Route path='/home' element={<EmployeePayrollHomePage />}></Route>
          <Route exact path="/payroll-form/:id" element={<EmployeePayrollForm />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
