//import logo from './logo.svg';
import './App.css';
import {AppointmentsDayView} from "./Appointment";

function App() {
    const today = new Date();
    const customer = {firstName: 'Ashley'}
    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: {firstName: 'Ashley'}
        },
        {
            startsAt: today.setHours(13, 0),
            customer: {firstName: 'Jordan'}
        }
    ];
  return (
    <div className="App">
  {/*    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <AppointmentsDayView customer={customer} appointments={appointments}/>
    </div>
  );
}

export default App;
