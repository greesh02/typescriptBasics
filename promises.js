// // on promise object creation the code inside it runs and waits till the fullfillmentreaction added through .then()
// let p1:Promise<string> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("completed async task1 :");
//         resolve("found")
//     },2000);
// });
// other tasks can be executed here 
//  below is basically like fetching the result post above async execution
// p1.then((res)=>{
//     // post task completion sucessfully here we can call the next task
//     console.log(res);
// })
function task1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("completed async task1 :" + data);
        }, time);
    });
}
function task2(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("completed async task2 :" + data);
        }, time);
    });
}
function task3(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("completed async task2 :" + data);
        }, time);
    });
}
// look at how clean it is and easy to understand
task1(4000, "1")
    .then((res) => {
    // post task completion sucessfully here we can call the next task
    console.log(res);
    return task2(4000, "1"); // returns a promise object
},(err)=>{
    //if error occurs this func called--> Reject() called
    console.log(err);
})
    .then((res) => {
    console.log(res);
});
task1(2000, "3")
    .then((res) => {
    // post task completion sucessfully here we can call the next task
    console.log(res);
    return task2(2000, "3"); // returns a promise object
})
    .then((res) => {
    console.log(res);
    return res;
});
task1(4, "2")
    .then((res) => {
    // post task completion sucessfully here we can call the next task
    console.log(res);
    return task2(4, "2"); // returns a promise object
})
    .then((res) => {
    console.log(res);
});
// another way
let p2 = task1(800, "4")
    .then((res) => {
    // post task completion sucessfully here we can call the next task
    console.log(res);
    return task2(800, "4"); // returns a promise object
});
// some lines of code
p2.then((res) => {
    console.log(res);
});
// gives error coz --> reject called and rejectreaction not provided
task3(4000, "1")
    .then((res) => console.log(res));
//# sourceMappingURL=promises.js.map