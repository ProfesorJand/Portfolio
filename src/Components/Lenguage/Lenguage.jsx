import React, { useState } from 'react';
import Style from './lenguage.module.css';

export default function Lenguage({ lenguage, setLenguage }) {
  function ToggleEvent() {
    if (lenguage === 'es') {
      return setLenguage('en');
    }
    setLenguage('es');
  }

  return (
    <>
      <div id={Style['changeLenguage']} onClick={() => ToggleEvent()}>
        🌐{lenguage.toUpperCase()}
      </div>
    </>
  );
}
