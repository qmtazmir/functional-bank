// function doubleIt(num) {
//   const result = num * 2;
//   return result;
// }

function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  depositInput.value = "";
  return depositAmount;
}

document.getElementById("deposit-button").addEventListener("click", function () {
  //   console.log("deposit buton clicked");
  // const depositInput = document.getElementById("deposit-input");

  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText);

const depositAmount = 

  //get curret deposit

  const depositTotal = document.getElementById("deposit-total");

  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousDepositTotal + depositAmount;
  // console.log(depositAmount);

  //update balance

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal + depositAmount;

  // clear input field

  // depositInput.value = "";
});

// handel wWithdraw button

document.getElementById("Withdraw-button").addEventListener("click", function () {
  const withdrawInput = document.getElementById("Withdraw-Input");

  const withdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawAmountText);

  // console.log(withdrawAmountText);
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

  // clear withdraw input
  withdrawInput.value = "";
});