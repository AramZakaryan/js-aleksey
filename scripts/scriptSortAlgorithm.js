console.time("B")

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

console.timeEnd("B")

console.time("J")

/////////// JS sort method

let arr2 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];
arr2.sort()

console.timeEnd("J")

console.time("S")

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

console.timeEnd("S")

console.time("Q")

//////////  Quicksort Algorithm

let arr4 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];


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

    
console.timeEnd("Q")

console.time("M")

////////// Merge Sort

let arr5 = [15, 3, 8, 4, -20, 7, -12, 17, 2, 19, 10, 1, 6, 13, -18, 9, 11, 16, 5, 14];

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const merged = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}

mergeSort(arr5)

console.timeEnd("M")
