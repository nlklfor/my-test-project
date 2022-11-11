import React, { useEffect, useState } from 'react';
import './App.css';
import VacanciesList from './Pages/VacanciesList/VacanciesList';
import { Route, Routes } from 'react-router-dom';
import './Normalize.css'
import VacancyPage from './Pages/VacancyPage/VacancyPage';
import { getApiData } from './API/api';



function App(props) {

    const [vacancies, setVacancies] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);  // Creating state for the component
    const [vacanciesOnPage] = useState([15]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const getVacancies = async () => {
        setLoading(true)
        const tmp = await getApiData();
        const res = tmp.data;
        setVacancies(res)
        setLoading(false)
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
