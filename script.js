class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] >= this.heap[parentIndex]) break;
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let currentIndex = 0;
        let nextIndex = null;

        while (true) {
            const leftChildIndex = currentIndex * 2 + 1;
            const rightChildIndex = currentIndex * 2 + 2;
            nextIndex = null;

            if (leftChildIndex < this.heap.length) {
                if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
                    nextIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < this.heap.length) {
                if (this.heap[rightChildIndex] < this.heap[currentIndex] && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                    nextIndex = rightChildIndex;
                }
            }

            if (nextIndex === null) break;
            [this.heap[currentIndex], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[currentIndex]];
            currentIndex = nextIndex;
        }
    }
}


function mincost(arr)
{ 
//write your code here
// return the min cost
	const minHeap = new MinHeap();

    // Insert all ropes into the min heap
    for (let rope of arr) {
        minHeap.insert(rope);
    }

    let totalCost = 0;

    // Merge ropes until there's only one left
    while (minHeap.heap.length > 1) {
        const shortest1 = minHeap.remove();
        const shortest2 = minHeap.remove();
        const cost = shortest1 + shortest2;
        totalCost += cost;
        minHeap.insert(cost);
    }

    return totalCost;
	
}

module.exports=mincost;
