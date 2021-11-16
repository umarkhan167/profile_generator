//EXAMPLE
// const readline = require('readline');

// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


//CHALLENGE

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :): ', (ans1) => {
  rl.question('What\'s an activity you like doing?: ', (ans2) => {
    rl.question('What do you listen to while doing that?: ', (ans3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (ans4) => {
        rl.question('What\'s your favourite thing to eat for that meal?: ', (ans5) => {
          rl.question('Which sport is your absolute favourite?: ', (ans6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (ans7) => {
              console.log(` \n ${ans1}'s favourite activity is ${ans2}, like listening to ${ans3} and would like ${ans4} specially ${ans5}. ${ans1}'s favourite sport is ${ans6} and superpower is ${ans7}`);
             rl.close();
            });
          });
        });
      });
    });
  });
});
          
