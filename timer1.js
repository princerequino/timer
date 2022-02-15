const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
if ((isNaN(args[i])) || (args[i]) < 0) { // if it's not a number, it Ignores it. if it's less than 0, it's also ignored.
    continue;
  } else {
    let timeInSeconds = args[i]*1000
    setTimeout(() => {
      process.stdout.write('Beep');
    }, (timeInSeconds));
  }
} 

