interface BigNum {
  toString(): string
}

export class BigNumber implements BigNum {
  constructor(private num: number) { }

  toString() {
    return this.num.toString()
  }
}

export class BN implements BigNum {
  constructor(protected num: string) { }

  toString() {
    return this.num
  }
}

class Manager<T> {
  number: T

  getNumber(): T {
    return this.number
  }
}