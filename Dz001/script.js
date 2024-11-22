const transactionUl = document.querySelector("#transactions");
console.log(transactionUl); //ul#trasactions.trasactions 

const dummyTransactions = [
  {id: 1, name:'Bolo de Brigadeiro', amount: -20},
  {id: 2, name:'Salário', amount: 300},
  {id: 3, name:'Torta de frango', amount: -10},
  {id: 4, name:'Violão', amount: 150}
]

const addTransactionIntoDOM = transaction => {

  const operator = transaction.amount < 0 ? '-' : '+';
  const CSSClass = transaction.amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(transaction.amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `${transaction.name} <span> ${operator}  R$ ${amountWithoutOperator}</span>`;
  transactionUl.append(li);

  console.log(li); // li.plus
  console.log(operator); // +

  {// <li class="minus">
       //     Salário <span>-$400</span><button class="delete-btn">x</button>
       // </li>
   }
};

addTransactionIntoDOM(dummyTransactions[1]); /*remover*/

const upDateBalanceValues = () => {
  const transactionsAmounts = dummyTransactions.map ((transaction) => transaction.amount);
  console.log(transactionsAmounts); // (4) [-20, 300, -10, 150]
  const total = transactionsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2);
  console.log(total); // 420.00
  console.log(transactionsAmounts); // (4) [-20, 300, -10, 150]
};

const income = transactionsAmounts.filter((value) => value > 0);
const total = transactionsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2);
console.log(income);

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM);
  upDateBalanceValues();
};

init();

