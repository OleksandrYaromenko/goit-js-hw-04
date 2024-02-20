function calcAverageCalories(days) {
    let sumCaloriesWeek = 0
    let numberCalories = 0;
    for (const sum of days) {
        numberCalories += sum.calories
    } 
     sumCaloriesWeek = numberCalories / days.length
    return sumCaloriesWeek || 0
}

function calcAverageCalories1(days) {
    let sumCaloriesWeek = 0
    let numberCalories = 0;
    
     if (days.length) {              // якщо довжина масива true
        for (const sum of days) {
            numberCalories += sum.calories
         } 
         sumCaloriesWeek = numberCalories / days.length
    }
     else {
         return sumCaloriesWeek // у випадку довжина масиву false повернеться 0
     } 
}



console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories1([])
); // 0



