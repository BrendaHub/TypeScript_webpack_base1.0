function greeter(person:string) {
    return "hello, " + person;
}

let user = "TypeScript User";

document.body.innerHTML = greeter(user);