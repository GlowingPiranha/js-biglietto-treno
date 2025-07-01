const km = parseInt(prompt('inserisci i chilometri che vuoi percorrere'));
const age = parseInt(prompt('inserisci la tua età'));
console.log(km + ' ' + 'chilometri')
console.log(age, 'anni')

const ticket = parseInt(km * 0.21);

if (age <= 17) {
  const twentyp = ticket - ((ticket / 100) * 20);
  const price = twentyp.toFixed(2);
  console.log('il costo del bigletto è:' + ' ' + '€' + price)

} else if (age >= 65) {
  const twentyp = ticket - ((ticket / 100) * 40);
  const price = twentyp.toFixed(2);
  console.log('il costo del bigletto è:' + ' ' + '€' + price)

} else {
  const price = ticket.toFixed(2);
  console.log('il costo del bigletto è:' + ' ' + '€' + price)
}