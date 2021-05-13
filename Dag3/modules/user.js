export default class User {
    constructor(name) {
        this.name = name;
    }
}

export function greetUser(user) {
    console.log(`Hellow ${user.name}`);
}
