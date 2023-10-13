class Human {
    //class method - is called on the class ie Human
    static getPopulation(){
        console.log('about 8 billion')
    }
    static getSpecies(){
        console.log('homo sepains')
    }

    // this is called when we create an instance of the class
    constructor(name, age, height){
        // instance varaible
        this.name = name 
        this.age = age 
        this.height = height
    }

    //instance methods - these are called on the instance of the class
    run(){
        if(this.age < 30){
            console.log('run fast')
        }
        if(this.age>80){
            console.log('run slow')
        }
    }

}

// create a 'instance of a human'
const james = new Human('James', 20, '73inches')
const sally = new Human('Sally', 90, '77inches')
console.log(james.age)
console.log(sally.run())
console.log(james.run())
console.log(james.getPopulation)

// I am calling this method on the class
// class method
Human.getPopulation()
