function generateRandomList() {
    const numberOfIntegers = 25;
    const minRange = 1;
    const maxRange = 100;

    let randomList = [];

    for (let i = 0; i < numberOfIntegers; i++) {
        let randomInteger = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
        randomList.push(randomInteger);
    }

    document.getElementById("randomList").textContent = "Random List: " + randomList.join(", ");
}

function bubbleSort(arr) {
    let sorted;
    
    do {
        sorted = true
        for (let i = 0; i < arr.length ; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
            }
        }

        for (let i = 0; i < arr.length ; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    } while (!sorted);

    return arr;
}

function sortList() {
    let randomList = document.getElementById("randomList").textContent;
    randomList = randomList.split(", ");
    randomList = randomList.map(Number);

    let sortedList = bubbleSort(randomList)

    document.getElementById("sortedList").textContent = "Sorted List: " + randomList.join(", ");
}
