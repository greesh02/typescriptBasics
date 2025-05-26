var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function t1(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1); // task1 result
        }, time);
    });
}
function t2(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("completed async task2 :" + data);
        }, time);
    });
}
function t3(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const v = true;
            if (v) {
                resolve("completed async task2 :" + data);
            }
            else {
                reject("ERRORRRRRRRRRR");
            }
        }, time);
    });
}
//  executing async functions synchronously using .then()
t1(4000)
    .then((res) => {
    console.log(res, "1");
    return t2(2000, "2");
})
    .then((res) => {
    console.log(res);
    return t3(4, "3");
})
    .then((res) => {
    console.log(res);
}, (error) => {
    // handling when reject called --> if not provided put the code in try catch block
    console.log(error);
});
console.log("printed 1st");
// same code as above using async await
function flow() {
    return __awaiter(this, void 0, void 0, function* () {
        const resT1 = yield t1(4000); // the promise result added in resolve() is returned
        console.log(resT1);
        const resT2 = yield t2(2000, "2");
        console.log(resT2);
        const resT3 = yield t3(4, "3");
        console.log(resT3);
    });
}
flow();
console.log("printed 2nd");
//# sourceMappingURL=asyncawait.js.map