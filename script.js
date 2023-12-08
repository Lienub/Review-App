/**
 * Generates a random list of integers within a specified range, updates the HTML document with the random list,
 * and displays the generated list in a designated element.
 *
 * @returns {void}
 *
 * @example
 * // HTML structure:
 * // <div id="randomList"></div>
 *
 * // JavaScript usage:
 * generateRandomList();
 */
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

/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array in ascending order.
 *
 * @example
 * const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
 * const sortedArray = bubbleSort(unsortedArray);
 * console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
 */
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

/**
 * Retrieves a list from the HTML document, converts it to an array of numbers,
 * sorts the array using the Bubble Sort algorithm, and updates the sorted list in the HTML document.
 *
 * @returns {void}
 *
 * @example
 * // HTML structure:
 * // <div id="randomList">5, 3, 8, 1, 4</div>
 * // <div id="sortedList"></div>
 *
 * // JavaScript usage:
 * sortList();
 */
function sortList() {
    let randomList = document.getElementById("randomList").textContent;
    randomList = randomList.replace(/[^\d,]/g, "");
    randomList = randomList.split(",");
    randomList = randomList.map(Number);

    let sortedList = bubbleSort(randomList)

    document.getElementById("sortedList").textContent = "Sorted List: " + sortedList.join(", ");
}
