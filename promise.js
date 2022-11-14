/**
 * Prepare meal (5s)
 * Make tea (2s)
 * Wash dishes (3s)
 * Watch tutorial (5s)
 * Take a nap (3s)
 */

console.clear();

console.log("Start\n");


function prepareMealPromise(mealMood) {

    const promise1 = new Promise((resolver, reject) => {
        console.log("Start preparing meal");
        setTimeout(() => {
            // console.log("Food is ready");
            if(mealMood){
                resolver("Food is ready");
            }
            else{
                reject("Food is not ready");
            }
        }, 5000);
    })

    return promise1;
}

function prepareTeaPromise(mood){
    const promise2 = new Promise((resolver, reject) => {
        console.log("Start preparing Tea");
        setTimeout(() => {
            if(mood){
                resolver("Tea is ready")
            }
            else {
                reject("Tea is not ready")
            }
        }, 2000);
    })
    return promise2
}

function washDishesPromise(mood){
    const promise3 = new Promise((res, rej) => {
        console.log("Start washing dishes");
        setTimeout(() => {
            if(mood){
                res("Done with dishes")
            }
            else{
                rej("Don't want to do dishes")
            }
        }, 3000);
    })
    return promise3;

}

function watchTutorialPromise(){
    const promise4 = new Promise((res, rej) => {
        console.log("Start watching tutorial");
        setTimeout(() => {
            res("Done with tutorial")
        }, 5000);
    })
    return promise4;
}

function takeNapPromise(){
    const promise5 = new Promise((res, rej) => {
        console.log("Start taking a nap");
        setTimeout(() => {
            res("Done with nap")
        }, 3000);
    })
    return promise5;
}

const mealMood = true;
const teaMood = true;
const washingMood = true;

prepareMealPromise(mealMood)
    .then((val1) => {
        console.log("val1: ", val1);
        return prepareTeaPromise(teaMood);
    })
    .then((val2) => {
        console.log("val2", val2);
        return washDishesPromise(washingMood);
    })
    .then((val3) => {
        console.log("val3: ", val3);
        return watchTutorialPromise()
    })
    .then((val4) => {
        console.log("val4: ", val4);
        return takeNapPromise();
    })
    .then((val5) => {
        console.log("val5: ", val5);
        console.log("\nEnd")
    })
    .catch((error) => {
        console.log("error: ", error);
    })





