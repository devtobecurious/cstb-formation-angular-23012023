let pasType = 1;
pasType = "Hello";

// ES6
class Wookie {

}

// ES6
class WookiePuissant extends Wookie {

}

// Les interfaces sont inexistantes

function leSecondProblemLeScope() {
    this.name = 'Chewie'; 
    return this.name;
}

leSecondProblemLeScope(); // le this est global ! window.name

let unVariable = new leSecondProblemLeScope(); // le scope est la fonction 