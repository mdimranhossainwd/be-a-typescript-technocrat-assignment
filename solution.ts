function formatValue(
  value: string | number | boolean
): string | number | boolean | undefined {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}

function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name} , Age: ${this.age}'`;
  }
}

function filterByRating(booksData: { title: string; rating: number }[]): {
  title: string;
  rating: number;
}[] {
  return booksData.filter((book) => book.rating >= 4);
}

function filterActiveUsers(
  usersData: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  return usersData.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues<T>(arr1: T[], arr2: T[]): T[] {
  const uniqueArray: T[] = [];
  const mergeArray = [...arr1, ...arr2];

  for (const element of mergeArray) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  const totalProduct = products.map((product) => {
    const { price, quantity, discount } = product;
    const total = price * quantity;
    if (discount) {
      return total - (total * discount) / 100;
    }
    return total;
  });
  const totalPrice = totalProduct.reduce((acc, curr) => acc + curr, 0);
  return totalPrice;
}
