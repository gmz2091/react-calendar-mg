import './App.css';
import Calendar from './components/Calendar';

function App() {
  const disabledDates = [
    '2022-08-01',
    '2022-08-02',
    '2022-08-03',
    '2022-08-14',
    '2022-08-25',
    '2022-09-26',
    '2022-09-07',
    '2022-09-18',
    '2022-10-09',
    '2022-10-20',
    '2022-11-11',
    '2022-11-22',
    '2022-12-13',
  ];

  const hoursDisabled = [
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
  ];

  const hours = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calendar Component with React
        </p>
      <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
        <Calendar disabledDates={disabledDates} hoursDisabled={hoursDisabled} hours={hours} />
      </div>
      </header>
    </div>
  );
}

export default App;
