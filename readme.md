### 01. What are some differences between interfaces and types in TypeScript ?

- Type এবং Interface হলো TypeScript-এর দুইটা প্রধান জিনিস, যা objects বা data structure বানাতে ব্যবহার হয়। দুটোই extend করা যায়, তবে interface এর একটি সুবিধা আছে, সেটি হলো declaration merging, যা type-এ সম্ভব নয়। Union এবং Intersection types শুধু type aliases-এ করা যায়, interface-এ নয়। Classes যেকোনোটির উপর implement করতে পারে, তাই দুটোর মধ্যেই flexibility আছে। সাধারণভাবে objects বানানোর জন্য interface ব্যবহার করা ভালো, আর unions, intersections বা primitive types handle করার জন্য type ব্যবহার করা উচিত। ভালো practice হলো interface ব্যবহার করা object shapes বা public APIs define করার জন্য, আর type ব্যবহার করা union, intersection বা primitive types এর জন্য।

### 02. What is the use of the keyof keyword in TypeScript? Provide an example.

- TypeScript-এ keyof হলো একটি keyword যা কোনো object type-এর key-এর type বের করতে ব্যবহার করা হয়। যখন এটি explicit key-এর সাথে কোনো object type-এ ব্যবহার করা হয়, তখন keyof সেই keys দিয়ে একটি union type তৈরি করে।

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

### 04. Provide an example of using union and intersection types in TypeScript.

- TypeScript-এর Union এবং Intersection types হলো শক্তিশালী concepts যা primitive, non-primitive, function, array, interface এবং generics এর সঙ্গে কাজ করার সময় দরকার হয়। Union type ব্যবহার করা হয় যখন একটি variable একাধিক type এর মধ্যে যেকোনো একটির মান নিতে পারে। এটি তখন দরকার হয় যখন value বিভিন্ন ধরনের হতে পারে, API থেকে mixed type data আসে অথবা generic তৈরি করতে হয়। অন্যদিকে, Intersection type ব্যবহার করা হয় যখন একটি variable বা object multiple types এর সব property একসাথে রাখতে পারে। এটি দরকার হয় যখন multiple objects এর property একসাথে দরকার হয়, complex objects তৈরি করতে হয় বা একাধিক interface combine করতে হয়। Intersection type মূলত type safety নিশ্চিত করে, কারণ variable এর সব নির্ধারিত property অবশ্যই উপস্থিত থাকতে হবে।

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

type JobHolder = IPerso & IEmployee;

const staffInfo: JobHolder = {
  name: "TS",
  employeeId: 101,
};

console.log(staffInfo);
```
