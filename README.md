# haemulhansang
 
* run build를 통해, 배포를 할 때, 주의할 점!<br>
1) img, url 기존에는 localhost기 때문에, '/'가 기준이지만, 배포 후에는 배포된 사이트의 이름이 기준이 된다.<br> ex) /haemulhansang<br>
2) react app을 깃허브로 deploy 했을 때에, 새로고침을 하였을 때 404erorr가 뜬다. BrowserRouter as Router의 문제점으로, HashRouter를 사용하자.<br>
3) HashRouter을 사용하게 되면서, window.location.path로 구분하던것들을, window.location.hash로 바꾼다, index화면은 '#/'이다. 단! 깃허브에서 연결시켜주는 주소의 경우 hash가 없기 때문에, 조건으로 첫 접속을 위한 hash===''의 경우도 포함시켜줘야한다.<br>
4) HashRouter로 바꿔도 path to는 동일하게 사용하면 된다.

