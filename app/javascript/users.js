/* global $, Stripe */
//Document Ready
$(document).on('turbolinks:load', function(){
  
  var theForm = $('#pro_form');
  var submitBtn = $("#form-signup-btn");
  
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') ) ;
  
  //When user clicks submit form button
  submitBtn.click(function(event){
    //prevent deffault submision behavior.
    event.preventDefault()
    
  //Collect the credit card fields.
  var ccNum = $("#card_number").val(),
      cvcNum = $("#card_code"),
      expMonth = $("#card_month"),
      expYear = $("#card_year");
  
  //Send the card info to stripe.
  Stripe.createToken({
    number: ccNum,
    cvc: cvcNum,
    exp_month: expMonth,
    exp_year: expYear
    
  }, stripeResponseHandler);
  
  });
  
  
  
  //Stripe will return a card token.
  //Inject card token as hidden field into form.
  //Submit form to our Rails app.
});