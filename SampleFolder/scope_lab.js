// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
//console.log(blockVar);//You will see output for blockVar, because it can be accessed outside the curly brackets {}. But you will see 
//console.log(blockLet);//ReferenceError for blockLet because it cannot be accessed outside the curly brackets due to which it is known as block 
//scoped variables. Such variables can only be accessed within curly brackets. You will see the same error for const as well.

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError I think var can be accessed outside {} but not outside functions
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError