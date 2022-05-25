export class Person {
  name: string;
  age: number;

  greet() {
    return "Hello"
  }
}

class Student extends Person {
  constructor(
    public name: string,
    public age: number
  ) {
    super();
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
    super();
  }
}