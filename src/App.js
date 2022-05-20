import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightArrowLeft,faPlay} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import LanguageSelector from './components/LanguageSelector';
import Button from './components/Button';
import TextArea from './components/TextArea';

function App() {

  const [langSupport,setLangSupport]=useState();

  useEffect(()=>{

  },[])


  return (
      <div className='container'>
        <div className='left'>
        <LanguageSelector />
        <TextArea></TextArea>
        </div>
        <div className="mid">
          <Button><FontAwesomeIcon icon={faArrowRightArrowLeft} /></Button>
          <Button><FontAwesomeIcon icon={faPlay} /></Button>
        </div>
        <div className='right'>
        <LanguageSelector />
        <TextArea></TextArea>
        </div>   
      </div>    
  )
}

export default App