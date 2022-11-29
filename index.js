// code your solution here
// code your solution here

function razzle(lawyer = "Billy", target = "'em") {
  console.log(`${lawyer} razzled-dazzles ${target}!`);
}
razzle();
razzle("Methuselah", "T'challah");

//function declation
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe the dog"));

//function expression
const mondayWork = function (activity1 = "go to the office") {
  return `This Monday, I will ${activity1}.`;
};
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(flair = "*") {
  return function (wrap = "special") {
    return `You are ${flair}${wrap}${flair}!`;
  };
}
console.log(wrapAdjective("*")("a dedicated worker"));
