// formatValue input based value

function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

// getLength form value to converted their length
function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

console.log(getLength("type script"));
console.log(getLength([10, 20, 30, 40]));

// GetDetails for a person to converted string
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name} , Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());

// Filtering by Product data -> rating
type Product = {
  title: string;
  rating: number;
};

function filterByRating(booksData: Product[]): Product[] {
  return booksData.filter((book) => book.rating >= 4);
}

const books: Product[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

// filterActiveUsers by isActive property
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(usersData: User[]): User[] {
  return usersData.filter((user) => user.isActive);
}

const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: false },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: false },
];

console.log(filterActiveUsers(users));

// printBookDetails function to return book all info
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

console.log(printBookDetails(myBook));

// calculateTotalPrice to product price and discount
function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  return products.reduce((acc, { price, quantity, discount }) => {
    const productAmount = price * quantity;
    const finalTotal = discount
      ? productAmount * (1 - discount / 100)
      : productAmount;

    return acc + finalTotal;
  }, 0);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
