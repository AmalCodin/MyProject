let raceNumber = Math.floor(Math.random() * 1000);

const runnerRegistered = true;

const runnerAge = 10;

if(runnerAge > 18 && runnerRegistered) {
  raceNumber += 1000
  console.log(`You will be race at 9:30 am ${raceNumber} is your race number.`);
} else if(runnerAge > 18 && !runnerRegistered) {
  console.log(`You will race at 11:00 am ${raceNumber} is your race number.`)
} else if(runnerAge < 18) {
  console.log(`You will race at 12:30 pm ${raceNumber} is your race number.`)
} else {
  console.log('You should see the registration desk.')
}
