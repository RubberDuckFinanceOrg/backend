interface Pair {
    [value: string]: string
}

interface InsertValue extends Pair {
    id: string;
}



function generateSeeds(arr: string[], dbKey: string): { id: string;[value: string]: string }[] {
    let insertValue: InsertValue[] = [];
    for (let index in arr) {
        let pair: Pair = {};
        pair[dbKey] = arr[index];
        let value: InsertValue = { id: index, ...pair };
        insertValue.push(value);
    }
    return insertValue;
}

export = generateSeeds
