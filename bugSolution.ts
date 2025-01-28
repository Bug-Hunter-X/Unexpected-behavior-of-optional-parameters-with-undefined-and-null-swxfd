function printName(name?: string): void {
  if (name === undefined || name === null) {
    console.log("Unknown");
  } else {
    console.log(name);
  }
}

printName(); //Prints "Unknown"
printName(undefined); //Prints "Unknown"
printName(null); //Prints "Unknown"
printName("John Doe"); //Prints "John Doe"