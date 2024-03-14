import React, { useState } from 'react';
import Style from './lenguage.module.css';

export default function Lenguage({ lenguage, setLenguage }) {
  function ToggleEvent() {
    console.log('lenguage', lenguage, "lenguage === 'es'", lenguage === 'es');
    if (lenguage === 'es') {
      return setLenguage('en');
    }
    setLenguage('es');
  }

  return (
    <>
      <div id={Style['changeLenguage']} onClick={() => ToggleEvent()}>
        {lenguage.toUpperCase()}
      </div>
    </>
  );
}
