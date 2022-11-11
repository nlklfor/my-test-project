import React from "react";

const Pagination = (props) => {
    
    const pageCount = Math.ceil(props.allVacancies / props.vacanciesOnPage); // Counting amount of pages
    const pages = new Array(pageCount).fill(null).map((item, i) => i + 1); // Filling array with the page numbers 
    return (
        <div>
            <ul className="pagination flex justify-center pt-10 pb-10">
           
                {
                    pages.map(count => (
                        <li className="item bg-white shadow-xl rounded-lg mr-10" key={count}>
                            <a href="#" className="link text-2xl text-slate-500 mr-4 ml-4 px-4 hover:text-sky-900 hover:border-b-2 hover:border-sky-900" onClick={() => props.paginate(count)}>
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