//learning to us functions

function greet(){
    console.log('hello there');
}

//result of using the function or calling out the function.

/*greet()
greet()
greet()*/

const speak = function(){
    console.log('good day!')
}

speak()

//arguments and parameter

const talk = function(name){
    console.log(`HAVE AN AWESOME DAY ${name}`)
}

talk('Amal')

//two parameters

const timeday = function(time, day){
    console.log(`It is lovely in ${time} have an awesome ${day} pal`)
}

timeday('2 o clock', 'Friday')


//function to calculate the area

const CalcArea = function(radius){{
    let area = 3.14 * radius**2;
    console.log(area)
}}

CalcArea(14)