// function doubleIt(num) {
//   const result = num * 2;
//   return result;
// }

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = "";
  return amountValue;
}

function updateTotalField() {
  const depositTotal = document.getElementById("deposit-total");

  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = previousDepositTotal + amountValue;
}

document.getElementById("deposit-button").addEventListener("click", function () {
  //   console.log("deposit buton clicked");
  // const inputField = document.getElementById("deposit-input");

  // const inputAmountText = inputField.value;
  // const amountValue =  parseFloat(inputAmountText);

  const amountValue = getInputValue("deposit-input");

  //get current deposit

  // const depositTotal = document.getElementById("deposit-total");

  // const depositTotalText = depositTotal.innerText;
  // const previousDepositTotal = parseFloat(depositTotalText);

  // depositTotal.innerText = previousDepositTotal + amountValue;
  // console.log(amountValue);

  updateTotalField = getInputValue;

  //update balance

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal + amountValue;

  // clear input field

  // inputField.value = "";
});

// handel wWithdraw button

document.getElementById("Withdraw-button").addEventListener("click", function () {
  // const withdrawInput = document.getElementById("Withdraw-Input");

  // const withdrawAmountText = withdrawInput.value;
  // const withdrawAmount = parseFloat(withdrawAmountText);
  // console.log(withdrawAmountText);

  const withdrawAmount = getInputValue("Withdraw-Input");

  //update withdraw total

  const withdrawTotal = document.getElementById("Withdraw-total");
  const previousWithdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

  //up date balance total

  const balanceTotal = document.getElementById("balance-total");

  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

  // // clear withdraw input
  // withdrawInput.value = "";
});
