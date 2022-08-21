// @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap');

import styled from 'styled-components';

// .hosteds {
//     font-family: 'Dosis', sans-serif;
//     width: 390px;
// }

export const Hosteds = styled.div`
    font-family: 'Dosis', sans-serif;
    width: 390px;
`;

export const CalendarButton = styled.button`
    background-color: #f2f2f2;
    background-color: #f2f2f2;
     border: none;
     color: rgb(248, 248, 248);
     background: transparent;
     width: 40px;
     height: 40px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
     cursor: pointer;
     border-radius: 5px;
     transition-duration: all 0.5s;
        &:hover {
            background-color: #f2f2f2;  
            color: #f2f2f2;
            border: 1px solid #f2f2f2;
        }
`;




// .calendar__button {
//     background-color: #f2f2f2;
//     border: none;
//     color: rgb(248, 248, 248);
//     background: transparent;
//     width: 40px;
//     height: 40px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
//     cursor: pointer;
//     border-radius: 5px;
//     transition-duration: all 0.5s;
// }

// .calendar__button p {
//     margin: 0;
//     padding: 0;
// }

// .calendar__button:hover {
//     background-color: #e6e6e6;
// }

// @keyframes fadeDown {
//     from {
//         opacity: 0;
//         transform: translateY(-10px);
//     }

//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }


// .calendar {
//     width: 100%;
//     border: 1px solid rgb(235, 133, 24);
//     border-radius: 5px;
//     padding: 4px 8px;
//     margin-bottom: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     animation: fadeDown 0.5s ease-in-out;
//     transition: all 0.5s ease-in-out;
// }

// .calendar__header {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     margin-top: 10px;
// }

// .calendar__body {
//     width: 100%;
// }

// .calendar__header__month {
//     font-size: 20px;
//     font-weight: 500;
//     margin: 0;
//     color: white
// }

// .calendar__header__month p {
//     margin: 0;
// }

// .calendar__header__year {
//     font-size: 20px;
//     font-weight: 500;
//     margin: 0;
//     color: white
// }

// .calendar__header__year p {
//     margin: 0;
// }

// .calendar__body__week {
//     width: 100%;
// }

// .calendar__body__week__day {
//     display: grid;
//     grid-template-columns: repeat(7, 1fr);
//     width: 100%;
//     justify-items: center;
//     cursor: pointer;
// }

// .calendar__body__days {
//     display: grid;
//     grid-template-columns: repeat(7, 1fr);
//     width: 100%;
//     margin: 2px;
//     cursor: pointer;
// }

// .calendar__body__days__day {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40px;
//     height: 40px;
//     border: none;
//     background-color: transparent;
//     border-radius: 100%;
//     margin: 2px;
//     cursor: pointer;
//     color: aliceblue;
// }

// .calendar__body__days__day:hover {
//     background-color: #a48925c2;
// }

// .calendar__body__days__day__number {
//     font-size: 16px;
//     background: none;
//     border: none;
// }

// .calendar__body__days__day--selected {
//     background-color: #b8e39cc2;
//     font-size: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40px;
//     height: 40px;
//     border-radius: 100%;
//     cursor: pointer;
// }

// .calendar__body__days__day--disabled {
//     background-color: #f2f2f2;
//     color: #a48925c2;
//     cursor: not-allowed;
// }

// .calendar__body__days__day--today {
//     background-color: #a48925c2;
//     color: white;
// }

// .calendar_main_dates {
//     border: 1px solid rgb(235, 133, 24);
//     border-radius: 5px;
//     padding: 4px 8px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
// }

// .calendar_main_dates p {
//     font-size: 16px;
//     font-weight: 500;
//     margin: 0;
// }

// .calendar_main_dates__calendar__icon {
//     width: 25px;
//     cursor: pointer;
// }

// .calendar_main_dates__calendar__icon svg {
//     width: 100%;
//     height: 100%;
// }

// .hours__header {
//     display: flex;
//     align-items: center;
//     margin-bottom: 10px;
//     padding: 4px 8px;
//     margin: 2px 7px;
// }

// .hours__body {
//     background-color: transparent;
//     display: grid;
//     padding: 4px 8px;
//     grid-template-columns: repeat(5, 1fr);
//     width: 100%;
//     margin: 2px;
// }

// .hours__body__hour--selected {
//     background-color: #c8e391c2;
//     width: 100%;
//     border: none;
//     font-size: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
// }

// .hour__body__hour__number {
//     padding: 5px;
//     font-size: 16px;
//     background-color: transparent;
//     border: none;
//     cursor: pointer;
//     color: aliceblue;
// }

// .hour__body__hour__number--text {
//     font-size: 16px;
//     background-color: transparent;
// }

// .hours__body__hour--disabled {
//     cursor: not-allowed;
// }

// .hours__body__hour--disabledT {
//     background-color: #d0cdcd96;
//     color: #161616c2;
//     border: none;
//     font-size: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 5px;
//     border-radius: 5px;
//     cursor: not-allowed;
// }

// .hour__hour__number--text {
//     font-size: 16px;
//     padding: 5px;
// }