//boolean
let test: boolean = false;
//numbers
let test1: number = 23;
//string
let test2: string = "String";
//array
let test4: Array<number> = [123, 444, 55];
//tuple
let test3: [string, number];
test3 = ["hello", 10]; // OK
//enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
//any
let notSure: any = 4;

console.log("Test for Boolean type is " + test);

console.log("Test for the Number type " + test1);

console.log("Test for the String type " + test2);

for (let index = 0; index < 3; index++) {
    console.log("Test for the Array type " + test4[index]);
    
}

console.log("Test for the Tuple type " + test3);

console.log("Test for the Enum type " + Color);
