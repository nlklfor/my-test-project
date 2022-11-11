import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Vacancy from "../../components/Vacancy/Vacancy";
import gif from '../../assets/gif/Loading.gif'


const Vacancies = (props) => {

    if (props.loading) {
        return <img src={gif} className="flex m-auto h-screen"></img>
    } else {
        return (
            <div className="wrapper">
                <ul className="list">
                    {
                        props.vacancies.map((vacancy) => (
                            <Vacancy vacancy={vacancy}/>
                        ))
                    }
                    <Pagination vacanciesOnPage={props.vacanciesOnPage} allVacancies={props.allVacancies} paginate={props.paginate} />
                </ul>
            </div>

        )
    }

}

export default Vacancies;

