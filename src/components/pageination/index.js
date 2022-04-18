import React from "react";
import "./index.css";

function Pageination({pageCount, currentPage, onPageChange}){
    const getPageNumber = () => {
        const pages = [1];
        if (currentPage > 4) {
            pages.push('left');
        }

        for(let i=currentPage -2;i <= currentPage +2 ;i++){
            if (i > 1 && i < pageCount) {
                pages.push(i)
            }
        }

        if(currentPage < pageCount -4 ){
            pages.push("right")
        }

        pages.push(pageCount)

        return pages;

    }


    const pageNumber = getPageNumber();

    function handlePageButonClick(page){
        if(page === "right"){
            onPageChange(currentPage + 2)
        }else if(page === "left"){
            onPageChange(currentPage - 2)
        }else{
            onPageChange(page)
        }
        
    }
    return (
        <div>
           <div className="pagination-container">
               <button  
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    prev
               </button>
                    {pageNumber.map((page) => {
                        return (
                            <button
                                key={page}
                                className={currentPage === page ? "active" : ""}
                                onClick={() => handlePageButonClick(page)}
                            >
                                {page === "left" || page === "right" ? "..." : page }
                            </button>
                        )
                    })}
               <button 
                    disabled={currentPage === pageCount.length}
                    onClick={() => onPageChange(currentPage + 1)}
               >
                   next
               </button>
           </div>
        </div>
      
    )
}


export default Pageination;