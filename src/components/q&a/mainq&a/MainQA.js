import React from 'react';
import {Link} from 'react-router-dom'
import Gnb from "../../common/Gnb"
import Pagination from '../../point/Pagination';
import "./MainQA.css"

function MainQA({tableInfo, user}){
  return(
    <div className='mainqa'>
      <Gnb user={user} />
        <div className='btn-head'>
          <Link to={{pathname:'/publish',}}>
            <button className='btn-publish'>신규등록</button></Link>
          <div className='btn-search'>
            <input type="text"></input>
            <button><img src="/img/mdi-magnify.png" /></button>
          </div>
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
                {tableInfo.map(function(a,index){
                return(
                        <tr key={index}>
                          <td>{a.num}</td>
                          <td><Link to={{
                            pathname:`/mainqa/detailqa/${a.num}`,
                            state:{num:a.num,title:a.title,date:a.date,user:a.user,content:a.content}
                            }}
                          >{a.title}</Link></td>
                          <td>{a.date}</td>
                          <td>{a.user}  </td>
                        </tr> 
                )
              })}
    </tbody>
        </table>
    </div>
  )
}
export default MainQA;

