function Pizza(size, price, sauce, cheese, meat, veggies) {
  this.size = size;
  this.price = 0;
  this.sause = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
  if (this.size === "small") {
    this.price += 15;
  }else if (this.size === "medium") {
    this.price += 20;
  }else if (this.size === "large") {
    this.price += 25;
  }

  if (this.meat === "pepperoni", "sausage", "bacon") {
    this.price += 2;
  }else if (this.meat === "none"){
    this.price = 0;
  }

  if (this.cheese === "none") {
    this.price -= 2;
  }

  this.price = this.price

  }

  Pizza.prototype.displayPrice = function(){
  return "Your pizza costs $" + Math.round(this.price);
  }


  $(document).ready(function(){
  $("form#orderForm").submit(function(event){
    debugger;
    event.preventDefault();
    $("#result").empty();
    //var pizza = $("#pizza").val();
//    var name = $("#movie[name]").val();
    var size = $("input:radio[name=size]:checked").val();
    var meat = $("input:radio[name=meat]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var veggies = $("input:radio[name=veggies]:checked").val();

    // var student = $("input:radio[name=student]:checked").val();
    // var time = $("input:radio[name=time]:checked").val();
    // var number = $("input.number").val();
     var newPizza = new Pizza(size)//, price, sauce, cheese, meat, veggies);
    $("#result").append(newPizza.displayPrice());
    //$("#result").append(newTickets.displayPoster());
  });
});
