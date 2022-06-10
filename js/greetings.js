// 니꼬 버전
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
// const link = document.querySelector("a")

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    // setItWem 뒤에 들어간 것, 저장될 아이템이름과 username 변수
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
// 새로고침 일어나는 것 form submit의 기본동작
} else {
    //show the greeting
    paintGreetings();
}


// 내꼬 버전 ㅋㅋ

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const inputButton = document.querySelector("#input-button")
// const greeting = document.querySelector("#greeting")

// const CLASS_HIDDEN = "hidden";
// const LOCAL_KEY = "username";
// const LOCALGETITEM = localStorage.getItem(LOCAL_KEY)

// const submitLogin = () => {
//     // e.preventDefault();
//     // e는 button type = "submit"할 때 사용
//     const username = loginInput.value;
//     console.log(username);
//     loginForm.classList.add(CLASS_HIDDEN);
//     greeting.classList.remove(CLASS_HIDDEN);
//     greeting.innerHTML = `Hello ${username}`;
    
//     localStorage.setItem(LOCAL_KEY, username);

// }



// if (LOCALGETITEM === null) {
//     loginForm.classList.remove(CLASS_HIDDEN);
//     inputButton.addEventListener("click", submitLogin);

// } else {
//     loginForm.classList.add(CLASS_HIDDEN);
//     greeting.classList.remove(CLASS_HIDDEN);
//     greeting.innerHTML = `Hello ${LOCALGETITEM}`;
// }
