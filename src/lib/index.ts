// place files you want to import through the `$lib` alias in this folder.
// Create a sleep function
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));