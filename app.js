
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

function loadMessages() {
            // Очищаем текущее содержимое div перед загрузкой новых сообщений
            messageDiv.innerHTML = "";

            // Получаем все сообщения из localStorage
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.startsWith('message')) {
                    let message = localStorage.getItem(key);
                    const messageElement = document.createElement('div');
                    messageElement.classList.add('message');
                    messageElement.textContent = message;
                    messageDiv.appendChild(messageElement);
                }
            }

            // Прокручиваем div до самого низа
            messageDiv.scrollTop = messageDiv.scrollHeight;
        }

        // Функция для добавления нового сообщения
        function addMessage() {
            let a = input.value;
            if (a.trim() === "") return; // Если поле пустое, ничего не добавляем

            // Получаем текущий индекс из localStorage или начинаем с 0
            let messageIndex = localStorage.getItem('messageIndex') || 0;

            // Сохраняем новое сообщение в localStorage с уникальным ключом
            localStorage.setItem('message' + messageIndex, a);

            // Увеличиваем индекс и сохраняем его для следующего сообщения
            messageIndex++;
            localStorage.setItem('messageIndex', messageIndex);

            // Очищаем поле ввода
            input.value = "";

            // Перезагружаем сообщения
            loadMessages();
        }

        // Загружаем сообщения при загрузке страницы
        loadMessages();

        // Слушатель события для кнопки "Отправить"
        send.addEventListener('click', addMessage);
