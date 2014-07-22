JSStringFormatter
=================
Formatting JS Object

Example

var user = {
   id: 771120,
   name: "alex",
   u_name: function(){
      return this.name.toUpperCase()
   },
   details:{
      pi: function(){
         return Math.PI
      }
   }
};


$format("Hello, %{u_name} (%{id}): \nPI: %{details.pi}", user);

// => "Hello, ALEX (771120): 
//    PI: 3.141592653589793"
