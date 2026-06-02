function fibRec(n) {

    if (n == 0) {
        return [];
    }

    if (n == 1) {
        return [0];
    }

    if (n == 2) {
        return [0, 1];
    }

    const prev = fibRec(n - 1);
    return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

console.log(fibRec(5));