import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './components/LanguageSelector';
import Button from './components/Button';
import TextArea from './components/TextArea';

function App() {

  const [from, setFrom] = useState(localStorage.getItem("from") || "tr");
  const [to, setTo] = useState(localStorage.getItem("to") || "en");

  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const clickChange = () => {
    let oldFrom = from;
    let oldText = text;

    setFrom(to);
    localStorage.setItem("from", to);
    setTo(oldFrom);
    localStorage.setItem("to", oldFrom);

    setText(translation);
    setTranslation(oldText);
  }

  const clickTranslate = () => {

    if (text !== "" && text !== " " && text !== null) {

      const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'to[0]': to,
          'api-version': '3.0',
          from: from,
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        },
        data: `[{"Text":"${text}"}]`
      };

      axios.request(options).then((res) => {
        setTranslation(res.data[0].translations[0].text);
      }).catch((error) => {
        setTranslation(`* ${error} *`);
      });
    }
  }

  return (
    <div className='container'>
      <div className='left'>
        <LanguageSelector selected={from} setLang={setFrom} isFrom={true} />
        <TextArea isFrom={true} text={text} setText={setText} />
      </div>
      <div className="mid">
        <Button clickChange={clickChange} isChangeBtn={true}>
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        </Button>
        <Button clickTranslate={clickTranslate} isChangeBtn={false}>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
      <div className='right'>
        <LanguageSelector selected={to} setLang={setTo} isFrom={false} />
        <TextArea isFrom={false} text={translation} setText={setTranslation} onSubmit={clickTranslate} />
      </div>
    </div>
  )
}

export default App;