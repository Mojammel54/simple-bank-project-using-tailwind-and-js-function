document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-field');

    const withdrawNewAmount = getElementValueById('withdraw-total')

    const withdrawTotal = newWithdrawAmount + withdrawNewAmount

    setElementValueById('withdraw-total', withdrawTotal)

    const newBalanace = getElementValueById('balance-total')

    const totalNewBalance = newBalanace - newWithdrawAmount

    setElementValueById('balance-total', totalNewBalance)


})