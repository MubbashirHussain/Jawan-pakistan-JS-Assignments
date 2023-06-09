
var questions = [
    {
        question: "HTML Stands for ______________",
        options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for ______________",
        options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
        correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS Stands for ______________",
        options: ["JS", "JS", "JavaScript", "JS"],
        correctAnswer: "JavaScript",
    },
    {
        question: "RAM Stands for ______________",
        options: ["RAM", "RAM", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "SQL Stands for ______________",
        options: ["SQL", "SQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "is HTML is Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    },
];


var question_box = document.querySelector('.question_box')
var qeu_no = document.querySelector('.qeu_no')
var total_qeu = document.querySelector('.total_qeu')
var option_box = document.querySelector('.option_box')
var main_conatiner = document.querySelector('.main_conatiner')

var indexVal = 0;


function RenderingText() {
    question_box.innerHTML = questions[indexVal].question
    total_qeu.innerText = questions.length
    qeu_no.innerText = indexVal + 1;
    option_box.innerHTML = ''
    for (let i = 0; i < questions[indexVal].options.length; i++) {
        option_box.innerHTML += `
        <button class="p-2 bg-light btn d-block w-100 text-dark my-2 rounded" onclick="CheckingAns('${questions[indexVal].correctAnswer}','${questions[indexVal].options[i]}')">
            <div class="d-flex me-3 d-block w-100 p-2">${questions[indexVal].options[i]}</div>
        </button>
        `
    }

}
RenderingText()

function nexTT() {
    indexVal++
    RenderingText();
    if(questions.length == (indexVal +1)){
        ShowMakrs()
    }

}


var marks = 0;
function CheckingAns(a, b) {
    if (a === b) {
        marks++
    }
    nexTT()
}

function ShowMakrs(){

    main_conatiner.innerHTML = `
    
    <div class="m-5">
        <div class="py-3 px-5 rounded border"> You give <span class="text-success"> ${marks} </span> Right Answer out of <span class="text-warning"> ${questions.length} </span></div>
    </div>
    
    `
}









































