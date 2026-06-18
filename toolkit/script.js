function toggleFaq(el) {
  var item = el.parentElement;
  item.classList.toggle('open');
}

function startCheckout(tier) {
  var emailId = tier === 'basis' ? 'email-basis' : 'email-compleet';
  var emailVal = document.getElementById(emailId).value.trim();
  if (!emailVal || !emailVal.includes('@')) {
    alert('Vul eerst een geldig e-mailadres in.');
    return;
  }
  var amount = tier === 'basis' ? 29 : 79;
  var label = tier === 'basis' ? 'STROOMLIJN Toolkit Basis' : 'STROOMLIJN Toolkit Compleet';
  if (typeof window.__processDonation === 'function') {
    window.__processDonation({ amount: amount, email: emailVal, label: label });
  } else {
    alert('Betaalsysteem laadt nog. Probeer het over een moment opnieuw.');
  }
}