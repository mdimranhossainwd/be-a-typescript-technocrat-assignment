### 02. What is the use of the keyof keyword in TypeScript? Provide an example.

- TypeScript এ keyof হলো একটি keyword যা কোনো object type এর key এর type বের করতে ব্যবহার করা হয়। যখন এটি explicit key এর সাথে কোনো object type এ ব্যবহার করা হয়, তখন keyof সেই keys দিয়ে একটি union type তৈরি করে।

### Exmaple code

```ts
// Interface definition
interface User {
  id: number;
  name: string;
  email: string;
}

// keyof User creates a union type of keys: "id" | "name" | "email"
type UserKeys = keyof User;
```

### 03. Explain the difference between any, unknown, and never types in TypeScript.

- TypeScript এ any, unknown, এবং never তিনটি ভিন্ন ধরনের টাইপ যা আলাদা উদ্দেশ্যে ব্যবহৃত হয়। any টাইপ যে কোনো ধরনের মান রাখতে পারে কিন্তু টাইপ সেফটি দেয় না, ফলে runtime এ এরর ঘটার সম্ভাবনা থাকে। unknown ও একইভাবে যেকোনো মান রাখতে পারে, কিন্তু এর উপর কোনো অপারেশন করার আগে টাইপ চেক বা type assertion করা বাধ্যতামূলক, তাই এটি any এর তুলনায় নিরাপদ। অন্যদিকে, never টাইপ সেই মানের জন্য ব্যবহৃত হয় যা কখনো ঘটবে না, যেমন ফাংশন যা কখনো রিটার্ন করে না

- any Type Example Code :

```ts
type Data = any;

let value: Data = "hello";
value = 5;
value = undefined;
```

- union Type Example Code :

```ts
const handleUnknown = (value: unknown) => {
  if (typeof value === "string") {
    return `It is string ${value.toUpperCase()}`;
  }

  if (typeof value === "number") {
    return `It is number lpal${value * 2}`;
  }

  if (typeof value === "boolean") {
    return `It is boolean ${value ? "true" : "false"}`;
  }

  return "Unknown type received";
};

handleUnknown("hello");
handleUnknown(10);
handleUnknown(true);
handleUnknown({});
```

- never Type Example Code:

```ts
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong!");
```

### 05. Provide an example of using union and intersection types in TypeScript.

- Union এবং Intersection Type এর ব্যবহার খুবই সহজে বলা যায় যে, Union Type (|) হলো যেখানে একটি ভ্যারিয়েবলকে একাধিক টাইপের মধ্যে যেকোনো একটি মান নেওয়া যায়। অন্যদিকে, Intersection Type (&) হলো একাধিক টাইপের সব প্রোপার্টি একসাথে জুড়ে দিয়ে একটি নতুন ও বড় টাইপ তৈরি করে। এর ফলে, সেই নতুন টাইপের একটি ভ্যারিয়েবল তৈরি করতে হলে তাকে অবশ্যই সব টাইপের প্রত্যেকটি প্রোপার্টি দিতে হবে

### Exmaple code for Union

```ts
function printValue(value: string | number) {
  console.log(value);
}

printValue("Hello");
printValue(100);
```

### Exmaple code for Intersection

```ts
interface IPerson {
  name: string;
}

interface IEmployee {
  employeeId: number;
}

type JobHolder = IPerson & IEmployee;

const staffInfo: JobHolder = {
  name: "TS",
  employeeId: 101,
};

console.log(staffInfo);
```
