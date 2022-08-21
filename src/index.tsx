import React from 'react';
export * from './components';
import { Main } from './App';

export const App: React.FC = () => {
    return (
      <Main name="Mundo" />
    )
}