function t1(time:number):Promise<number>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1); // task1 result
        },time);
    });
}

function t2(time:number,data:string):Promise<string>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("completed async task2 :"+data);
        },time);
    });
}


function t3(time:number,data:string):Promise<string>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const v = true;
            if(v){
                resolve("completed async task2 :"+data);
            }
            else{
                reject("ERRORRRRRRRRRR")
            }
        },time);
    });
}

//  executing async functions synchronously using .then()
t1(4000)
    .then((res:number)=>{
        console.log(res,"1");
        return t2(2000,"2");
    })
    .then((res:string) =>{
        console.log(res);
        return t3(4,"3");
    })
    .then((res:string)=>{
        console.log(res);
    },(error)=>{
        // handling when reject called --> if not provided put the code in try catch block
        console.log(error);
    })

console.log("printed 1st")
// same code as above using async await
async function flow(){

    const resT1:number = await t1(4000); // the promise result added in resolve() is returned
    console.log(resT1);
    const resT2:string = await t2(2000,"2");
    console.log(resT2);
    const resT3:string = await t3(4,"3");
    console.log(resT3);
}

let p1:Promise<void> = flow();
p1.then();
console.log("printed 2nd");