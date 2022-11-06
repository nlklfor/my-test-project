import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import VacanciesList from './components/VacanciesList/VacanciesList';
import { Route, Routes, withRouter } from 'react-router-dom';
import Vacancy from './components/Vacancy/Vacancy';
import './components/Normalize.css'
import Api from "./API/api";


function App(props) {

  return (
    <div className="wrapper bg-slate-200">
      <Routes>
        <Route path='/vacancy/:vacancyId' element={<Vacancy vacancies={props.vacancies} loading={props.loading} />} />
        <Route path='/' element={<VacanciesList vacancies={props.currentVacancy} loading={props.loading} vacanciesOnPage={props.vacanciesOnPage} allVacancies={props.vacancies.length} paginate={props.paginate} />} />
      </Routes>
    </div>
  );
}

export default App;
