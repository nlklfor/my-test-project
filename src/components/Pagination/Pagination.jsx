import React from "react";

const Pagination = (props) => {
    const pageCount = [];

    for(let i = 1; i <= Math.ceil(props.allVacancies / props.vacanciesOnPage); i++) {
        pageCount.push(i);
    }
    // console.log(props.allVacancies , props.vacanciesOnPage)
    return(
        <div>
            <ul className="pagination">
                {
                    pageCount.map(count => (
                        <li className="pagintaion__page-item" key={count}>
                            <a href="!#" className="pagination__page-link" onClick={() => props.paginate(count)}>
                                {count}
                                
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Pagination;