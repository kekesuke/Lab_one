//boolean
var test = false;
//numbers
var test1 = 23;
//string
var test2 = "String";
//array
var test4 = [123, 444, 55];
//tuple
var test3;
test3 = ["hello", 10]; // OK
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//any
var notSure = 4;
console.log("Test for Boolean type is " + test);
console.log("Test for the Number type " + test1);
console.log("Test for the String type " + test2);
for (var index = 0; index < 3; index++) {
    console.log("Test for the Array type " + test4[index]);
}
console.log("Test for the Tuple type " + test3);
console.log("Test for the Enum type " + Color);
