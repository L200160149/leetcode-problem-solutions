function TreeConstructor(strArr) {
    let parents = {};
    let children = {};
    for (let i = 0; i < strArr.length; i++) {
        let [parent, child] = strArr[i].replace(/[\(\)]/g, '').split(',').map(Number);
        if (children[child]) return false;
        if (parents[parent]) {
            parents[parent]++;
        } else {
            parents[parent] = 1;
        }
        children[child] = true;
    }
    for (let key in parents) {
        if (parents[key] > 2) return false;
    }
    return true;
}