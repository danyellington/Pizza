function Contact(name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;
}
Contact.prototype.fullName = function() {
  return "Thank you, " + (this.name) + ". ";
}

function Pizza(size, cheese, toppings) {
  this.size = size;
  this.cheese = cheese;
  this.topping = toppings;
  //this.number = number;
  this.price = 0;
  // toppings.forEach(function(thing){
  //   this.topping.push(thing);
  // })
}


//   function veggieCost (veggies) {
//   for(var i = 0; i<= veggies.length; i++){
// }
// }
Pizza.prototype.calcPrice = function(){
  if (this.cheese === "none") {
    this.price -=2;
  } else if (this.cheese === "extra") {
    this.price += 2;
  }

  if (this.topping.includes("pepperoni")) {
    this.price += 2;
  }
  if (this.topping.includes("sausage")) {
    this.price += 2.5;
  }
  if (this.topping.includes("bacon")) {
      this.price += 2;
  }
  if (this.topping.includes("chicken")) {
      this.price += 3;
  }
  if (this.topping.includes("onion")) {
    this.price += 1.5;
  }
  if (this.topping.includes("peppers")) {
    this.price += 2;
  }
  if (this.topping.includes("olives")) {
    this.price += 1.75;
  }
  if (this.topping.includes("mushroom")) {
    this.price += 2;
  }
  console.log(this.price);
  if (this.size === "small") {
    this.price += 15;
    } else if (this.size === "medium") {
      this.price += 20;
    } else if(this.size === "large") {
      this.price += 25;
    }

}

Pizza.prototype.displayPrice = function(){
  return " Your pizza costs $" + (this.price) + ".";
}

Contact.prototype.displayContacts = function(){
  return " Your pizza will be delivered to " + this.address + "." + " We can contact you at " + this.phone + "."
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
      // debugger;
      event.preventDefault();
      $("#result").empty();
        var toppings = [];
        var size = $("input:radio[name=size]:checked").val();
        var meat = $("input:checkbox[name=meat]:checked").each(function() {
          toppings.push($(this).val())
        });
        var cheese = $("input:radio[name=cheese]:checked").val();
        var veggies = $("input:checkbox[name=veggies]:checked").each(function() {
          toppings.push($(this).val())
        });
        var name = $("input#name").val();
        var phone = $("input#phone").val();
        var address = $("input#address").val();
        var number = $("input.number").val();
        var newPizza = new Pizza(size, cheese, toppings);
        console.log(newPizza);
        var newContact = new Contact(name, phone, address);
      $("#result").append(newContact.fullName());
      newPizza.calcPrice();
      $("#result").append(newPizza.displayPrice());
      $("#result").append(newContact.displayContacts());

  });
});
