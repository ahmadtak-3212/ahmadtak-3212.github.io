function sendEmail(){

    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementsByClassName('email-message').value
    };
    console.log(templateParams);
  
    emailjs.init("bknIUjtf-oPl_YDJo");
  
    emailjs.send('service_ir8ppsd', 'template_6dbf596', templateParams)
    .then(function(response) {
       if(response.status == 200)
        jQuery('#openEmailOK').click();
    }, function(error) {
       jQuery('#openEmailFail').click();
    });
  };