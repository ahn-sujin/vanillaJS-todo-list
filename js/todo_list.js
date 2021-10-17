const toDoFrom = document.querySelector('.toDoForm')
,input = toDoFrom.querySelector('input')
,toDoList = document.querySelector('.todoList');

// 4-1. localstrage 저장
const TODOS_LS = 'toDos'; // key name
let toDos = [];

// 1. list 생성
function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    delBtn.innerText = '✅';
    span.innerText = text;
    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    //4-2. localstrage 저장 - object 저장
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);

    saveToDos();

    //5-2. list 삭제 이벤트 실행
    delBtn.addEventListener('click', deleteToDo)

}

//2. list 출력
function handleSubmit(e){
    e.preventDefault();
    const currentValue = input.value; //현재 input에 입력 된 값 가져옴
    paintToDo(currentValue);
    input.value = ""; //enter 치면 입력된 내용 사라짐
}

//4-2. localstrage 저장 - 배열 전체 저장
function saveToDos(){
    //setItem(key,value)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify() :  object를 string으로 바꿔주는 함수
}

//4-3. localstrage 저장 - html에 추가하여 새로고침해도 화면에 출력되도록 
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // JSON.parse() : string을 object로 바꿔주는 함수
        parsedToDos.forEach(function(toDo){ //array.forEach(함수이름) : array가 가진 함수 중 하나로, 배열에 담겨있는 것들 각각에 한번씩 인자의 함수를 실행시켜 주는 함수 -> 함수이름 생략하고  function(인자){ //실행내용 } 
            paintToDo(toDo.text);
        });
    }
}

//5-1. list 삭제
function deleteToDo(event){
    const btn = event.target; //이벤트가 발생한 요소 반환
    const li = btn.parentNode;
    toDoList.removeChild(li);

    //5-3. list 삭제 - local strage 해당되는 value값 지우기
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }); 

    //5-4. list 삭제 - 새롭게 갱신된 toDos array객체 값을 localStrage에 다시 저장
    toDos = cleanToDos
    saveToDos();
}


function init(){
    // 3. submit event 실행
    toDoFrom.addEventListener('submit', handleSubmit);
    // 4-4. localstrage 저장 - loadToDos 함수 실행
    loadToDos();
}

init();