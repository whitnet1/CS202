// template strings
let author = 'Theo';
let books = 'Blog website';
let likes = '30';

// concatenation way
//let result = author +' is the author of ' + books + ' and has ' + likes + ' likes.';
//console.log(result);

// template string way

let result = `${author} is the author of ${book} and it has ${likes} likes`

// creating html templates
let html = `
    <h2>${author}</h2>
    <p>is the author of ${book} and it has</p>
    <p>${likes}</p>
`;

console.log(html);