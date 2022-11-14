/**
 * Prepare meal (5s)
 * Make tea (2s)
 * Wash dishes (3s)
 * Watch tutorial (5s)
 * Take a nap (3s)
 */

console.clear();

console.log("Start\n");

function prepareMeal(teaCallback){
    console.log("Start preparing meal");
    setTimeout(() => {
        console.log("Food is ready");
        teaCallback(washDishes)
    }, 5000);
}

function prepareTea(DishesCallback){
    console.log("Start preparing Tea");
    setTimeout(() => {
        console.log("Tea is ready")
        DishesCallback(watchTutorial)
    }, 2000);
}

function washDishes(tutorialCallback){
    console.log("Start washing dishes");
    setTimeout(() => {
        console.log("Done with dishes")
        tutorialCallback(takeNap);
    }, 3000);
}

function watchTutorial(napCallBack){
    console.log("Start watching tutorial");
    setTimeout(() => {
        console.log("Done with tutorial")
        napCallBack();
    }, 5000);
}

function takeNap(){
    console.log("Start taking a nap");
    setTimeout(() => {
        console.log("Done with nap")
        console.log("\nEnd")
    }, 3000);
}


prepareMeal(prepareTea);





