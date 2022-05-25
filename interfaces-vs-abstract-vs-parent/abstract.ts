export abstract class Person {
  name: string;
  age: number;

  abstract greet(): string;
}

class Student extends Person {
  constructor(
    public name: string,
    public age: number
  ) {
    super()
  }

  greet(): string {
    return "Hi!"
  }
}

class Teacher extends Person {
  constructor(
    public name: string,
    public age: number
  ) {
    super()
  }

  greet(): string {
    return "Hello"
  }
}