const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');  
        reject('oops! Error!');
    }, 5000);
    
});

console.log("before");

promise.then((data) => {
    console.log('1', data);
}).catch((e) => {
    console.log("error:", e);
});

console.log("after");