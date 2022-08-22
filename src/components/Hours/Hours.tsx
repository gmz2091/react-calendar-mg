import React, {  SetStateAction, useEffect, useState } from 'react';
import moment from 'moment';

import '../Calendar/index.css'
import { PropsHours } from '../../interface';


  const hoursDisabledRef = [
    '10:00',
    '10:30',
    '11:03',
    '12:40',
    '13:00',
  ]


export default function Hours({ hoursDisabled = hoursDisabledRef,
   openingHour = '08:00', closingHour = '14:30', intervalHours =  10, onChangeHour, color = "black"}: PropsHours) {
  const [selectedHour, setSelectedHour] = useState<SetStateAction<any>>(null);


  const disabledHours = hoursDisabled.map((hour: moment.MomentInput) => moment(hour, 'HH:mm').format('HH:mm'));

  const hoursArray = (openingHour: string, closingHour: string, intervalHours: number) => {
    const hours = [];
    const start = moment(openingHour, 'HH:mm');
    const end = moment(closingHour, 'HH:mm');
    while (start.isBefore(end)) {
      hours.push(start.format('HH:mm'));
      start.add(intervalHours, 'minutes');
    }
    return hours;
  };

  useEffect(() => {
    if (onChangeHour) {
      onChangeHour(selectedHour);
    }
  }, [selectedHour]);



  return (
      <div className="hours">
        <div className="hours__header">
          <p>Horas</p>
        </div>
        <div className="hours__body">
          {hoursArray(openingHour, closingHour, intervalHours).map((hour: string ) => (
            <button
              disabled={disabledHours.includes(moment(hour, 'HH:mm').format('HH:mm'))}
              type="button"
              style={{ color: color }}
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
  );
}


