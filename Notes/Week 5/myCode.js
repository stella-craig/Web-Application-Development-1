const dog = {
    Name: "Coco",
    Age: 2,
    Weight: "60",
    Color: "Brown",
    ThisDog: function(){
        return this.Name + " is the name of my dog that is " + this.Age + " and he is " + this.Weight + " pounds";
    }
};

document.getElementById("myDog").innerHTML = dog.ThisDog();

var dogs = ["Big", "Normal", "Small"];

function myArray(){
    for(i = 0; i < dogs.length; i++){
        
    }
}