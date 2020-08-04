//const mailer = require('./mailer');

$('#submitButton').click(function() {



const name = $('#nameInput').val();
const email = $("#emailInput").val();
const message = $('#messageInput').val();



$.post("/api/email", {
    name: name,
    email: email,
    message: message
})
.then(function(){
    console.log("is this happening");
    $('#nameInput').val('John Smith');
    $('#emailInput').val('example@gmail.com');
    $('#messageInput').val('');
    alert("Your message was sent");

})
.catch(function(err){
    console.log(err);
});

});