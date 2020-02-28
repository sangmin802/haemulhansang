import React from 'react';

import '../../../css/fran1.css';

class Fran1 extends React.Component {
  render(){
    const openCostTitle = ['구분', '30평', '40평', '비고'];
    const openCostDesc = ['가맹비', '1,000', '1,000', '', '교육비', '500', '500', '', '내부공사', '4,800', '6,400', '평당 160만원', '덕트/후드공사', '584', '584', '덕트2라인, 후드7M기준', '간판/사인물', '820', '820', '', '테이블/의자', '500', '600', '', '주방설비', '2,600', '2,800', '냉동/냉장/집기류', 'POS&오더포스', '210', '210', ''];
    const openProcess = [
      { id : 1, title : '가맹상담 및 사업성 검토', desc : '방문, 전화상담 및 인터넷을 통한 전문가와 상담. 전복서커스의 컨셉 및 차별 화된 영업전략 보고 투자자금 계획 개설 상담 진행' },
      { id : 2, title : '입지선정 및 상권분석', desc : '희망지역 투자규모 확인 점포개발 예상손익의 분석 현장 방문 조사' },
      { id : 3, title : '점포계약 및 인허가', desc : '점포인허가 사항 점검(전기물량, 정화조 용량 등) 가맹신청서 접수, 정보공개서 제공' },
      { id : 4, title : '가맹계약', desc : '가맹사업공정화에 의한 법률에 의거 가맹계약, 가맹계약서 법률 설명과 지원사항 설명 및 서비스권 사용 설명' },
      { id : 5, title : '인테리어 도면 작성', desc : '가맹계약 후 매장 방문 실측 인테리어 공사의 도면을 작성하여 검토 및 수정' },
      { id : 6, title : '인테리어 시공', desc : '검토 완료된 도면을 바탕으로 공사 실시 체계적인 업체관리를 통한 공사 진행' },
      { id : 7, title : '운영교육', desc : '본사 교육시스템을 통한 교육 실시 실제 매장에서 시뮬레이션 교육 실시 기타 매장 운영에 필요한 교육 실시' },
      { id : 8, title : '입지선정 및 상권분석', desc : '매장 운영에 필요한 초도 원자재 및 부자재 입고 체크리스트를 통한 오픈 점검 시험오픈을 통한 오픈 차질 최소화 슈퍼바이저 매장운영 도움 및 지도 오픈 마케팅 지원' },
    ];

    return(
      <div className="fran1Content">
        <div className="titleImg">
          <div className="title">Opening Cost</div>
          <img src="/img/fran/fran1/info_tit.png" alt="창업비용" />
        </div>
        <div className="VAT">
          * VAT별도
        </div>
        <div className="openCostInfo">
          {openCostTitle.map((res, index) => {
            return <div className="title" key={index}>{res}</div>
          })}
          {openCostDesc.map((res, index) => {
            return <div className="info" key={index}>{res}</div>
          })}
        </div>
        <ul className="subInfo">
          <li>예상비용으로 실제 개설비용이 현장상황에 따라 다를 수 있습니다.</li>
          <li>전기 30KW/가스 16등급</li>
          <li>별도 : 철거, 폴딩도어, 외부익스테리어, 간판추가, 외부덕트, 전기증설, 가스설비, 냉난방 등</li>
        </ul>
        <div className="titleImg">
          <div className="title">Opening Process</div>
          <img src="/img/fran/fran1/info_tit2.png" alt="창업절차" />
        </div>
        <div className="openProInfo">
          {openProcess.map(res => {
            return (
              <div className="openProStep" key={res.id}> 
                <div className="numberImg">
                  <img src={`/img/fran/fran1/info_N${res.id}.png`} alt={res.id} />
                </div>
                <div className="title">
                  {res.title}
                </div>
                <div className="desc">
                  {res.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
};

export default Fran1;