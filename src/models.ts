export class LargeModel {
  constructor () {
    this.data = new Array(10e6).fill(0).map((_, i) => i)
  }
}

export class ExtraLargeModel {
  constructor () {
    this.data = new Array(10e6).fill(0).map((_, i) => i)
  }
}