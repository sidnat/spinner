const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let counter = 100;

for (let symbol of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, counter);

  counter += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, counter);