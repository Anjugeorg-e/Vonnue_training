console.log('Reuesting 1');
const pr = myFetch('https://jsonplaceholder.typicode.com.todos/1');

pr.then((data) => {
    console.log(data);

    console.log('Requesting 2');
    const pr = myFetch('https://jsonplaceholder.typicode.com/todos/2');

    pr.then((data) => {
        console.log(data);

        console.log('Requesting 3')
        const pr = myFetch('https://jsonplaceholder.typicode.com/todos/3')

        pr.then((data) => {
            console.log(data)
        })
    })
});