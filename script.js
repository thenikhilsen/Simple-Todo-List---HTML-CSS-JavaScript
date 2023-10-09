const inputBox = document.getElementById('input_box');
const inputList = document.getElementById('list_container');

const addTask = () => {
    if(inputBox.value === ''){
        alert('You must write something!');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        inputList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "X";
        li.appendChild(span);
    }
    inputBox.value = "";

}

inputList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})