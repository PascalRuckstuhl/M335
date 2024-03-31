export class Quote {
  constructor(book, from, to, summary, imageUri) {
    this.id = new Date().toString + Math.random().toString;
    this.book = book;
    this.from = from;
    this.to = to;
    this.summary = summary;
    this.imageUri = imageUri;
  }
}
