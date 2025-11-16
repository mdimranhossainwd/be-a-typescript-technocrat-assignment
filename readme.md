### 01. What are some differences between interfaces and types in TypeScript ?

- Type এবং Interface হলো TypeScript-এর দুইটা প্রধান জিনিস, যা objects বা data structure বানাতে ব্যবহার হয়। দুটোই extend করা যায়, তবে interface এর একটি সুবিধা আছে, সেটি হলো declaration merging, যা type-এ সম্ভব নয়। Union এবং Intersection types শুধু type aliases-এ করা যায়, interface-এ নয়। Classes যেকোনোটির উপর implement করতে পারে, তাই দুটোর মধ্যেই flexibility আছে। সাধারণভাবে objects বানানোর জন্য interface ব্যবহার করা ভালো, আর unions, intersections বা primitive types handle করার জন্য type ব্যবহার করা উচিত। ভালো practice হলো interface ব্যবহার করা object shapes বা public APIs define করার জন্য, আর type ব্যবহার করা union, intersection বা primitive types এর জন্য।অনেক সময় developers type ব্যবহার করে যেখানে declaration merging দরকার, যা ভুল, আবার types অনেক জটিল বানানো বা update করতে ভুলে যাওয়াও common mistake। তাই types এবং interfaces সবসময় simple, clear এবং code update অনুসারে রাখা উচিত।

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

### 03. Provide an example of using union and intersection types in TypeScript.

- TypeScript-এর Union এবং Intersection types হলো শক্তিশালী concepts যা primitive, non-primitive, function, array, interface এবং generics-এর সঙ্গে কাজ করার সময় বিশেষভাবে দরকার হয়। Union type ব্যবহার করা হয় যখন একটি variable একাধিক type-এর মধ্যে যেকোনো একটির মান নিতে পারে। এটি তখন দরকার হয় যখন value বিভিন্ন ধরনের হতে পারে, API থেকে mixed type data আসে অথবা generic এবং reusable function তৈরি করতে হয়। Union type মূলত data variability handle করতে সাহায্য করে, ফলে একই variable বিভিন্ন পরিস্থিতিতে বিভিন্ন ধরনের value রাখতে সক্ষম হয়। অন্যদিকে, Intersection type ব্যবহার করা হয় যখন একটি variable বা object multiple types-এর সব property একসাথে রাখতে পারে। এটি দরকার হয় যখন multiple objects-এর property একসাথে দরকার হয়, complex objects তৈরি করতে হয় বা একাধিক interface combine করতে হয়। Intersection type মূলত type safety নিশ্চিত করে, কারণ variable-এর সব নির্ধারিত property অবশ্যই উপস্থিত থাকতে হবে। Union এবং Intersection একসাথে ব্যবহার করে flexible এবং safe data structures তৈরি করা যায়, যা বড় প্রজেক্টে, multi-role applications-এ বা reusable modules তৈরি করার সময় বিশেষভাবে উপকারী। এই দুই ধরনের type ব্যবহার করার মাধ্যমে TypeScript কোড আরও readable, maintainable এবং future-proof হয়।
