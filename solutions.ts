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
