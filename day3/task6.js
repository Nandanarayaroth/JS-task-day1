
function getQueue() {
    let queue = []

    return{
        enqueue(inn) {
            queue.push(inn)
            return queue
        },
        dequeue() {
            if(queue.length === 0){
                return "queue is empty"
            }
            else{
               return queue.pop
            }
        },
        peek() {
            return queue[0]
        },
        isEmpty() {
            if(queue.length === 0) {
                return true
            }
        }
    }
}

const myQueue = getQueue()
myQueue.enqueue('1')