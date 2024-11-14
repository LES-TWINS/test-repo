

                    //   DOM Document Object Module



//  let user = {
//      name : 'odajsodas'
//  } 

// let text = document.querySelector('p');
// console.log(text);

// let heading = document.querySelector('.heading');
// console.log(heading);

// let btn = document.querySelector('#btn');
// console.log(btn);

// let allText = document.querySelectorAll('h3'); // nodelist მასივი
// console.log(allText);   

// for(let i = 0; i < allText.length; i++){

//     console.log(allText[i]);

// }


// let text = document.querySelector('h5');

// text.innerText = 'hello world';


// let heading6 = document.querySelector('h6');
// console.log(heading6.innerText);


// let box = document.querySelector('div');
// // box.innerText = '<p> hello </p>';
// box.innerHTML = '<p> hello </p>';


// let para = document.querySelector('p');
// para.style.backgroundColor = 'red';
// // para.style.fontSize = '40px';


// let btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     // console.log('hello');
//     para.style.backgroundColor = 'red';
// })



// შექმენით ღილაკი და პარაგრაფი,ღილაკზე დაჭერის დროს პარაგრაფს მიანიჭეთ 
// რენდომული rgb ფერები


let btn = document.querySelector('button');
let para = document.querySelector('p');


function getRandRgb(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`
    return rgb
}


btn.addEventListener('click',function(){
    para.style.backgroundColor = getRandRgb();
})



შექმენით 10 ღილაკი html-ში შემდეგ ჯავასკრიპტიდან მიანიჭეთ ღილაკებს
რენდომული რიცხვითი მნიშვნელობები. თითოეულ ღილაკზე დაჭერის დროს
გამოვიდეს ალერტი სადაც დაწერს რიცხვს რამდენი გამყოფი აქვს
