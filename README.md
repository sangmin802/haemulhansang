# haemulhansang(React.js)  
* React-Router를 통한 path가 있는 SPA  
  * 웹사이트에서 특정 위치를 기억할 수 있도록 React-Router를 사용하였습니다.  
  * menutitle component에서 path마다 다른 값들을 출력할 수 있도록 하였습니다.
* React-Redux를 통한 state관리  
  * 상, 하위 component 불필요한 props 전달을 최소화하기위해 redux디자인패턴을 사용하였습니다.  
  * action type을 통해 return되는 state값을 분류하였습니다.  
  * state를 반환할 때, 이전의 state를 남길 수 있도록 immutability를 사용하였습니다.  
  * redux로 connect 된 component 또한, 재활용할 수 있도록 분리하였습니다.  
* ES5 이상의 문법을 최대한 활용하였습니다.  
  * 첫 접속 시, state의 상수값을 확인하여 두개의 index페이지중 필요한 한가지만 띄우도록 하였습니다.  
* fetch api를 활용하여 필요한 json정보를 가져오도록 하였습니다.