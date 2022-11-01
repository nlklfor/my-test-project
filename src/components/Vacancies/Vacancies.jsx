import React from "react";


const Vacancies = (props) => {
    if(props.loading) {
        return <p className="">Loading...</p>
    } else {
        return(
                <ul className="vac__list">
                    {
                        props.vacancies.map((vacancy , i) => (
                            <li className="vac__list-item mt-5">
                                <img src={vacancy.pictures}></img>
                                <p className="">{vacancy.title}</p>
                                <p className="">{vacancy.name}</p>
                                <svg>
    
                                </svg>
                                <p className="">{vacancy.location.lat}</p>
                                <p className="">{vacancy.location.long}</p>
                                <svg>
    
                                </svg>
                                <p className=""> Posted at {vacancy.createdAt}</p>
                            </li>
                        ))
                    }
                </ul>
        )
    }
    
}

export default Vacancies;

