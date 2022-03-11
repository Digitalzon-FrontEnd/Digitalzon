import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import PublishQA from '../publishq&a/PublishQA';

import "./MainQA.css"

function MainQA({tableInfo}){

  const [publsihTitle,setPublishTitle] = useState('');
  const [publsihText,setPublishText] = useState('');
  /* function publishInfo(a){
    let newTableInfo =[...tableInfo]
    newTableInfo.unshift({
    번호 :'151',
    제목 : {a},
    등록일 : '2021.08.28',
    등록자 : '고승원'})
    setTableInfo(newTableInfo)
  } */
  return(
    <div className='mainqa'>
        <div className='btn-head'>
          {/* <Link to = {{
            pathname:"/publsih",
            state:{
              publsihTitle:publsihTitle,
              setPublishTtitle:setPublishTitle,
              setPublishText:setPublishText,
              publishInfo:publishInfo
            }
          }}> */}<button className='btn-publish'>신규등록</button>{/* </Link> */}
          <input className='btn-search'></input>
        </div>
        <table className='mainqa-table'>
          <thead className='table-head'>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th>등록자</th>
              </tr>
          </thead>
          <tbody>
                {tableInfo.map(function(a){
                return(
                        <tr key={a.번호}>
                          <td>{a.번호}</td>
                          <td><Link to={{
                            pathname:`/mainqa/detailqa/${a.번호}`,
                            state:{번호:a.번호,제목:a.제목,등록일:a.등록일,등록자:a.등록자}
                            }}
                          >{a.제목}</Link></td>
                          <td>{a.등록일}</td>
                          <td>{a.등록자}  </td>
                        </tr> 
                )
              })}
    </tbody>
        </table>
    </div>
  )
}
export default MainQA;

