import React, { useState } from 'react'
import moment from 'moment'
import "./ManegePoint.css"
import Gnb from "../common/Gnb"

const ManagePoint = () => {
    const [inputPoint, setInputPoint] = useState('');
    /* 충전포인트 input 값 */
    const [refundPoint, setRefundPoint] = useState('');
    /* 환불포인트 input 값 */
    const [ accountName, setAccountName ] = useState('');
    /* 계좌명 input 값 */
    const [ refundAccount , setRefundAccount ] = useState('');
    /* 환불계좌번호 input 값 */
    const [ point, setPoint ] = useState(0);  //아직 초기 데이터 값을 모르기 때문에 0으로 처리했다.
    /* 총 자산 포인트 값 */
    const [ list, setList ] = useState([]);
    /* 사용내역 로그 */
    const [ select , setSelect ] = useState('');
    /* 드랍박스 메뉴 */

    let date = moment().format("YYYY-MM-DD")
    /* 날짜 */

    const onChengePoint = (e) => {
        setInputPoint(e.target.value);
    };
    const onRefundPoint = (e) => {
        setRefundPoint(e.target.value);  
    };
    const accountNameChg = (e) => {
        setAccountName(e.target.value);  
    };
    const refundAccountChg = (e) => {
        setRefundAccount(e.target.value);  
    };
    /* onChange 인풋 함수 */

    const addList = (totalPoint,point) => {
        const pointList = [...list];
        pointList.unshift({
            id: 2,
            title: '포인트변경',
            state: point + 'point',
            point: totalPoint
        });
        setList(pointList);
    };
    /* 사용내역 리스트 추가 함수 */

    const onSubmit = (e) => {
        e.preventDefault(); //새로고침방지
        if(inputPoint=== ''){
            alert('포인트 값을 입력해주세요.');
        } else{
            setInputPoint(''); //빈값처리
            setPoint(Number(inputPoint)+Number(point)); //number 처리를 해야 point 가 추가된다.
            addList(Number(inputPoint)+Number(point),`+${inputPoint}`);
        }; 
    };
    /* 포인트충전 버튼 함수 */
    const selectChg = (e) => {
        setSelect(e.target.value);
    }

    
    const refund = (e) => {
        e.preventDefault(); //새로고침방지
        if(point<refundPoint){
            alert('환불 포인트가 기존 포인트 값보다 많습니다.')
            setRefundPoint('');
        }else if(select === ''){
            alert('은행을 선택해주세요')
        }else if (refundPoint === ''){
            alert('환불 포인트를 적어주세요')
        }else if (refundAccount === ''){
            alert('환불 가능한 계좌를 입력해주세요')
        }else if (accountName === ''){
            alert('계좌명을 입력해주세요')
        }else {
            setAccountName(''); 
            setRefundPoint('');
            setRefundAccount('');
        setPoint(Number(point)-Number(refundPoint));
        addList(Number(point)-Number(refundPoint),`-${refundPoint}`);
        }    
    };
    /* 포인트 환불 함수 */

    
    return (
        <div className="inner_box Manage-inner">
            <Gnb />
            <div className="managePoint-header">
                <h1>[보유포인트]</h1>
                <span>{point} point</span>
            </div>
            <div className="managePoint-refund-box">
                    <form className="refund-input">
                        <span className="bank-option">
                            <select name="banktitle" id="bankTitle" onChange={selectChg}>
                            <option disabled selected>은행</option>
                            <option value="shinhan">신한은행</option>
                            <option value="kb">국민은행</option>
                            <option value="nh">농협은행</option>
                            </select>
                        </span>
                        <span>
                            <input onChange={refundAccountChg} type="number" className="backaccount-input" name="backAccountInput" value={refundAccount} placeholder="환불계좌 입력" />
                        </span>
                        <span>
                            <input onChange={accountNameChg} type="text" className="backaccount-title-input" name="backaccountTitleInput" value={accountName} placeholder="계좌명 입력"/>
                        </span>
                        <span>
                            <input onChange={onRefundPoint} className="refund-point-input" name="refundPointInput" value={refundPoint} type="number" placeholder="환불포인트 입력" />
                            {/* value 값을 설정하지 않았더니 초기화가 안되었었다!! value 값 꼭 설정 */}
                        </span>
                        <button onClick={refund} className="btn-refund">환불신청</button>
                        <div className="text-refund">
                            <p>* 보유 포인트 이하만 환불신청이 가능합니다.</p>
                        </div>
                    </form>
            </div>
            <div className="managePoint-log-box">
                <h2>[사용내역]</h2>
                <ul className="managePoint-log-list">
                    {list.map((item,i)=> (   
                        <li key={i}> 
                        <span>{date}</span>
                        <span>{item.title}</span> 
                        <span>{item.state}</span> 
                        <span>잔여:{item.point}point </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="managePoint-charge-point">
                <form className="form-charge-point">
                    <input onChange={onChengePoint} type="number" name="chargePointInput" value={inputPoint} id="inputPoint" placeholder="충전포인트 입력" />
                    <p>* 카드결제만 가능합니다.</p>
                    <button onClick={onSubmit} className="btn-charge">
                    충전하기
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default ManagePoint;