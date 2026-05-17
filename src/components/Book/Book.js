import React, { useState } from 'react';
import './Book.css';

export function Book(props) {
   const [theme, setTheme] = useState('light');
   return (
      <div className={`main ${theme}`}>
         <div id="radio">
            <span>Dark</span>
            <input
               type="radio"
               name="theme"
               checked={theme === 'dark'}
               onChange={() => setTheme('dark')}
            />
            <span>Light</span>
            <input
               type="radio"
               name="theme"
               checked={theme === 'light'}
               onChange={() => setTheme('light')}
            />
         </div>

         <p>{props.text}</p>
      </div>
   )
}