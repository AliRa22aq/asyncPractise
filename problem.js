/**
 * Prepare meal (5s)
 * Make tea (2s)
 * Wash dishes (3s)
 * Watch tutorial (5s)
 * Take a nap (3s)
 */

console.clear();

console.log("Start\n");

function prepareMeal(){
    console.log("Start preparing meal");
    setTimeout(() => {
        console.log("Food is ready")
    }, 5000);
}

function prepareTea(){
    console.log("Start preparing Tea");
    setTimeout(() => {
        console.log("Tea is ready")
    }, 2000);
}

function washDishes(){
    console.log("Start washing dishes");
    setTimeout(() => {
        console.log("Done with dishes")
    }, 3000);
}

function watchTutorial(){
    console.log("Start watching tutorial");
    setTimeout(() => {
        console.log("Done with tutorial")
    }, 5000);
}

function takeNap(){
    console.log("Start taking a nap");
    setTimeout(() => {
        console.log("Done with nap")
    }, 3000);
}


prepareMeal();
prepareTea();
washDishes();
watchTutorial();
takeNap();


console.log("\nEnd")

