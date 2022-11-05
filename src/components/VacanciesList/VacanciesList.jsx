import React from "react";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import styles from '../../App.module.scss'

const Vacancies = (props) => {

    if (props.loading) {
        return <p className="">Loading...</p>
    } else {
        return (
            <div className="vac__list-wrapper">
                <ul className="vac__list">
                    {
                        props.vacancies.map((vacancy) => (
                            <NavLink className="" to={"/vacancy/" + vacancy.id}>
                                <li className={styles.vac__item}>
                                    <img src={vacancy.pictures[0]} className={styles.vac__img} width="85" height="85" alt="" />
                                    <div className="vac__list-info">
                                        <p className={styles.list__title}>{vacancy.title}</p>
                                        <p className={styles.list__name}>Department name • {vacancy.name}</p>
                                        <div className="vac__list-location flex pt-4">
                                            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z" fill="#878D9D" />
                                            </svg>
                                            <p className="location px-2">{vacancy.location.lat} : {vacancy.location.long}</p>
                                        </div>
                                    </div>
                                    <div className="vac__list-ab">
                                        <div className="vac__list-rt-fv flex justify-end">
                                            <svg width="96" height="18" viewBox="0 0 96 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-10 mr-28">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z" fill="#38415D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6987 4.58966C26.4298 2.93116 27.8201 0.000488281 28.5163 0.000488281C29.5274 -0.000511719 31.7421 5.68649 31.7421 5.68649C31.7421 5.68649 33.7923 5.86549 35.4493 6.04849C36.3289 6.14549 37.8997 6.29349 37.998 6.77849C38.019 6.88349 37.8927 7.31249 37.663 7.61149C36.69 8.88149 34.1654 11.6025 34.1654 11.6025C34.1654 11.6025 34.3038 12.9025 34.4272 14.3245C34.5064 15.2445 34.7201 17.1085 34.6428 17.4415C34.5586 17.8085 34.4071 17.9085 34.2497 17.9665C33.8384 18.1165 32.8835 17.5335 31.7682 16.9995C30.2486 16.2705 28.5414 15.4915 28.5414 15.4915C28.5414 15.4915 27.415 16.0805 26.08 16.6555C24.6537 17.2695 23.2093 18.2815 22.6065 17.9255C22.2304 17.7025 22.5092 15.9645 22.6536 14.4175C22.789 12.9585 22.9064 11.6255 22.9064 11.6255C22.9064 11.6255 22.0699 10.6435 21.0959 9.59349C20.0437 8.45849 18.7609 7.23349 19.0387 6.78349C19.2483 6.44349 20.2052 6.26149 21.8121 6.06249C23.5192 5.85049 25.2244 5.70049 25.2244 5.70049C25.2244 5.70049 25.4102 5.24412 25.6987 4.58966Z" fill="#38415D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6987 4.58966C45.4298 2.93116 46.8201 0.000488281 47.5163 0.000488281C48.5274 -0.000511719 50.7421 5.68649 50.7421 5.68649C50.7421 5.68649 52.7923 5.86549 54.4493 6.04849C55.3289 6.14549 56.8997 6.29349 56.998 6.77849C57.019 6.88349 56.8927 7.31249 56.663 7.61149C55.69 8.88149 53.1654 11.6025 53.1654 11.6025C53.1654 11.6025 53.3038 12.9025 53.4272 14.3245C53.5064 15.2445 53.7201 17.1085 53.6428 17.4415C53.5586 17.8085 53.4071 17.9085 53.2497 17.9665C52.8384 18.1165 51.8835 17.5335 50.7682 16.9995C49.2486 16.2705 47.5414 15.4915 47.5414 15.4915C47.5414 15.4915 46.415 16.0805 45.08 16.6555C43.6537 17.2695 42.2093 18.2815 41.6065 17.9255C41.2304 17.7025 41.5092 15.9645 41.6536 14.4175C41.789 12.9585 41.9064 11.6255 41.9064 11.6255C41.9064 11.6255 41.0699 10.6435 40.0959 9.59349C39.0437 8.45849 37.7609 7.23349 38.0387 6.78349C38.2483 6.44349 39.2052 6.26149 40.8121 6.06249C42.5192 5.85049 44.2244 5.70049 44.2244 5.70049C44.2244 5.70049 44.4102 5.24412 44.6987 4.58966Z" fill="#38415D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.6987 4.58966C65.4298 2.93116 66.8201 0.000488281 67.5163 0.000488281C68.5274 -0.000511719 70.7421 5.68649 70.7421 5.68649C70.7421 5.68649 72.7923 5.86549 74.4493 6.04849C75.3289 6.14549 76.8997 6.29349 76.998 6.77849C77.019 6.88349 76.8927 7.31249 76.663 7.61149C75.69 8.88149 73.1654 11.6025 73.1654 11.6025C73.1654 11.6025 73.3038 12.9025 73.4272 14.3245C73.5064 15.2445 73.7201 17.1085 73.6428 17.4415C73.5586 17.8085 73.4071 17.9085 73.2497 17.9665C72.8384 18.1165 71.8835 17.5335 70.7682 16.9995C69.2486 16.2705 67.5414 15.4915 67.5414 15.4915C67.5414 15.4915 66.415 16.0805 65.08 16.6555C63.6537 17.2695 62.2093 18.2815 61.6065 17.9255C61.2304 17.7025 61.5092 15.9645 61.6536 14.4175C61.789 12.9585 61.9064 11.6255 61.9064 11.6255C61.9064 11.6255 61.0699 10.6435 60.0959 9.59349C59.0437 8.45849 57.7609 7.23349 58.0387 6.78349C58.2483 6.44349 59.2052 6.26149 60.8121 6.06249C62.5192 5.85049 64.2244 5.70049 64.2244 5.70049C64.2244 5.70049 64.4102 5.24412 64.6987 4.58966Z" fill="#38415D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M83.6987 4.58966C84.4298 2.93116 85.8201 0.000488281 86.5163 0.000488281C87.5274 -0.000511719 89.7421 5.68649 89.7421 5.68649C89.7421 5.68649 91.7923 5.86549 93.4493 6.04849C94.3289 6.14549 95.8997 6.29349 95.998 6.77849C96.019 6.88349 95.8927 7.31249 95.663 7.61149C94.69 8.88149 92.1654 11.6025 92.1654 11.6025C92.1654 11.6025 92.3038 12.9025 92.4272 14.3245C92.5064 15.2445 92.7201 17.1085 92.6428 17.4415C92.5586 17.8085 92.4071 17.9085 92.2497 17.9665C91.8384 18.1165 90.8835 17.5335 89.7682 16.9995C88.2486 16.2705 86.5414 15.4915 86.5414 15.4915C86.5414 15.4915 85.415 16.0805 84.08 16.6555C82.6537 17.2695 81.2093 18.2815 80.6065 17.9255C80.2304 17.7025 80.5092 15.9645 80.6536 14.4175C80.789 12.9585 80.9064 11.6255 80.9064 11.6255C80.9064 11.6255 80.0699 10.6435 79.0959 9.59349C78.0437 8.45849 76.7609 7.23349 77.0387 6.78349C77.2483 6.44349 78.2052 6.26149 79.8121 6.06249C81.5192 5.85049 83.2244 5.70049 83.2244 5.70049C83.2244 5.70049 83.4102 5.24412 83.6987 4.58966Z" fill="#38415D" />
                                            </svg>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.00016C8 6.5274 9.19391 5.3335 10.6667 5.3335H21.3333C22.8061 5.3335 24 6.5274 24 8.00016V23.9936C24 25.1595 22.609 25.7639 21.7567 24.9682L16.9099 20.4428C16.3976 19.9645 15.6024 19.9645 15.0901 20.4428L10.2433 24.9682C9.39104 25.7639 8 25.1595 8 23.9936V8.00016Z" stroke="#70778B" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <p className="mt-8 mr-4"> Posted at {vacancy.createdAt}</p>
                                    </div>
                                </li>
                            </NavLink>
                        ))
                    }
                    <Pagination vacanciesOnPage={props.vacanciesOnPage} allVacancies={props.allVacancies} paginate={props.paginate} />
                </ul>
            </div>

        )
    }

}

export default Vacancies;

