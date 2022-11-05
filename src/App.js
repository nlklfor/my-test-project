import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css';
import VacanciesList from './components/VacanciesList/VacanciesList';
import Pagination from './components/Pagination/Pagination';
import { Route, Routes, withRouter } from 'react-router-dom';
import Vacancy from './components/Vacancy/Vacancy';
import './components/Normalize.css'


function App() {

  // // let UrlDataContent = withRouter(Vacancy);
  // let vacancyId = this.match.params.vacancyId;
  const [vacancies, setVacancies] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [vacanciesOnPage] = useState([15]);
  const [loading, setLoading] = useState(false);
  const instance = axios.create({
    baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
    headers: { 'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu' }
  });

  useEffect(() => {
    const getVacancies = async () => {
      setLoading(true)
      const tmp = await instance.get('/data');
      const res = tmp.data;
      setVacancies(res)
      setLoading(false)
      console.log(res)
    }
    getVacancies()
  }, [])

  const lastVacancy = currentPage * vacanciesOnPage;
  const firstVacancy = lastVacancy - vacanciesOnPage;
  const currentVacancy = vacancies.slice(firstVacancy, lastVacancy);

  const paginate = (pageCount) => {
    setCurrentPage(pageCount)
  }
  console.log(vacancies);
  return (
    <div className="wrapper bg-slate-200">
      <Routes>
        <Route path='/vacancy/:vacancyId' element={<Vacancy vacancies={vacancies} loading={loading} />} />
        <Route path='/' element={<VacanciesList vacancies={currentVacancy} loading={loading} vacanciesOnPage={vacanciesOnPage} allVacancies={vacancies.length} paginate={paginate} />} />
      </Routes>
      {/* <VacanciesList vacancies={currentVacancy} loading={loading} vacanciesOnPage={vacanciesOnPage} allVacancies={vacancies.length} paginate={paginate} /> */}
      {/* <Pagination vacanciesOnPage={vacanciesOnPage} allVacancies={vacancies.length} paginate={paginate} /> */}


    </div>
  );
}

export default App;
