const seachable =[
    "Boston",
    "Worcester",
    "Water town",
    "Waltham",
    "Framimgham"
];

const inputField = document.getElementById("search");
const resultWrapper = document.querySelector("#resultWrapper");
const result = document.getElementById("results");
const cleanBtn= document.getElementById("closer");

// clear button
cleanBtn.addEventListener('click', function () {
    inputField.value = "";
    resultWrapper.classList.add('hidden');
});

// input field
inputField.addEventListener('input', function () {
    let keyInput = inputField.value;


    for (let item of seachable) {

        if(item.toLocaleLowerCase() === keyInput){
            resultWrapper.classList.remove('hidden');
            result.innerHTML = `<li>${item}</li>`;
            console.log(`${item}`);
        }
        if(!keyInput.toLocaleLowerCase()){
            resultWrapper.classList.add('hidden');
        }

    }
});