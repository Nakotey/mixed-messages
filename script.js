function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  
      const affirmation = [`I love you.`, `You are so special to me.`,
      `After all of this time, I'm still so crazy for you. `,`Did I tell you how grateful I am that you are my partner?`,
    `I just wanted to let you know I'm proud of you. `,`I'm always in your corner supporting you.`,
        `I want to take the time to thank you for how hard you work around our home.`]
      
    const encouragement = [`The ability to triumph begins with you.`, `You must do the thing you think you cannot do.`,
        `Be the change that you wish to see in the world`, `It is very important to know who you are. To make decisions. To show who you are.`,
    `It always seems impossible until it is done.`, `Set your goals high and don’t stop till you get there.`,
`You are enough just as you are.`] 
      
        const proverb = [`A bad workman always blames his tools.`, `A bird in hand is worth two in the bush.`,
    `Absence makes the heart grow fonder.`, `A chain is only as strong as its weakest link.`, `A drowning man will clutch at a straw.`, `Adversity and loss make a man wise.`]
 

  let returnedWord =''

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Which heart warming words do you want to read? \nEnter "affirmation","encouragement" or "proverb": ', 
  choice => {
    let optionIndex = 0
    switch (choice) {
     case 'proverb': 
     {
         optionIndex = generateRandomNumber(proverb.length)
         returnedWord = `\nA nice  ${choice}, ${proverb[optionIndex]}`
     }
     break
     case 'encouragement': 
     {
         optionIndex = generateRandomNumber(encouragement.length)
         returnedWord = `\nWord of  ${choice}, ${encouragement[optionIndex]}`
     }
     break
     case 'affirmation': 
     {
         optionIndex = generateRandomNumber(affirmation.length)
         returnedWord = `\nWord of ${choice}, ${affirmation[optionIndex]}`
     }
     break
     default: returnedWord = `Enter 'affirmation', 'encouragement' or 'proverb'`
     break
   }
  
 function wordsOfWisdom(word) {
     const logged = word
     console.log(logged)
 }
 
 wordsOfWisdom(returnedWord)
 
     readline.close();
   });