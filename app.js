//고민 목록
const lists = ["우리 회장 일 안한다!", "아 철수 오늘 영희 뒷담깜", "샌즈가 좋아"]

const previousBTN = document.getElementById('previous');
const nextBTN = document.getElementById('next');
const text = document.getElementById('text');
let checker = 0

function goNext(){
   if(checker == lists.length-1){
      checker = 0;
      text.innerText = lists[checker];
   }
   checker++;
   text.innerText = lists[checker];
   console.log(checker);
}

function goPrevious(){
   if(checker == 0){
      checker = lists.length;
      text.innerText = lists[checker];
   }
   checker--;
   text.innerText = lists[checker];
   console.log(checker);
}

setInterval(goNext, 5000);

(function(){
    emailjs.init("user_6W7H9JW9czHKpNYZnOCUw");
 })();

 const form = document.getElementById('form');


 function sendEmail(event){
   event.preventDefault();
   emailjs.send('service_mgs9lao', 'template_v1o22pd',{message: document.getElementById('inputValue').value}).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('고민이 정상적으로 전송되었습니다.');
   }, function(error) {
       console.log('FAILED...', error);
       alert('고민 전송에 오류가 생겼습니다. 다시 시도해주십시오.');
   });
};

form.addEventListener('submit', sendEmail);


