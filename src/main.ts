
function greeter(person:string) {
    return "hello, " + person;
}

let user = "TypeScript User";

let innerHtml = greeter(user)

let decLiteral:number = 6
let hexLiteral:number = 0xf00d
let binaryLiteral:number = 0b0101
let octalIternal:number = 0o70


innerHtml += decLiteral + '\r\n 第二个： ' + hexLiteral + '第三个：' + binaryLiteral + '第四个：' + octalIternal;

//document.body.innerHTML = String.fromCharCode(decLiteral) + String.fromCharCode(hexLiteral) + 
//String.fromCharCode(binaryLiteral) + String.fromCharCode(octalIternal)

let _name:string = "bob"
_name = 'smith'

let na:string = `gene`
let age: number = 34
let sentence: string = `Hello, my name is ${na}.
I1 ll be ${age + 1} years old next month`;

console.log(sentence)

innerHtml += sentence;


let list:number[] = [1,2,3.4,5]
for(let i of list) 
{
    console.log("i = " + i )
}

let list1: Array<number> = [3,4.2,5]
for(let i of list1) {
    console.log("ii = " + i)
}
// Any
let notSure: any = 4
notSure = "maybe a string instead"
console.log(notSure + ' ### ' +  typeof notSure) 
notSure = false
console.log(notSure + ' ### ' +  typeof notSure) 
// notSure.ifItExists();   // 会在编译时不进行检查，如果
// 是Object则不同， 会在编码时就会检查， 如果方法不存在会报错误； 
// notSure.toFixed();

let prettySure:Object = 4
// prettySure.toFixed()

function warnUser() : void {
    alert("This is my warning message")
}

// let unusable : void = "abc"  // 一个void类型的变量只能给undefined 或 null
let usable : void = undefined
let usable1 : void = null
let unusable2 : string|null|undefined = "abc"
let unusable3 : any = 'abc'
// Never
function error(message:string):never{
    throw new Error(message)
}
function fail() {
    return error("somthing failed!")
}
function messagefail(message:string):never{
    throw new Error(message)
}
// 永远不会有返回的函数，返回值的类型为never
function infiniteLoop(): never{
    while(true){

    }
}
// 类型 转换
/**
 * ts是不进行特殊的数据检查， 和解构（封箱）
 * 对进行地没有影响， 只在编译时起作用， ts会假设你知道自己在做什么， 已经进行了必须的检查
 * 有二种形式， 一是“尖括号” 语法
 * 一是as 语法
 */
let someValue:any = "this is a string"
let strLength:number = (<string>someValue).length
let flat:number = 45.9
let flat_str:string = <string><any>flat + 'hello '
console.error("error info = " + flat_str)
function voidfun():void{
    alert("ok , void")
}
/**
 * 当ts里使用了jsx时， 只有as语法断言是被允许的
 */
let somv:any = "this is a string"
let strlength : number = (somv as string).length
let n:number = 6.5
let m:string = '8.9'

let lenstr:string = new String(n) + "长度" + new Number(m)
console.error("len err = " + lenstr)
// var 定义的变量只有二种作用域 关键是没有代码块级作用域； 
// 解构与展开
let i:number[] = [1,2]
let a1 = i[0]
let a2 = i[1]
innerHtml += "<br/>" + a1 + '' + a2;
 [a1, a2] = i;
innerHtml += "<br/>" + a1 + '' + a2;
// 解构也可以用在函数中
let iarry:Array<number> = [23,23];
function f([first, second]:Array<number>):void {
    console.log('first= ' + first)
    console.log('second = ' + second)
}
f(iarry);

let [first, ...rest] = [1,2,3,4]
console.error("first" + first)
console.error("rest = " + rest)
let [fir, second] = [2,3,4,5,9,30]// 这样会把后面的值会丢掉， 如果需要拿到后面一些值可以用...变量
console.error("fir = " + fir + '  second= ' + second)
let [ff, s, ...t] = [2,3,4,5,9,30]// 这样会把后面的值会丢掉， 如果需要拿到后面一些值可以用...变量
console.error("ff = " + ff + '  second= ' + s + '  t ' + t)
// 解构可以对数组， 也可以对对象进行。 
let o =  {
    a: 'foo',
    b: 12,
    c: 'bar',
    d: 'string'
}
let {a, b, ...d} = o // 将对象为的属性解构到ab,上, 注意， 这里需要注意了， 这是要与对象的name一一对应
console.error("a = "  +  a + '   b = ' + b +'  d = ' + JSON.stringify(d) )
let obj = {
    name: 'typsscript',
    age: 243,
    address: 'beijing',
    foot: 'footbar'
}
const {...lables} = obj
// 解构与展开 正好相反， 展开就是把多个数据或对象合成一个对象如
let o1 = {
    o0: '111',
    o2: '222'
}
let o2 = {
    o2: '333'
}
const o3 = {...o1, ...o2}
console.info("o3 = " + JSON.stringify(o3))
console.log(JSON.stringify(lables))

// 关键功能， ts里的map结构
let userInfo: {[idx: string]:any} = {} // 定义类map的ts变时结构, 需要注意， map结构key必须是string和number二种类型 
var userInfo1: {[index:number]: string} = {}
userInfo['name'] = 'afasdfasdf'
userInfo['age'] = 34
console.error("map = " + JSON.stringify(userInfo))

let tsMap: {[key:string]:any} = {} // 定义了一个map
// 接口
interface Food {
    name: string;
    calories: number;
}

var cpid = {
    name: 'adfasdf',
    calories: 'asdfasdf'
}

interface Person {
    name: string;
    age?: number;  // 这个是个可选 属性 
    gender:number
}
interface User{
    readonly loginName: string; // 这是一个只读属性, 作来接口的属性只能用readonly来修饰
    password: string;
}
const a1brend:string = 'chenhj'  /// 这里定义不可变的变时， 可以用const
// 类
class Greeter {
    greeting: string;
    constructor(message:string) {
        this.greeting = message
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter1: Greeter = new Greeter("TypeScript");
 innerHtml += greeter1.greet()
 innerHtml += greeter1.greet // 这个只是会返回类的定义

class Student {
    fullName: string;
    constructor( firstName:any,  middleName:any,  lastName:any) {
        this.fullName = firstName + ' ' + middleName  + ' ' + lastName
    }
}

interface Person {
    firstName: string;
    lastName : string;
}
function greeternew(person: Person) {
    return "Hello , " + person.firstName + ' ' + person.lastName;
}

let _user = new Student("Jone", "M", "User");
// innerHtml += greeternew(_user);

function genericFunc<T>(argument:T):T[]{
    var arrayOfT:T[] = []
    arrayOfT.push(argument)
    return arrayOfT
}
var arrayFromString = genericFunc<String>("Deep");
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0])

var arrayFromNumber = genericFunc<number>(45)
console.log(arrayFromNumber[0])
console.log(typeof arrayFromNumber[0])

let mapobj:{[key:string]:string} = {}

// import sayHi = require('./first')
import sayHi from './first'
import * as sm from './first'
import {saywork} from './first';

sayHi();
sm.saywork('hl');
sm.default();
saywork('woasdlfk');


namespace ns1 {
    class ca{
        constructor(){
            
        }
    }
    class cb {

    }
}

namespace ns2{
    class ca{

    }
    class cb{

    }
}

let ns_a = new ns1.ca();
let ns_b = new ns2.ca();

document.body.innerHTML = innerHtml;