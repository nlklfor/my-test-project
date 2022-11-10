import React from "react";
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import styles from '../../App.module.scss'
// import "./Header.css"

const VacancyPage = (props) => {

    const { vacancyId } = useParams();
    if (props.loading) {
        return <p className="">Loading...</p>
    } else {
        console.log(props.vacancies);
        const vacancy = props.vacancies.find(({id}) => id === vacancyId);
            return (                   
                                <div className="wrapper bg-slate-200"> 
                                    <div className={styles.vacancy__header}>
                                        <h2 className={styles.vacancy__title}>Job Details</h2>
                                        <div className={styles.vacancy__options}>
                                            <div className="save flex mr-8 pt-3">
                                                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.save__vacancy}>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.00016C1.5 2.5274 2.69391 1.3335 4.16667 1.3335H14.8333C16.3061 1.3335 17.5 2.5274 17.5 4.00016V19.9936C17.5 21.1595 16.109 21.7639 15.2567 20.9682L10.4099 16.4428C9.89761 15.9645 9.10239 15.9645 8.59007 16.4428L3.74327 20.9682C2.89104 21.7639 1.5 21.1595 1.5 19.9936V4.00016Z" stroke="#70778B" stroke-width="2"/>
                                                </svg>
                                                <p className={styles.btn__text}>
                                                    Save to my list
                                                </p>
                                            </div>
                                            <div className="share flex pt-3">
                                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.share__vacancy}>
                                                    <g clip-path="url(#clip0_4267_1463)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z" fill="#70778B"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_4267_1463">
                                                    <rect width="18" height="20" fill="white" transform="translate(0.5)"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                <p className={styles.btn__text}>
                                                    Share
                                                </p>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className={styles.vacancy__content}>
                                        <button className={styles.apply__btn_none}>
                                            APPLY NOW
                                        </button>
                                        <div className="top m-auto">
                                            <div className="desc flex justify-between">
                                                <p className={styles.vacancy__name}>
                                                    {vacancy.name}
                                                </p>
                                                <div className="salary">
                                                    <p className={styles.vacancy__salary}>
                                                        € {vacancy.salary}
                                                    </p>
                                                    <p className="amount text-sky-900">
                                                        Brutto, per year
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className={styles.vacancy__posted}> 
                                            Posted at {vacancy.createdAt}
                                        </p>
                                        <p className={styles.vacancy__title}>
                                            {vacancy.title}
                                        </p>
                                        <div className="respons">
                                            <p className={styles.response__title}>
                                                Responsibilities
                                            </p>
                                            <p className={styles.response__desc}>
                                                {vacancy.description}
                                            </p>    
                                        </div>
                                        <div className="compensation">
                                            <p className={styles.compensation__title}>
                                                Compensation & Benefits:
                                            </p>
                                            <p className={styles.compensation__subtitle}>
                                                Our physician enjoy a wide range of benefits, including:
                                            </p>
                                            <ul className={styles.compensation__list}>
                                                <li className="item">
                                                    Very competitve compensation package with bonuses
                                                </li>
                                                <li className="item">
                                                    Medical ,Dental, and Vision Insurance
                                                </li>   
                                                <li className="item">
                                                    Occurrence-based Malpractice Coverage
                                                </li>
                                                <li className="item">
                                                    Short-term and Long-term Disability Insurance and life insurance
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="b2 flex max-lg:justify-center">
                                            <button className={styles.apply__btn}>
                                                APPLY NOW
                                            </button>
                                        </div>
                                        <div className="info">
                                            <h2 className={styles.addinfo__title}>
                                                Additional info
                                            </h2>
                                            <div className="employee">
                                                <p className={styles.employee__title}>
                                                    Employee Type
                                                </p>
                                                <ul className="btns flex pb-6">
                                                    <button className={styles.employee__btn}>
                                                        {vacancy.employment_type[0]}
                                                    </button>
                                                </ul>  
                                            </div>
                                          </div>  
                                            <div className="benefits">
                                                <p className={styles.benefits__title}>
                                                    Benefits
                                                </p>
                                                <ul className="btns2 flex">
                                                    <button className={styles.benefits__btn}>
                                                        {vacancy.benefits[0]}
                                                    </button>
                                                    <button className={styles.benefits__btn}>
                                                        {vacancy.benefits[1]}
                                                    </button>
                                                </ul>  
                                            </div>
                                            <div className="attached pb-18">
                                                <h2 className={styles.images__title}>
                                                    Attached Images
                                                </h2>
                                                <ul className="images flex pt-6 max-sm:flex-col">
                                                    <img src={vacancy.pictures[0]} className={styles.image} alt=""></img>
                                                    <img src={vacancy.pictures[1]} className={styles.image} alt=""></img>
                                                    <img src={vacancy.pictures[2]} className={styles.image} alt=""></img>
                                                </ul>  
                                            </div>
                                        </div>
                                        <div className="card absolute right-32 top-20 max-w-sm m-0 max-2xl:relative max-2xl:bottom-0 max-2xl:left-1/4 max-sm:max-w-xs">
                                            <h2 className={styles.vacancy__title}>Contacts</h2>
                                            <div className={styles.vacancy__card}>
                                                <div className="info">
                                                    <p className={styles.info__name}>
                                                        Department name. {vacancy.name}.
                                                    </p>
                                                    <p className={styles.info__address}>
                                                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z" fill="#878D9D"/>
                                                    </svg>
                                                        {vacancy.address}
                                                    </p>
                                                    <p className={styles.info}>
                                                        {vacancy.phone} ,
                                                    </p>
                                                    <p className={styles.info}>
                                                        {vacancy.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="b3 flex pb-20 max-lg:justify-center max-lg:">
                                            <NavLink to={"/"}>
                                            <button className={styles.button__return}>
                                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z" fill="#384564"/>
                                            </svg>
                                            RETURN TO JOB BOARD
                                            </button>
                                            </NavLink>
                                        </div>
                                    </div>  
                )
        }
        
    }
    
    export default VacancyPage;
    
    // let vacancy = {};
    //  for (let i=0 ; i < props.vacancies.length ; i++){
    //     if (props.vacancies[i].id = vacancyId) {
        //         vacancy = props.vacancies[i]
        //         break;
        //     }
        //  }
        // <header className="header">
        //  <p className="header__title">Job Details</p>
        //     <li className="">
        //         <a href="#" className="">
        //             {vacancy.name}
        //         </a>
        //         <a href="#" className="">
        
        //         </a>
        //     </li>
        // </header>