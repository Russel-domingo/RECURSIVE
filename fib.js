function fib(n) {

    if (n < 0) {
        return [];
    }

    if (n == 1) {
        return [0];
    }

    if (n == 2) {
        return [0,1];
    }

    const arr = [0,1];

    for (let i = 2; i < n; i++) {
        const next = arr[i - 1] + arr[i - 2];

        arr.push(next);
    } 
    return arr;
}

console.log(fib(8));