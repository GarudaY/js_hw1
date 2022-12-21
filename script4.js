const cats = ["cat", "mama-cat", "papa-cat", "dog"]

function countCats(arr) {
    let count = 0
    for (i = 0; arr.length > i; i++) {
        if (arr[i].includes('cat')) {
            count++
        }
    }
    console.log(count)
}

countCats(cats)