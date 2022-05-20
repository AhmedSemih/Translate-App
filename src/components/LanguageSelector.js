import React from 'react';
import countries from './countries';

function LanguageSelector({ selected, setLang, isFrom }) {

    const onChangeLang = (e) => {
        isFrom ? localStorage.setItem("from", e.target.value) : localStorage.setItem("to", e.target.value);
        setLang(e.target.value);
    }

    return (
        <select className="langSelector" onChange={onChangeLang} value={selected}>
            {
                countries.map((item, index) => {
                    return <option key={index} value={item.code}>{item.name}</option>
                })
            }
        </select>
    )
}

export default LanguageSelector;