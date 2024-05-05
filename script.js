const listItems = document.querySelectorAll('ul li');
const button = document.getElementById('submit');
const Thanks = document.querySelector('.Thanks');
const rating = document.querySelector('.rating');
const selected = document.getElementById('selected');

let rate = '';

listItems.forEach(function(item){
    item.addEventListener('click', function(){
        listItems.forEach(function(item){
            item.classList.remove('active');
        });


        item.classList.add('active');
        rate = item.textContent; 
        localStorage.setItem('rate', rate);
        
    });
});




button.addEventListener('click', function(){
    if(!rate == ''){
        rating.classList.add("hidden");
        Thanks.classList.remove("hidden");
        selected.innerText = `You selected ${rate} out of 5`;
 
    }
});