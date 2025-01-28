function printName(name?: string): void {
  console.log(name || "Unknown");
}

printName(); //Prints "Unknown"
printName(undefined); //Prints "Unknown"
printName(null); //Prints "null"