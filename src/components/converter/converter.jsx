import React, { useRef, useState } from "react";
import {Link} from 'react-router-dom'
import { LANGUAGES } from "../../const/const";

const Converter = ({ currentLanguage, currentRate }) => {
  const [currentCharCode, setNewCharCode] = useState(currentLanguage.CharCode);
  const [convertValue, setConvertValue] = useState(null);
  const amountRef = useRef();

  const onSubmitForm = () => {
    switch (currentCharCode) {
      case 'USD':
        const valueRUB = Math.abs(Number(amountRef.current.value)) * currentRate;
        const fixedValueRUB = parseInt(valueRUB * 100)/100;
        setConvertValue(fixedValueRUB);
      break;
      case 'RUB':
        const valueUSD = Math.abs(Number(amountRef.current.value)) / currentRate;
        const fixedValueUSD = parseInt(valueUSD * 100)/100;
        setConvertValue(fixedValueUSD);
      break;
    }
  };

  return (
    <React.Fragment>
      <main>
        <div className="header">
          <h1>Converter</h1>
          <Link to="/current-rate">current rate</Link>
        </div>
        <form 
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitForm();
          }}>
          <div>
            <label> Amount
              <input
                type="number"
                placeholder="insert value"
                ref={amountRef}/>
            </label>
            <label> From
              <select
              value={currentCharCode}
                onChange={(event) => {
                  setNewCharCode(event.target.value);
                  amountRef.current.value = '';
                  setConvertValue(null);
                }}>
                <option >{LANGUAGES.ru.CharCode}</option>
                <option >{LANGUAGES.en.CharCode}</option>
              </select>
            </label>
            <label> To
              <input type="text" value={currentCharCode === 'RUB' ? 'USD' : 'RUB'} disabled/>
            </label>
          </div>
          <button type="submit">Convert</button>
        </form>
        {convertValue ? <p className="result">{convertValue}</p> : ''}
      </main>
    </React.Fragment>
  );
};

export default Converter;
