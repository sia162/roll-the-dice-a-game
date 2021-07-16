const burger = document.querySelector('.rulesbar');
const ruleBoard = document.querySelector('.rulesboard');
const crossBtn = document.querySelector('.cross')
const rules = document.querySelector('.rules')
const imageRule = document.querySelector('.rule-img')



burger.addEventListener('mouseover' , ()=>{
    imageRule.classList.remove('hidden');
})
burger.addEventListener('mouseout' , ()=>{
    imageRule.classList.add('hidden');
})


burger.addEventListener('click' , ()=>{
    ruleBoard.style.width = "100%";

    rules.classList.remove('hidden');
    crossBtn.classList.remove('hidden');

    console.log("helo");
})




crossBtn.addEventListener('click' , ()=>{
    ruleBoard.style.width = "0";

    rules.classList.add('hidden');
    crossBtn.classList.add('hidden');


    //resetting input score values
    // document.querySelector('.score-choice').value = '';
})


