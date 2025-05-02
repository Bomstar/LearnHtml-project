function calculateMoney(ticketNum) {
  if (typeof ticketNum === "number" && 0 <= ticketNum) {
    const ticketPrice = 120;
    const perSecurityCost = 500;
    const perLunchCost = 8 * 50;
    const totalCost = perSecurityCost + perLunchCost;

    const totalIncome = ticketPrice * ticketNum;
    const totalEarnMoney = totalIncome - totalCost;
    return totalEarnMoney;
  } else {
    return "Please Input A Valid Number";
  }
}

// console.log(calculateMoney(23));

function checkName(names) {
  if (typeof names !== "string" || names.trim() === "") {
    return "Please Enter a Srting or Text";
  }
  const lowerName = names.toLowerCase();
  const lastLetter = lowerName[lowerName.length - 1];
  const goodLetter = ["a", "y", "i", "e", "o", "u", "w"];

  if (goodLetter.includes(lastLetter)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

// console.log(checkName(""));
