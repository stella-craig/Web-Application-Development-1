var counter = 0;

//randomly choose a new image
function changeImage(){

    var pickImage = Math.floor(Math.random() * 4) + 1;

    if(pickImage == 1){
        const imageElement = document.getElementById('image');
        imageElement.src = 'Fruit/apple-g56a141b7e_640.png';
        imageElement.alt = "Apple";
    }
    else if(pickImage == 2){
        const imageElement = document.getElementById('image');
        imageElement.src = 'Fruit/orange-g37e0fbbbb_640.png';
        imageElement.alt = "Orange";
    }
    else if(pickImage == 3){
        const imageElement = document.getElementById('image');
        imageElement.src = 'Fruit/pear-gf679252a5_1280.png';
        imageElement.alt = "Pear";
    }
    else if(pickImage == 4){
        const imageElement = document.getElementById('image');
        imageElement.src = 'Fruit/pineapple-g0b83a3b6c_640.png';
        imageElement.alt = "Pineapple";
    }
    else{
        const imageElement = document.getElementById('image');
        imageElement.src = 'Fruit/test.png';
        imageElement.alt = "Test";
    }

    // const imageElement = document.getElementById('image');
    // imageElement.src = 'Fruit/apple-g56a141b7e_640.png';
    // imageElement.alt = "Apple";
}

changeImage();

//show the answer
function showSolution(){
    const imageElement = document.getElementById('image');
    const solution = document.getElementById('solution');
    //solution.textContent = "Answer: " + imageElement.alt;
    solution.textContent = imageElement.alt;
}

//hides solution text
function hideSolution(){
    const solution = document.getElementById('solution');
    solution.textContent = "";
}

function addNewGameButton(){
    const buttElement = document.getElementById('nGameButton');
    buttElement.style.display = 'block';
}

function hideNewGameButton(){
    const buttElement = document.getElementById('nGameButton');
    buttElement.style.display = 'none';
}

//When they push the new game button
function newGame(){
    hideSolution();
    changeImage();
    hideNewGameButton();
    document.body.style.backgroundColor = 'white';
}

//When they push a button to make a guess
function guess(text){
    showSolution();
    addNewGameButton();

    //document.body.style.backgroundColor = 'green';
    if (solution.textContent == text){
        //change background to green
        document.body.style.backgroundColor = 'green';
        const correctness = document.getElementById('correctness');
        correctness.textContent = 'Correct!';
    }
    else{
        document.body.style.backgroundColor = 'red';
        const correctness = document.getElementById('correctness');
        correctness.textContent = 'Incorrect!';
    }

}