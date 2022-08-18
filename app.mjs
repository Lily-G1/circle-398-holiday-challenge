function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  let phoneNumber = document.querySelector('#phone-number');

  phoneNumber.addEventListener('input', function() {

    if (phoneNumber.value.startsWith('0803') || phoneNumber.value.startsWith('0806') || phoneNumber.value.startsWith('0703') ||
phoneNumber.value.startsWith('0704') ||
phoneNumber.value.startsWith('0706') || phoneNumber.value.startsWith('0813') || phoneNumber.value.startsWith('0816') || phoneNumber.value.startsWith('0810') || phoneNumber.value.startsWith('0814') || phoneNumber.value.startsWith('0903')) {
      phoneNumber.style.background = 'url("mtn11.jpg") right no-repeat';
    }

    else
      if (phoneNumber.value.startsWith('0805') || phoneNumber.value.startsWith('0807') || phoneNumber.value.startsWith('0705') || phoneNumber.value.startsWith('0815') || phoneNumber.value.startsWith('0811') || phoneNumber.value.startsWith('0905')) {
        phoneNumber.style.background = 'url("glo11.jpg") right no-repeat';
      }

      else
        if (phoneNumber.value.startsWith('0802') || phoneNumber.value.startsWith('0808') || phoneNumber.value.startsWith('0708') || phoneNumber.value.startsWith('0812') || phoneNumber.value.startsWith('0701') || phoneNumber.value.startsWith('0902')) {
          phoneNumber.style.background = 'url("airtel11.jpg") right no-repeat';
        }

        else
          if (phoneNumber.value.startsWith('0809') || phoneNumber.value.startsWith('0818') || phoneNumber.value.startsWith('0817') || phoneNumber.value.startsWith('0909')) {
            phoneNumber.style.background = 'url("9mobile22.jpg") right no-repeat';
          }

          else {
            phoneNumber.style.background = '';
          }
  })

}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //