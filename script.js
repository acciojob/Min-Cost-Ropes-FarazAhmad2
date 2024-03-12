function mincost(arr)
{ 
//write your code here
// return the min cost
	const heapify = (array) => {
        for (let i = Math.floor(array.length / 2); i >= 0; i--) {
            heapifyDown(array, i);
        }
    };

    const heapifyDown = (array, i) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;

        if (left < array.length && array[left] < array[smallest]) {
            smallest = left;
        }

        if (right < array.length && array[right] < array[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [array[i], array[smallest]] = [array[smallest], array[i]];
            heapifyDown(array, smallest);
        }
    };

    heapify(arr);

    let totalCost = 0;

    while (arr.length > 1) {
        // Extract the two shortest ropes
        const shortest1 = arr.shift();
        const shortest2 = arr.shift();

        // Calculate the cost of merging them
        const cost = shortest1 + shortest2;

        // Add the cost to the total
        totalCost += cost;

        // Insert the merged rope back into the heap
        arr.push(cost);
        heapify(arr);
    }

    return totalCost;

  
}

module.exports=mincost;
