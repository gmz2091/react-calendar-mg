import React, {  SetStateAction, useEffect, useState } from 'react';
import moment from 'moment';

import { PropsCalendar } from '../../interface';
import './index.css'

const disabledDatesRef = [
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

  const hoursDisabledRef = [
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

  const hoursRef = [
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

export default function Calendar({disabledDates = disabledDatesRef, hoursDisabled = hoursDisabledRef, hours = hoursRef}: PropsCalendar) {
  const [value, onChange] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<SetStateAction<any>>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedHour, setSelectedHour] = useState<SetStateAction<any>>(null);

  const disableWeekends = (date: Date | any) => date.getDay() === 0 || date.getDay() === 6;


  const disabledDays = disabledDates.map((date: moment.MomentInput) => moment(date).format('DD/MM/YYYY'));
  const disabledHours = hoursDisabled.map((hour: moment.MomentInput) => moment(hour, 'HH:mm').format('HH:mm'));

  useEffect(() => {
    console.log(selectedHour);
  }, [selectedHour]);


  return (

    <div>
      <div className="calendar_main_dates">
        <p>
          {selectedDay !== null ? moment(selectedDay).format('DD/MM/YYYY') : moment().format('DD/MM/YYYY')}
        </p>
        <div className="calendar_main_dates__calendar__icon" onClick={() => setShowCalendar(!showCalendar)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {showCalendar && (
        <div className="calendar">
          <div className="calendar__header">
            <button type="button" className="calendar__button" onClick={() => onChange(moment(value).subtract(1, 'month').toDate())}>
              <p className="calendar__button--text">
              <svg xmlns="http://www.w3.org/2000/svg" className="calendar__button--text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              </p>
            </button>
            <div className="calendar__header__month">
              <p>{moment(value).format('MMMM')}</p>
            </div>
            <button type="button" className="calendar__button" onClick={() => onChange(moment(value).add(1, 'month').toDate())}>
              <p className="calendar__button--text">
              <svg xmlns="http://www.w3.org/2000/svg" className="calendar__button--text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              </p>
            </button>
            <div className="calendar__header__year">
              <p>{moment(value).format('YYYY')}</p>
            </div>
          </div>
          <div className="calendar__body">
            <div className="calendar__body__week">
              <div className="calendar__body__week__day">
                {moment.weekdaysShort().map((day) => (
                  <div key={day} className="calendar__body__week__day__name">
                    <p>{day}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="calendar__body__days">
              {moment(value).daysInMonth() > 0
                      && [...Array(moment(value).daysInMonth())].map((_, i) => (
                        <button
                          disabled={disabledDays.includes(moment(value).date(i + 1).format('DD/MM/YYYY'))}
                          type="button"
                          onClick={() => {
                            if (selectedDay !== moment(value).date(i + 1).format('DD/MM/YYYY')) {
                              setSelectedDay(moment(value).format('YYYY-MM-') + (i + 1));
                            }
                            if (selectedDay === moment(value).date(i + 1).format('DD/MM/YYYY')
                            || selectedDay === moment(value).format('YYYY-MM-') + (i + 1)) {
                              setSelectedDay(null);
                            }
                          }}
                          className={`calendar__body__days__day ${
                            moment(value).date(i + 1).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')
                              ? 'calendar__body__days__day--today'
                              : ''
                          } ${
                            disabledDays.includes(moment(value).date(i + 1).format('DD/MM/YYYY'))
                              ? 'calendar__body__days__day--disabled'
                              : ''
                          } `}
                          key={i}
                        >
                          <p
                            className={`${selectedDay === moment(value).format('YYYY-MM-') + (i + 1)
                              ? 'calendar__body__days__day--selected' : 'calendar__body__days__day__number'}`}
                          >
                            {i + 1}

                          </p>
                        </button>
                      ))}
            </div>
          </div>
        </div>
      )}
      <div className="hours">
        <div className="hours__header">
          <p>Horas</p>
        </div>
        <div className="hours__body">
          {hours.map((hour: string ) => (
            <button
              disabled={disabledHours.includes(moment(hour, 'HH:mm').format('HH:mm'))}
              type="button"
              className={`hour__body__hour__number
              ${selectedHour === moment(hour, 'HH:mm').format('HH:mm') ? 'hours__body__hour--selected' : ''} ${
                disabledHours.includes(moment(hour, 'HH:mm').format('HH:mm'))
                  ? 'hours__body__hour--disabled' : ''}`}
              key={hour}
              onClick={() => {
                if (selectedHour !== moment(hour, 'HH:mm').format('HH:mm')) {
                  setSelectedHour(moment(hour, 'HH:mm').format('HH:mm'));
                }
                if (selectedHour === moment(hour, 'HH:mm').format('HH:mm')) {
                  setSelectedHour(null);
                }
              }}
            >
              <p className={`hour__hour__number--text ${selectedHour === moment(hour, 'HH:mm').format('HH:mm') ? 'hours__body__hour--selected' : ''} ${
                disabledHours.includes(moment(hour, 'HH:mm').format('HH:mm'))
                  ? 'hours__body__hour--disabledT' : ''}`}
              >
                {hour}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>

  );
}


