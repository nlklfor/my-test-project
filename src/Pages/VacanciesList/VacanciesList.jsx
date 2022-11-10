import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Vacancy from "../../components/Vacancy/Vacancy";


const Vacancies = (props) => {

    if (props.loading) {
        return <p className="">Loading...</p>
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

