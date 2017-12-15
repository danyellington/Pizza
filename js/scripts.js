function Pizza(size, price, sauce, cheese, meat, veggies) {
  this.size = size;
  this.price = 0;
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;

  if (this.size === "small") {
    this.price += 15;
    }else if (this.size === "medium") {
      this.price += 20;
    }else if(this.size === "large") {
      this.price += 25;
  }
  // var veggies = this.veggies.toString();
  // for(var i = 0; i < veggies.length; i++) {
  //   this.price += 1;
  // }
  if (this.cheese === "none") {
    this.price -= 1;
  }
}
  Pizza.prototype.displayPrice = function(){
  return "Your pizza costs $" + (this.price);
}

function contactInfo(name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;


  contactInfo.prototype.display = function() {
  return (this.name) + (this.phone) + (this.address);
  }
}


  $(document).ready(function(){
  $("form#orderForm").submit(function(event){
    //debugger;
    event.preventDefault();
    $("#result").empty();
    //var pizza = $("#pizza").val();
//    var name = $("#movie[name]").val();
    var size = $("input:radio[name=size]:checked").val();
    var meat = $("input:checkbox[name=meat]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var veggies = $("input:checkbox[name=veggies]:checked").val();
    var name = $("input#name").val();
    var newPizza = new Pizza(size, cheese);
     //var newContact = new ContactInfo(name, phone, address);
    $("#result").append(newPizza.displayPrice());
    //$("#result").append(newContact.contact());
    //$("#result").append(newTickets.displayPoster());
  });
});
