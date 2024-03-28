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


// for del


console.time("1")

let arr1 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];
for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        if (arr1[j] > arr1[j + 1]) {
            const temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
        }
    }


}
// console.log(arr1);

console.timeEnd("1")

console.time("2")

let arr2 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];
arr2.sort()

// console.log(arr2);

console.timeEnd("2")

console.time("3")

////////// Selection Sort Algorithm

let arr3 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];

const len = arr3.length;
for (let i = 0; i < len - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < len; j++) {
        if (arr3[j] > arr3[maxIndex]) {
            maxIndex = j;
        }
    }

    if (maxIndex !== i) {
        [arr3[i], arr3[maxIndex]] = [arr3[maxIndex], arr3[i]];
    }
}

console.timeEnd("3")

console.time("4")

//////////  quicksort algorithm

let arr4 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];

function quicksort(arr4) {
    if (arr4.length <= 1) {
        return arr4;
    }

    const pivot = arr4[Math.floor(arr4.length / 2)];
    const lesser = [];
    const greater = [];

    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] < pivot) {
            lesser.push(arr4[i]);
        } else if (arr4[i] > pivot) {
            greater.push(arr4[i]);
        }
    }

    return [...quicksort(lesser), pivot, ...quicksort(greater)];
}

console.timeEnd("4")

