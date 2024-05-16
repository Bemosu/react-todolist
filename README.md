1. TodoForm : Todd의 제목과 아이템들을 담은 목록을 출력하는 폼입니다. 크게 할일의 제목과 내용, ButtonArea로 구성했으며 TodoList에서 todos,title,todo,isDone의 객체를 받는 할일에 대한 정보와 
    그 정보들을 제어하기 위한 커스텀 버튼 스타일, '삭제'버튼, '완료/취소' 버튼의 대한 데이터를 props를 통해 받았습니다. 

2. ButtonArea : TodoForm안에 존재하는 '삭제'와 '완료/취소' 버튼 구역을 담은 컴포넌트입니다. 버튼을 styled-components로 디자인 했습니다.

3. InputArea : 추가하고 싶은 할일의 제목과 내용을 적는 칸입니다. 할일의 제목과 내용, 그리고 그것들의 변화값을 탐지하는 함수와 ListContainer에 할일들을 추가할 수 있도록 title,titleChangehandler,todo,todoChangehandler,Addbuttonhandler,StBtn의 데이터를 props로 받았습니다.


