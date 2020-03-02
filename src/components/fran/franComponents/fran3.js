import React from 'react';

import '../../../css/fran3.css';

class Fran3 extends React.Component {
  state = {
    file : null
  };

  render(){
    return(
      <div className="fran3Content">
        <div className="logo">
          <img src="./img/fran/fran3/inquire_tit.png" alt="가맹문의" />
        </div>
        <form action="" className="fran3Form" onSubmit={this.onSubmit}>
          <div className="name">
            <div className="label">이름</div>
            <div className="type">
              <input type="text" name="name" placeholder="이름"/>
            </div>
          </div>
          <div className="call">
            <div className="label">연락처</div>
            <div className="type">
              <input type="text" name="call"/>
            </div>
          </div>
          <div className="mail">
            <div className="label">이메일</div>
            <div className="type">
              <input type="text" name="mail" placeholder="이메일 주소를 입력하세요"/>
            </div>
          </div>
          <div className="title">
            <div className="label">제목</div>
            <div className="type">
              <input type="text" name="title"/>
            </div>
          </div>
          <div className="hopeArea">
            <div className="label">창업희망지역</div>
            <div className="type">
              <input type="text" name="hopeArea"/>
            </div>
          </div>
          <div className="invest">
            <div className="label">창업투자금액</div>
            <div className="type">
              <input type="text" name="invest"/>
            </div>
          </div>
          <div className="question">
            <div className="label">문의내용</div>
            <div className="type">
              <textarea name="question"></textarea>
            </div>
          </div>
          <div className="file">
            <div className="label">파일첨부</div>
            <div className="type">
              <div className="uploadedFile">{this.state.file}</div>
              <label htmlFor="file" className="upload">업로드</label>
              <input type="file" id="file" name="file" onChange={this.file}/>
            </div>
          </div>
          <div className="checkbox">
            <div className="check1 checkWrap">
              <label>
                <input type="checkbox" name="check1"/>
                <span className="short">이용약관에 동의합니다.</span>
                <u className="showLong">이용약관보기</u>
              </label>
            </div>
            <div className="check2 checkWrap">
              <label>
                <input type="checkbox" name="check2"/>
                <span className="short">개인정보취급방침에 동의합니다.</span>
                <u className="showLong">개인정보처리방침</u>
              </label>
            </div>
          </div>
          <div className="btn">
            <input type="submit" value="신청"/>
          </div>
        </form>
      </div>
    );
  };

  file = (e) => {
    this.setState({file : e.target.value});
  }

  onSubmit = (e) => {
    const { name, call, mail, title, hopeArea, invest, check1, check2 } = e.target;
    if(name.value.length !== 0 && call.value.length !==0 && mail.value.length !== 0 && title.value.length !== 0 && hopeArea.value.length !== 0 && invest.value.length !== 0 && check1.checked === true && check2.checked === true){
      alert('신청 완료되었습니다!');
      this.setState({file : null});
    }else{
      alert('문의내용, 파일첨부를 제외한 부분에서 누락된 항목이 있습니다!')
    }
  }
};

export default Fran3;