import React,{useState} from 'react';
import './PageList.css'

const PageList = ({ postsPerPage,totalPosts,paginate }) => {
    
    const [ page, setPage ] = useState(1)
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }//페이지 넘버 -> 토탈포스트 / postsPerPage 
    
    const listMap = pageNumbers.map((number)=>{ 
        return(
        <li key={number} id ={number}>
            <span onClick={() => {setPage(number)}} className={ page === number ? 'list-on': 'list'}>{number}</span>
        </li>
        )});
    const backBtn = (page) => {
        return new Promise(function (resolve,reject){
            if(page > 1){
                const idx = page - 1;
                setPage(idx);
            }
        })  
    };
    backBtn().then(paginate(page));

    const forwardBtn = (page) => {
        return new Promise(function (resolve,reject){
            if(page < pageNumbers.length){
                const idx = page + 1;
                setPage(idx);
            }
        })  
    };
    forwardBtn().then(paginate(page));

    
    return (
            <div className="panelsystem-pages">
                
                    <ul className="panelsystem-page-list">
                        <li>
                        <button className="panelsystem-back-btn" onClick={()=>{backBtn(page)}}><img src="/img/eva-arrow-ios-back-outline.png" alt="이전페이지버튼" /></button>
                        </li>
                        {listMap}
                        <li>
                        <button className="panelsystem-forward-btn" onClick={()=>{forwardBtn(page)}}><img src="/img/eva-arrow-ios-forward-outline.png" alt="다음페이지버튼" /></button>
                        </li>
                    </ul>
            </div>
    );
};

export default PageList;