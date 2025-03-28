
// // const myNumber = 42 

// // localStorage.setItem('number', myNumber)

// // console.log(localStorage.getItem('number'));

// // // localStorage.removeItem('number')

// // localStorage.removeItem('Number')

// // localStorage.clear()

// let  object = {
//     name:'Max',
//     age:20
// }

// // localStorage.setItem('people', JSON.stringify(object))

// const  raw = localStorage.getItem('people')

// raw.name = 'Akshin'
// console.log(raw);


const send = document.querySelector(".send-btn")
const input = document.querySelector(".input")

const messageDiv = document.querySelector(".message-div")

// function add() {
//     let a = input.value
//     messageDiv.innerHTML += `
//         <div class="message">${a}</div>
//         `
//     input.textContent = "xzv"
//     let b = []
//     // function bb() {
//     //     b.push(input.value)
//     //     console.log(b); 
//     //       input.textContent = "xzv"
//     // }

//     // bb()

//     for (let i = 0; i < 5; i++) {
//         // const element = array[i];
    
//         localStorage.setItem('message' + i++  , a)
//         console.log(localStorage.getItem('message'));
        
//     }

//     // localStorage.setItem('message'  , a)
//     // console.log(localStorage.getItem('message'));
// }
// localStorage.clear()
// send.addEventListener("click", add)

function add() {
    let a = input.value;
    messageDiv.innerHTML += `
        <div class="message">${a}</div>
    `;
    
    input.value = "";

    let messageIndex = localStorage.getItem('messageIndex') || 0;

    localStorage.setItem('message' + messageIndex, a);
    messageIndex++;
    localStorage.setItem('messageIndex', messageIndex);


    console.log(localStorage);
}

// localStorage.clear();     // Очистка localStorage при загрузке страницы (для примера)
send.addEventListener("click", add);