// /////////// Downloading File: Version 1
// axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => loadWithURL(response.data.title))
//
// function loadWithURL(content) {
//
//     const blob = new Blob([content])
//
//     const url = URL.createObjectURL(blob)
//
//     console.log(url)
//
//     const a = document.createElement("a")
//
//     a.href = url
//     a.download = ""
//     a.display = "none"
//     document.body.appendChild(a)
//
//     a.click()
//
//     a.remove()
//
//     URL.revokeObjectURL(url)
//
// }

// /////////// Downloading File: Version 1plus: Axios config for blob
// axios.get("https://jsonplaceholder.typicode.com/posts/1", {responseType: "blob"})
//     .then(response => loadWithURL(response.data))
//
// function loadWithURL(content) {
//
//     const blob = new Blob([content])
//
//     const url = URL.createObjectURL(content)
//
//     const a = document.createElement("a")
//
//     a.href = url
//     a.download = ""
//     a.display = "none"
//     document.body.appendChild(a)
//
//     a.click()
//
//     a.remove()
//
//     URL.revokeObjectURL(url)
//
// }

// /////////// Downloading File: Version 2
// axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => loadWithURL(response.data.title))
//
// function loadWithURL(content) {
//
//     const blob = new Blob([content])
//
//     const reader = new FileReader()
//
//     reader.readAsDataURL(blob)
//    
//     reader.onload = function (){
//        
//         let url = reader.result
//
//         console.log(url)
//
//         const a = document.createElement("a")
//
//         a.href = url
//         a.download = ""
//         a.display = "none"
//         document.body.appendChild(a)
//
//         a.click()
//
//         a.remove()
//        
//     }
//
// }

////////// FormData

// const form = document.querySelector('#form1')
//
// form.onsubmit = function (ev) {
//
//     ev.preventDefault()
//
//     const formData = new FormData(form)
//
//     formData.append("id", "1")
//
//     // formData.append("author", "Aram")
//
//     // formData.append("country", "Armenia")
//
//     for (let pair of formData.entries()) {
//         console.log(pair[0] + ": " + pair[1])
//
//     }
//
//     axios.put('https://jsonplaceholder.typicode.com/posts/1', formData)
//
// }


// ////////// Uploading File
//
// const inp10 = document.querySelector("#inp10")
//
// inp10.addEventListener("change", (ev) => {
//
//     const formData = new FormData ()
//
//     formData.append("file", ev.currentTarget.files[0])
//
//     axios.put('https://jsonplaceholder.typicode.com/posts/1', formData)
//
// for (let formDatum of formData) {
//     console.log(formDatum)
// }
//
// })

////////// Function Generator

// function* interrogate() {
//     let name = yield "What is your name?";
//     let color = yield "What is your favorite color?";
//     return `${name}'s favorite color is ${color}.`;
// }
//
// let it = interrogate()
// console.log(it.next())         // { value: "What is your name?", done: false }
// console.log(it.next('Ethan'))  // { value: "What is your favorite color?", done: false }
// console.log(it.next('orange')) // { value: "Ethan's favorite color is orange.", done:true }
//
// console.log([...it])


////////// Additional Question: Debounce


// document.getElementById('inp11').addEventListener('input', debounce(handleInput, 500));
//
// function handleInput(event) {
//     console.log(event.target.value);
// }
//
// function debounce(func, ms) {
//     let timerId
//     return function (...args) {
//         clearTimeout(timerId)
//         timerId=setTimeout(() => {
//             func.apply(this, args)
//         }, ms)
//     }
// }

// ///// without debounce
//
// document.getElementById('inp11').addEventListener('input', handleInput);
//
// function handleInput(event) {
//     console.log(event.target.value);
// }


////////// Additional Question: URL and URLSearchParams
// https://www.youtube.com/watch?v=ouuABmyc4PU

// console.log( window.location.search )

// const params = new URLSearchParams(window.location.search)

// console.log(params.toString())
//
// console.log(params.has("_ijt"))
//
// console.log(params.get("_ijt"))
// 
// params.set("_ijt", "coucou")

// params.append("someName", "someValue")

// console.log(params.toString())

//
// const HmwURL = "users?pageSize=3&pageNumber=2"
//
// const responseURL = "user" + "\u003F" + "pageSize=3" + "\u0026" + "pageNumber=2"
//
// console.log(responseURL)


// const myURL = new URL("http://localhost:63342/js-aleksey/index.html?_ijt=9r6d19tiq37ca45147p6s34j04&_ij_reload=RELOAD_ON_CHANGE")
//
// myURL.search+="&someName=someValue"
//
// console.log(myURL.search)



