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

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}

document.getElementById("deposit-button").addEventListener("click", function () {
  

  const depositAmount = getInputValue("deposit-input");
  updateTotalField("deposit-total", depositAmount);
  updateBalance(depositAmount, true);
});

// handel wWithdraw button

document.getElementById("Withdraw-button").addEventListener("click", function () {
 

  const withdrawAmount = getInputValue("Withdraw-Input");
  withdrawTotalField("Withdraw-total", withdrawAmount);
    updateBalance(withdrawAmount, false);
});
