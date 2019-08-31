// requireJS node.js CommonJS
// export class MyModuleClass {

// }

// export default function sayHi():void {
//     console.log('Hello')
// }

var sayHi = function():void{
    console.log("hello, value");
}
export default sayHi;

export function saywork(pr:string):void{
    console.log("hello , " + pr)
}