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

