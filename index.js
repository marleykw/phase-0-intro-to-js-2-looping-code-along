// Code your solutions in this file
const recipients = ['Guadalupe', 'Ollie', 'Aki'];
console.log(recipients);
console.log(recipients.length);
const messages = [];
function writeCards(recipients, occasion = 'surprise') {
  for (let i = 0; i < recipients.length; i++) {
    console.log(recipients[i]);
    console.log(`Thank you, ${recipients[i]}, for the wonderful ${occasion} gift!`);
    //const recipients = {
    messages.push(`Thank you, ${recipients[i]}, for the wonderful ${occasion} gift!`); 
    //}    // debugger;
    console.log(messages);
  }
  return messages
}

function countDown(value) {
  for (let i = 0; i <= value; i++) {
    console.log(value - i);
  }
}