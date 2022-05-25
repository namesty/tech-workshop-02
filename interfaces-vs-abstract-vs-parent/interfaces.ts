export interface Person {
  name: string;
  age: number;

  greet(): string;
}

class Student implements Person {
  constructor(
    public name: string,
    public age: number
  ) { }

  greet(): string {
    return "Hi!"
  }
}

class Teacher implements Person {
  constructor(
    public name: string,
    public age: number
  ) { }

  greet(): string {
    return "Hello"
  }
}