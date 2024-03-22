// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

// Task number two
const mondayWork = function (ToDo = "go to the office") {
  return `This Monday, I will ${ToDo}.`;
};
mondayWork();

// test three
function wrapAdjective(msg1= "*"){
    return function(msg2 = "special"){
        return `You are ${msg1}${msg2}${msg1}!`
    }
}
console.log(wrapAdjective("%")("a dedicated programmer"));