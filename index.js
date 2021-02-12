class Race {
    runners = []
    
    constructor(name, kilometers = 42, terrain = "asphalt", requiredRunnerAge, requiredRunnerGender, startTime, duration){
        this.name = name
        this.kilometers = kilometers
        this.terrain = terrain
        this.requiredRunnerAge = requiredRunnerAge
        this.requiredRunnerGender = requiredRunnerGender
        this.startTime = startTime
        this.duration = duration
    }

    start(timer){
        //start the timer or km
        
        console.log("get ready!")
    }

    end(timer) {
        //end the timer or km 

        console.log("it is done!")
    }
}

class Runner {
    id = Math.round(Math.random() * 100000000)
    
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    applyRace(race) {
        //fix this bug
        if Admin.admit(this, race) console.log(`you are admitted to ${race.name}`)
    }

    joinRace(race) {
        console.log("you got this!")
    }

    quitrace() {
        console.log("Hey don't be sad <3")
    }

    endrace(race) {
        console.log("congrats!!")
    }
}

//status fixed string 

class Admin {
    /***
     * Applies the required controls to admit a user to a race
     * @constructor
     */
    constructor(user, race) {
        this.user = user
        this.race = race
    }

     //apply(race) method, call the admit method of the race (create it first)
    //inside apply's body, we can have race.admit(this)

    static admit(user, race) {
        return user.age === race.age && user.gender === race.gender
    }
}

