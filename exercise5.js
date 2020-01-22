function countCharacters(word) {
    return word.length;
}
function countCharWithoutSpace(word) {
    var removedSpace = word.split(" ").length - 1;
    return word.length - removedSpace;
}
function withSpaceOrWithout(word, choose) {
    if (choose) {
        return word.length;
    }
    else if (choose == false) {
        var removedSpace = word.split(" ").length - 1;
        return word.length - removedSpace;
    }
}
console.log("Exercise 4 point A: " + countCharacters("test 1"));
console.log("Exercise 4 point B: " + countCharWithoutSpace("test 1 bla"));
console.log("Exercise 4 point C: boolean set to true" + withSpaceOrWithout("test 1 bla", true));
console.log("Exercise 4 point C: boolean set to false" + withSpaceOrWithout("test 1 bla", false));
console.log("Exercise 4 point C: without using boolean parameters" + withSpaceOrWithout("test 1 bla", false));
