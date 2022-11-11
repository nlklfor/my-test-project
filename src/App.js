import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import VacanciesList from './Pages/VacanciesList/VacanciesList';
import { Route, Routes } from 'react-router-dom';
import './components/Normalize.css'
import VacancyPage from './Pages/VacancyPage/VacancyPage';



function App(props) {

    const [vacancies, setVacancies] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);  // Creating state for the component
    const [vacanciesOnPage] = useState([15]);
    const [loading, setLoading] = useState(false);
     

    const instance = axios.create({
      baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
      headers: { 'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu' }  // Creating api config
    });
  
    useEffect(() => {
      const getVacancies = async () => {
        setLoading(true)
        const tmp = await instance.get('/data'); // Using hook useEffect to fill the state of the component
        const res = tmp.data;
        setVacancies(res)
        setLoading(false)
        console.log(res)
      }
      getVacancies()
    }, [])
  
    const lastVacancy = currentPage * vacanciesOnPage;
    const firstVacancy = lastVacancy - vacanciesOnPage;
    const currentVacancy = vacancies.slice(firstVacancy, lastVacancy); // Calculating amount of vacancies on page
  
    const paginate = (pageCount) => {
      setCurrentPage(pageCount) 
    }

  return (
    <div className="wrapper bg-slate-200">
      <Routes>
        <Route path='/vacancy/:vacancyId' element={<VacancyPage vacancies={vacancies} loading={loading} />} />
        <Route path='/' element={<VacanciesList vacancies={currentVacancy} loading={loading} vacanciesOnPage={vacanciesOnPage} allVacancies={vacancies.length} paginate={paginate} />} />
      </Routes>
    </div>
  );
}

export default App;
