const url = 'https://learnwebcode.github.io/json-example/animals-1.json';

// const results = fetch(url);

// console.log(results)

// function convertTo(results){
//     if(results.ok){
//         return results.json();
//     }
// }

// const results = fetch(url).then(convertToJS);

// console.log(results);


fetch(url).then((result)=> {
    if(result.ok){
        return result.json();
    } else {
        alert('Data not here');
    }
})
.then((data)=> {
    let h1 =document.querySelector('h1');
    h1.textContent = (data[1].name);
    console.log
});






