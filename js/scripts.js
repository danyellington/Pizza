function Contact(name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;
}
Contact.prototype.fullName = function() {
  return "Thank you, " + (this.name) + ".";
}

function Pizza(size, price, sauce, cheese, meat, veggies) {
  this.size = size;
  this.price = 0;
  this.cheese = cheese;
  this.meat = [];
  this.veggies = [];

  if (this.size === "small") {
    this.price += 15;
    }else if (this.size === "medium") {
      this.price += 20;
    }else if(this.size === "large") {
      this.price += 25;
      }
      //var veggies = this.veggies.forEach();
      for(var i = 0; i < veggies.length; i++) {
      this.price += 1;
       }
      }

    var meat = this.meat.push();
    for(var i = 0; i < meat.length; i++) {
    this.price += 1;
  }



    Pizza.prototype.displayPrice = function(){
    return "Your pizza costs $" + (this.price) + ". ";
    }





  $(document).ready(function(){
  $("form#orderForm").submit(function(event){
    debugger;
    event.preventDefault();
    $("#result").empty();
    var size = $("input:radio[name=size]:checked").val();
    var meat = $("input:checkbox[name=meat]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var veggies = $("input:checkbox[name=veggies]:checked").val();
    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var address = $("input#address").val();
    var number = $("input.number").val();
    var newPizza = new Pizza(size, cheese);
    var newContact = new Contact(name, phone, address);
    $("#result").append(newPizza.displayPrice());
    $("#result").append(newContact.fullName());
    //$("#result").append(newTickets.displayPoster());
  });
});
