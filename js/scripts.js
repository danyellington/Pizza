function Pizza(size, price, sauce, cheese, meat, veggies) {
  this.size = size;
  this.price = price;
  this.sause = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
  if (this.size = "small"){
    this.price += 15;
  }else if (this.size = "medium") {
    this.price += 20;
  }else if (this.price = "large") {
    this.price += 25;
  }
  this.price = this.price + this.price
  console.log(this.price)
  }

  Pizza.prototype.displayPrice = function(){
  return "Your pizza costs $" + Math.round(this.price);
  }


  $(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var pizza = $("#pizza").val();
//    var name = $("#movie[name]").val();
    var size = $("input:radio[name=size]:checked").val();
    // var student = $("input:radio[name=student]:checked").val();
    // var time = $("input:radio[name=time]:checked").val();
    // var number = $("input.number").val();
     var newTickets = new Pizza(size)//, price, sauce, cheese, meat, veggies);
    $("#result").append(newPizza.displayPrice());
    //$("#result").append(newTickets.displayPoster());
  });
});
