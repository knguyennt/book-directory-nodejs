

export const hasDuplicateValues = (arr, key, value) => {
    return arr.some(element => element[key] === value);
}