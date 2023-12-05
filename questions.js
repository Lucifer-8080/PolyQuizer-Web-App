let MCQS = [{
    question: "What does HTML stand for?",
    choice1: "Hyperlinks and Text Markup Language",
    choice2: "Hyper Text Markup Language",
    choice3: "Hyper Text Making Language",
    choice4: "Hyper Text Mark Language",
    answer: 1
},
            {
            question: "What does CSS stand for?",
    choice1: "Colorful StyleSheet",
    choice2: "Creative Style Sheet",
    choice3: "Cascading Style Sheet",
    choice4: "Computer Style Sheet",
    answer: 2
},
            {
            question: "Which HTML tag is used to define an internal style sheet?",
    choice1: "<script>",
    choice2: "<style>",
    choice3: "<html>",
    choice4: "<svg>",
    answer: 1
},
            {
            question: "Which is the correct CSS syntax?",
    choice1: "body{color:black}",
    choice2: "{body{color:black}",
    choice3: "body={color:black}",
    choice4: "body:color{black}",
    answer: 0
},
            {
            question: "How do you insert a comment in a CSS file?",
    choice1: "/*This is Comment*/",
    choice2: "//This Is Comment",
    choice3: "<!--- This Is Comment --->",
    choice4: "//This Is Comment//",
    answer: 1
},
            {
            question: "How do you insert a comment in a HTML file?",
    choice1: "/*This is Comment*/",
    choice2: "//This Is Comment",
    choice3: "<!--- This Is Comment --->",
    choice4: "//This Is Comment//",
    answer: 2
},
            {
               question: "Which property is used to change the background color?",
    choice1: "backgroundColor",
    choice2: "BgColor",
    choice3: "Color-Background",
    choice4: "background",
    answer: 3
},{
               question: "How to write an IF statement in JavaScript?",
    choice1: "if i==5",
    choice2: "if(i==5)",
    choice3: "if(i==5)then",
    choice4: "if i==5 then",
    answer: 2
},
            {
               question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<js></js>",
    choice2: "<javascript></javascript>",
    choice3: "<script></script>",
    choice4: "<scripting>",
    answer: 2
},
            {
               question: "How does a WHILE loop start?",
    choice1: "while(i <= 0)",
    choice2: "while(i <= 0 i++)",
    choice3: "while i <= 0",
    choice4: "while (i++ i <= 0)",
    answer: 0
}];
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");


let index = 0;
let timer = 0;
let interval = 0;

//total points
let correct = 0;

//store Answer Value
let UserAns = undefined;

//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
});

//what happen when 'Exit' Button Will Click
exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
});


//Creating Timer For Quiz Timer Section

let countDown = () => {
    if (timer === 20) {
        clearInterval(interval);
        next_question.click();
    } else {
        timer++;
        time.innerText = timer;
    }
}

//setInterval(countDown,1000);

let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    //    timer start
    timer = 0;
}

loadData();

//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    guide.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();

    //    remove All Active Classes When Continue Button Will Click

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    total_correct.innerHTML = `${correct = 0} Out Of ${MCQS.length} Questions`;
});

choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //check answer
        if (choiceNo === MCQS[index].answer) {
            correct++;
        } else {
            correct += 0;
        }
        //stop Counter
        clearInterval(interval);

        //disable All Options When User Select An Option
        for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }
    })
});

////what happen when 'Next' Button Will Click
next_question.addEventListener("click", () => {
    //    if index is less then MCQS.length
    if (index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        //question
        loadData();

        //result
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    } else {
        index = 0;


        //when Quiz Question Complete Display Result Section
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `You Got ${correct} Out Of ${MCQS.length}`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

//what happen when 'Quit' Button Will Click
quit.addEventListener("click", () => {
    start.style.display = "block";
    result.style.display = "none";
});

//Start Again When 'Start Again' Button Will Clicked
startAgain.addEventListener("click", () => {
    guide.style.display = "block";
    result.style.display = "none";
});

function plugarism(){
    document.addEventListener("contextmenu",event=>{event.preventDefault();});
}