function Contact(name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;
}
Contact.prototype.fullName = function() {
  return "Thank you, " + (this.name) + ". ";
}

function Pizza(size, price, sauce, cheese, meat, veggies) {
  this.size = size;
  this.cheese = cheese;
  this.meat = [];
  this.veggies = [];
  //this.number = number;
  this.price = 0;
  if (this.cheese === "none") {
    this.price -=2;
  }
  if (this.size === "small") {
    this.price += 15;
    }else if (this.size === "medium") {
      this.price += 20;
    }else if(this.size === "large") {
      this.price += 25;
    }
}

//   function veggieCost (veggies) {
//   for(var i = 0; i<= veggies.length; i++){
// }
// }
Pizza.prototype.displayPrice = function(){
  return "Your pizza costs $" + (this.price) + ".";
}


//
//     var meat = this.meat function(); {
//     for(var i = 0; i < meat.length; i++) {
//     this.price += 1;
//   }
// }

//UI
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
      $("#result").append(newContact.fullName());
      $("#result").append(newPizza.displayPrice());


  });
});
