

 class hashMap{
    constructor(){
        this.loadFactor = .75;
        this.capacity = 16;
        this.array = []
        this.entries = 0;
    }

    // creates the index of where the key value pair is stored
    hash(key) {
    let hashCode = 0;
    // const array = []
    // console.log(key)

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i) ) % this.capacity;
        // array.push(hashCode)
        }

    return hashCode;
    } 

    set(key, value){
        // create array
        const index = this.hash(key);

        const newNode = new node(key, value, index)

        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] != undefined){
                let current = this.array[i]
                while(current != null){
                    if(current.key === key){
                        current.value = value;
                        return
                    }
                    current = current.nextNode
                }
            }
        }



        // if(this.capacity * this.loadFactor < this.entries){
        // }


        // console.log(`${this.capacity * this.loadFactor}, ${this.entries}`)

        if(index < 0 || index >= this.capacity){
            throw new Error('Trying to access an index out of bounds')
        }

        if(this.array[index] == null || this.array[index] === undefined){
            this.entries += 1
            this.array[index] = newNode;
        } else {
            let current = this.array[index];

            while(current.nextNode != null){
                current = current.nextNode

            }

            this.entries += 1
            current.nextNode = newNode
            newNode.previous = current;


            if(this.capacity * this.loadFactor < this.entries){
                // // store information from the array
                const data = this.getEntries()
                // // delete the array 
                this.array = [];
                // // update capacity
                this.capacity *= 2;
                this.entries = 0
                // distribute data back into the array
                for(let i = 0; i < data.length; i++){
                    // create new node for each key value pair
                    const key = data[i][0]
                    const value = data[i][1]
                    this.set(key, value)
                    // const hashKey = this.hash

                }

                // // add that data back to the array

                // // add new node


                // return


            }



            
        }


    
        
    }


    get(key){
        const index = this.hash(key);

        let current = this.array[index];

        while(current != null){
            if(current.key === key){
                return current.value;
            }
            current = current.nextNode
        }
        return null
    }   


    has(key){
        const index = this.hash(key)

        let current = this.array[index];

        while(current != null){
            if(current.key === key){
                return true
            }
        }
        return false;

    }


    remove(key){
        const index = this.hash(key)

        let current = this.array[index];
        let previous = current.previous;
        let next = current.nextNode;
        // for(let i = 0; i < this.array.length; i++){
        //     if(this.array[i].key === key){
        //         // set 
        //     }
        // }
        if(current.key === key){
            this.array[index] = current.nextNode;
            this.entries -= 1;
            return true;
        }
        while(current != null){
            if(current.key === key){
                // previous.nextNode = next;
                if(current.nextNode != null){
                    next.previous = previous;
                } 
                current.nextNode = null;
                current.previous = null;
                this.entries -= 1;
                return true 

            }
            current = current.nextNode
        }

        return false;
    }

    length(){
        return this.entries;
    }

    clear(){
        this.array.length = 0
    }

    keys(){
        const keys = []

        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] != undefined){
                let current = this.array[i];
                while(current != null){
                    keys.push(current.key)
                    current = current.nextNode
                }
            }
        }

        return keys
    }

    values(){
        const valueArr = [];

        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] != undefined){
                let current = this.array[i];
                while(current != null){
                    valueArr.push(current.value)
                    current = current.nextNode
                }
            }
        }

        return valueArr
    }

    getEntries(){
        const entriesArr = [];
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] != undefined){
                let current = this.array[i];
                while(current != null){
                    entriesArr.push([current.key, current.value])
                    current = current.nextNode;
                }
            }
        }
        return entriesArr;
    }


}

class node{
    constructor(key, value, hash){
        this.key = key;
        this.value = value;
        this.hash = hash;
        this.previous = null;
        this.nextNode = null;
    }
}


const test = new hashMap

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


test.set('apple', 'green')
test.set('jacket', 'denim')
test.set('dog', 'black')
test.set('moon', 'silver')
console.log(test.getEntries())

console.log(test.entries)
console.log(test.capacity)




test.set('moon', 'gray')
console.log(test.getEntries())
console.log(test.get('moon'))
console.log(test.has('moon'))
console.log(test.remove('moon'))
console.log(test.length())
// console.log(test.clear())
console.log(test.keys())
console.log(test.values())
console.log(test.keys())
console.log(test.getEntries())

