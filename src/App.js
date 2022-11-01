import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css';
import Vacancies from './components/Vacancies/Vacancies';
import Pagination from './components/Pagination/Pagination';



function App() {

  
    

    const [vacancies, setVacancies] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);
    const [vacanciesOnPage] = useState([15]);
    const [loading , setLoading] = useState(false);
    const instance = axios.create({
      baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
      headers: {'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'}
    });
    useEffect(() => {
        const getVacancies = async() => {
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
    console.log(vacancies.length)
  return (
    <div className="wrapper">
      <Vacancies vacancies={currentVacancy} loading={loading} />
      <Pagination vacanciesOnPage = {vacanciesOnPage} allVacancies = {vacancies.length} paginate = {paginate}/>
    </div>
  );
}

export default App;
