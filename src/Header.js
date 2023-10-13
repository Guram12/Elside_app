import React, { useState } from 'react';
import Select from 'react-select';
import './Header.css';
import { Link } from 'react-router-dom';



export function Header() {
    const [language, setLanguage] = useState('en');

    const content = {
        en: {
            home: 'HOME',
            company: 'Company',
            services: 'Services',
            projects: 'Projects',
            contact: 'Contact'
        },
        ru: {
            home: 'ГЛАВНАЯ',
            company: 'Компания',
            services: 'Услуги',
            projects: 'Проекты',
            contact: 'Контакт'
        },
        ka: {
            home: 'მთავარი',
            company: 'კომპანია',
            services: 'მომსახურებები',
            projects: 'პროექტები',
            contact: 'კონტაქტი'
        }
    };

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'ru', label: 'Русский' },
        { value: 'ka', label: 'ქართული' }
    ];

    const handleLanguageChange = selectedOption => {
        setLanguage(selectedOption.value);
    };

    return (
        <header className='header'>
            <img src='./company_logo.png' alt='elside company logo' className='logo' />
            <div className="container">
                <div className="btn"><Link to={'/'}>{content[language].home}</Link></div>
                <div className="btn"><a href="three">{content[language].company}</a></div>
                <div className="btn"><a href="three">{content[language].services}</a></div>
                <div className="btn"><Link to={'/projects'} >{content[language].projects}</Link></div>
                <div className="btn"><Link  to={'/contact'}  >{content[language].contact}</Link></div> 
                <Select 
                    options={languageOptions} 
                    defaultValue={languageOptions[0]}
                    onChange={handleLanguageChange} 
                    className="language-select"
                    classNamePrefix="mySelect"
                />
            </div>
        </header>
    );
}
