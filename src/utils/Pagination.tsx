import React from "react";

interface Pagination{
    curPage: number;
    totalPage: number;
    offset: any
}

export const Pagination: React.FC<Pagination>=(props) =>{

    const pageArray = [];

    if(props.curPage <= 1){
        let newCurPage = 1

        pageArray.push(newCurPage);

        if(newCurPage+1 < props.totalPage){
            pageArray.push(newCurPage+1);
        }
        if(newCurPage+2 < props.totalPage){
            pageArray.push(newCurPage+2);
        }
        if(newCurPage+3 < props.totalPage){
            pageArray.push(newCurPage+3);
        }
        if(newCurPage+4 < props.totalPage){
            pageArray.push(newCurPage+4);
        }
        
    }
    else if(props.curPage >= props.totalPage){
        let newCurPage = props.totalPage;
        if(newCurPage-4 < props.totalPage){
            pageArray.push(newCurPage-4);
        }
        if(newCurPage-3 < props.totalPage){
            pageArray.push(newCurPage-3);
        }        
        
        if(newCurPage-2 < props.totalPage){
            pageArray.push(newCurPage-2);
        }
        if(newCurPage-1 < props.totalPage){
            pageArray.push(newCurPage-1);
        }
        pageArray.push(newCurPage);
    }
    else{
        // current Page -2
        if (props.curPage >= 3) {
            pageArray.push(props.curPage - 2);
        }
        // current Page -1
        if (props.curPage >= 2) {
            pageArray.push(props.curPage - 1);
        }

        pageArray.push(props.curPage);

        // current Page + 1
        if (props.totalPage >= props.curPage + 1) {
            pageArray.push(props.curPage + 1);
        }
        // current Page + 2
        if (props.totalPage >= props.curPage + 2) {
            pageArray.push(props.curPage + 2);
        }
    }

    return(
        <nav aria-label="Page navigation example" style= {{paddingTop: '20px'}}>
            <ul className ="pagination">
                <li className="page-item" onClick={()=>props.offset(1)}>
                    <button className="page-link" aria-label="First">
                        <span aria-hidden="true">First</span>
                    </button>
                </li>

                {
                    pageArray.map(page => (
                        <li className="page-item" key={page} onClick={()=>props.offset(page)}>
                            <button className={"page-link " + (props.curPage===page?"active":"")}>
                                {page}
                            </button>
                        </li>
                    ))
                }
                
                <li className="page-item" onClick={()=>props.offset(props.totalPage)}>
                    <button className="page-link" aria-label="First">
                        <span aria-hidden="true">Last</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}