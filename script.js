function generateRandomList() {
    const MAX_SIZE_ARRAY = 25;
    const MIN_RANGE = 1;
    const MAX_RANGE = 100;

    let randomList = [];

    for (let i = 0; i < MAX_SIZE_ARRAY; i++) {
        let randomInteger = Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE + 1)) + MIN_RANGE;
        randomList.push(randomInteger);
    }

    document.getElementById("randomList").textContent = "Random List: " + randomList.join(", ");
}

function bubbleSort(arr) {
    let sorted;
    
    while(!sorted) {
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
    }

    return arr;
}

function sortList() {
    let randomList = document.getElementById("randomList").textContent;
    randomList = randomList.replace(/[^\d,]/g, "");
    randomList = randomList.split(",");
    randomList = randomList.map(Number);

    let sortedList = bubbleSort(randomList)

    document.getElementById("sortedList").textContent = "Sorted List: " + sortedList.join(", ");
}
