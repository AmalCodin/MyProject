const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;  
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5
    } else if (day === 'friday') {
      return 6
    } else if (day === 'saturday') {
      return 8
    } else if (day === 'sunday') {
      return 8
    }
      else {
      return 'error'
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') +      getSleepHours('friday') +
  getSleepHours('saturday') +  getSleepHours('sunday');
  return 
  
  
  const getIdealSleepHours = () => {
    let idealHours = 7.5;
    return idealHours * 7;  
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You have got a perfect amount of sleep.")
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than what is needed.')
    } else {
      console.log('You need to get some rest. You have not got enough sleep that is needed.')
    }
  };
  