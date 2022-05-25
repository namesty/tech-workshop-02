export class Animal {
  static type: string;
  public type: string;

  constructor(type: string) {
    this.type = type
  }

  static changeType(type: string) {
    this.type = type
  }

  public changeType(type: string) {
    this.type = type
  }
}

const particularAnimal = new Animal("mammal")

particularAnimal.type // mammal
Animal.type // undefined

Animal.changeType("fish")

particularAnimal.type // mammal
Animal.type // fish

particularAnimal.changeType("fish")

particularAnimal.type // fish
Animal.type // fish