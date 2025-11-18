function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    throw new Error("Invalid input type for formatValue");
  }
}

function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Value must be a string or an array");
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(booksData: { title: string; rating: number }[]): {
  title: string;
  rating: number;
}[] {
  booksData.forEach((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(`Rating must be between 0-5. You gave ${item.rating}`);
    }
  });
  return booksData
    .filter((book) => book.rating >= 4)
    .map((book) => ({
      ...book,
      rating: Number(book.rating.toFixed(1)),
    }));
}

function filterActiveUsers(
  usersData: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  return usersData.filter((user) => user.isActive);
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

function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Inputs must be arrays");
  }

  const uniqueArray: T[] = [];
  function addToValue(value: T) {
    for (let i in uniqueArray) {
      if (uniqueArray[i] === value) return;
    }
    uniqueArray.push(value);
  }
  for (let i in arr1) addToValue(arr1[i]);
  for (let i in arr2) addToValue(arr2[i]);

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
  if (products.length === 0) return 0;
  const totalProduct = products.map((product) => {
    const { price, quantity, discount } = product;
    const total = price * quantity;
    if (discount === undefined) {
      return total;
    }
    if (discount < 0 || discount > 100) {
      throw new Error(
        `Discount price will be given to (0-100) you can given ${discount}`
      );
    }
    return total - (total * discount) / 100;
  });
  const totalPrice = totalProduct.reduce((acc, curr) => acc + curr, 0);
  return totalPrice;
}
