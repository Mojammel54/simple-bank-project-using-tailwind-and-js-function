
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');


    const previousDepositTotal = getElementValueById('deposit-total')


    const total = previousDepositTotal + newDepositAmount

    setElementValueById('deposit-total', total);

    const totalBalance = getElementValueById('balance-total')
    const NewBalance = totalBalance + newDepositAmount;
    setElementValueById('balance-total', NewBalance);




})