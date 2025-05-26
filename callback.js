function task(time, data) {
    // callback hell
    setTimeout(() => {
        console.log("completed async task1 :" + data);
        setTimeout(() => {
            console.log("completed async task2 :" + data);
            setTimeout(() => {
                console.log("completed async task3 :" + data);
            }, time);
        }, time);
    }, time);
}
task(4000, "1");
//# sourceMappingURL=callback.js.map