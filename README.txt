JSStringFormatter
=================
Formatting JS Object

Example

var user = {
   id: 771120,
   name: "alex",
   u_name: function(){
      // function will be evaluated.
      // refer to member of the object using 'this' keyword.
      return this.name.toUpperCase()
   },
   details:{
      pi: function(){
         return Math.PI
      }
   }
};


$format("Hello, %{u_name} (%{id}): \nPI: %{details.pi}", user);


Output:

Hello, ALEX (771120): 
PI: 3.141592653589793
