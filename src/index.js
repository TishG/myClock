import React from 'react';
import ReactDOM from 'react-dom';

import { BackgroundColorStore } from "./contexts/BackgroundColorContext";
import { ClockStore } from './contexts/ClockContext';

import App from './components/App';

ReactDOM.render(
      <BackgroundColorStore>
        <ClockStore>
            <App />
        </ClockStore>
      </BackgroundColorStore>
, document.getElementById('root'));