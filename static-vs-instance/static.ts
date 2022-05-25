export class Phone {
  constructor(public model: string) { }

  public addAreaPrefix(number: number, country: string): string {
    switch(country) {
      case "USA":
        return "+1" + number
      case "France":
        return "+33" + number
      default:
        throw new Error("Country not supported")
    }
  }
}