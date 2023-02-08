export class CustomError extends Error {
  constructor(data) {
    super();
    this.data = data;
  }
}
