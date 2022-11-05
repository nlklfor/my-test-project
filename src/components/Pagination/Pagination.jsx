import React from "react";

const Pagination = (props) => {
    const pageCount = [];
    for (let i = 1; i <= Math.ceil(props.allVacancies / props.vacanciesOnPage); i++) {
        pageCount.push(i);
    }
    return (
        <div>
            <ul className="pagination flex justify-center pt-10 pb-10  rounded-lg border-r-2 border-l-2 border-slate-500">
                {
                    pageCount.map(count => (
                        <li className="pagintaion__page-item bg-white shadow-xl rounded-lg" key={count}>
                            <a href="#" className="pagination__page-link text-2xl text-slate-500 mr-4 ml-4 px-4 hover:text-sky-900 hover:border-b-2 hover:border-sky-900" onClick={() => props.paginate(count)}>
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