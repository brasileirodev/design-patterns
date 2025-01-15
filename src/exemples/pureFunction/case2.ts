function formatName(user: { firstName: string; lastName: string }): string {
    return `${user.firstName} ${user.lastName}`;
}

const user = { firstName: "John", lastName: "Doe" };
console.log(formatName(user)); // John Doe
  
