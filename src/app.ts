function reverse<T>(arr: readonly T[]): T[] {
  return [...arr].reverse();
}

class A {
  private a = 3;
}

const aInstance = new A();

// type User = { firstname: string; lastname: string };
// type DateString = string;
// type Id = string | number;
// type Identity<ArgType> = (arg: ArgType) => ArgType;
// type P = keyof User;
// type Username = User["firstname"];

// const user1 = {
//   firstname: "John",
//   lastname: "Doe",
//   age: "32",
// };

// type User1 = typeof user

// function identity<ArgType>(arg: ArgType): ArgType {
//   return arg;
// }

// function consoleSize<Type extends { length: number }>(arg: Type): Type {
//   console.log(arg.length);
//   return arg;
// }

// const abb = consoleSize([0, 1]);

// function first<Type>(arg: Type[]): Type {
//   return arg[0];
// }

// const aa: Array<string | number> = ["aze", "abc", 3];

// const a: string = "Hello World";
// const n: number = 3;
// const b: boolean = true;
// const d: null = null;
// const date: DateString = "string";
// const arr: any[] = ["aze", "aze", 3];
// const user: User = {
//   firstname: "John",
//   lastname: "Doe",
// };
// // const date: Date = new Date();
// const cb: Function = (e: MouseEvent): void => {};
// const compteur = document.querySelector<HTMLButtonElement>(
//   "#compteur"
// ) as HTMLButtonElement;
// function printId(id: number | string): void {
//   console.log(id.toString());
// }

// const compteur = document.querySelector("#compteur");
// let i = 0;

// const increment = (e: Event) => {
//   e.preventDefault();
//   i++;
//   const span = compteur?.querySelector("span");
//   if (span) {
//     span.innerText = i.toString();
//   }
// };

// function printId(id: string | number) {
//   if (typeof id === "number") {
//     console.log((id * 3).toString());
//   } else {
//     console.log(id.toUpperCase());
//   }
// }

// function isDate(a: any): a is Date {
//   return a instanceof Date;
// }

// function example(a: string | string[]) {
//   if (Array.isArray(a)) {
//     return a[0];
//   }
//   return;
// }

// compteur?.addEventListener("click", increment);
