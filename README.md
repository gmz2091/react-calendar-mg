# React Calendar MG

Hello, I'm Magdeil, and this is my first published library, I hope it can help you in your projects.

This library uses [momet](https://momentjs.com/) as a dependency, to facilitate the use of the calendar.

They can download the repository, modify and improve it, they can also fork it.

To start the project locally
``` 
yarn install
or
npm install

yarn start
or
npm start
```

For the build.
` yarn build `
or
`npm build`



## Getting started

### Compatibility

Your project needs to use React 16.11 or later.

#### Props Calendar

| Prop name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Default value                                         | Example values                                                                                                                                                                                                                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disabledDates       | Receives a string array that disables the days of the month passed as a parameter.                                                                                                                                                                                                                                                                                                                                                | `false`                                               | `['2022-08-01','2022-08-02',]`                                                                                                                                                                                                                                                                                               |
| onChangeDate                | Function called when the user clicks on the calendar day they want to select using the useState hook.                                                                                                                                                                                                                                                                                        | n/a                                                   | `const [selectedHour, setSelectedHour] = useState(null);`                                                                                                                                                                                                                                                   
| color                | Receives parameter in string format, rgb, hex, to change the color of the days in the calendar.                                                                                                                                                                                                                                                                                        | `black`                                                   | `red` `rgb(19 152 211)` `rgba(0 0 0 / 76%)` `#035251c2`                                                                                                                                                                                                                                                   
| borderColor                | Receives parameter in string format, rgb, hex, to change the color of the calendar border.                                                                                                                                                                                                                                                                                        | `rgb(19 152 211)`                                                   | `red` `rgb(19 152 211)` `rgba(0 0 0 / 76%)` `#035251c2`                                                                                                                                                                                                                                                   



#### Props Hour

| Prop name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Default value                                         | Example values                                                                                                                                                                                                                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| openingHour      | It receives as a parameter a string that indicates the initial hour.                                                                                                                                                                                                                                                                                                                                                | `true` - `08:00`                                              | `08:00`                                                                                                                                                                                                                                                                                               |
| closingHour      | It receives as a parameter a string that indicates the closing time.                                                                                                                                                                                                                                                                                                                                                | `true` - `14:00`                                              | `18:00`                                                                                                                                                                                                                                                                                               |
| color                | Receives parameter in string format, rgb, hex, to change the color of the hours.                                                                                                                                                                                                                                                                                        | `black`                                                   | `red` `rgb(19 152 211)` `rgba(0 0 0 / 76%)` `#035251c2`                                                                                                                                                                                                                                                   
| onChangeHour                | Function called when the user clicks on the calendar hour they want to select using the useState hook.                                                                                                                                                                                                                                                                                        | n/a                                                   | `const [selectedDay, setSelectedDay] = useState(null);`
| hoursDisabled                | It receives as a parameter a string array that disables the hours that will not be available.                                                                                                                                                                                                                                                                                        | `true`                                                   | `['10:00','10:30']`


### Usage
Here's an example of basic usage:

```js
import React, { useState } from 'react';
import { Calendar, Hours } from 'react-calendar-mg';

function MyCalendar() {
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

const disabledDates = [
    '2022-08-01',
    '2022-08-02',
    '2022-08-03',
  ];

  const hoursDisabled = [
    '09:00',
    '09:30',
    '10:00',
  ];

  return (
	<div style={{ width: '50%', color: 'black', margin: 'auto', marginTop: '50px', }} >
      <Calendar onChangeDate={setSelectedHour} disabledDays={disabledDates} color="rgba(0 0 0 / 76%)" />
      <Hours onChangeHour={setSelectedDay} openingHour="09:00" closingHour="18:00" disabledHours={hoursDisabled} />
    </div>
  );
}
```
![enter image description here](https://raw.githubusercontent.com/gmz2091/react-calendar-mg/main/public/Screen%20Shot%202022-08-22%20at%209.45.39.png)

![enter image description here](https://raw.githubusercontent.com/gmz2091/react-calendar-mg/main/public/Screen%20Shot%202022-08-22%20at%209.45.12.png)
