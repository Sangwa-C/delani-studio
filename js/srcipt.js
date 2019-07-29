$(document).ready(function() {
  $("#description").click(function() {
    $("#description").hide();
    $("#desc").show();
  });
  $("#desc").click(function() {
    $("#desc").hide();
    $("#description").show();
  });
  $("#development").click(function() {
    $("#development").hide();
    $("#delpt").show();
    });
  $("#delpt").click(function() {
    $("#delpt").hide();
    $("#development").show();
    }); 
  $("#product").click(function() {
    $("#product").hide();
    $("#pro").show();
    });
  $("#pro").click(function() {
    $("#pro").hide();
    $("#product").show();
    });       
  $("#img1").mouseover(function(){
    $("#p1").show();
  }); 
  $("#img1").mouseleave(function(){
    $("#p1").hide();
  });  
  $("#img2").mouseenter(function(){
    $("#p2").show();
  }); 
  $("#img2").mouseleave(function(){
    $("#p2").hide();
  });
  $("#img3").mouseenter(function(){
    $("#p3").show();
  }); 
  $("#img3").mouseleave(function(){
    $("#p3").hide();
  });  
  $("#img4").mouseenter(function(){
    $("#p4").show();
  }); 
  $("#img4").mouseleave(function(){
    $("#p4").hide();
  });  
  $("#img5").mouseenter(function(){
    $("#p5").show();
  }); 
  $("#img").mouseleave(function(){
    $("#p5").hide();
  }); 
  $("#img6").mouseenter(function(){
    $("#p6").show();
  }); 
  $("#img6").mouseleave(function(){
    $("#p6").hide();
  });
  $("#img7").mouseenter(function(){
    $("#p7").show();
  }); 
  $("#img7").mouseleave(function(){
    $("#p7").hide();
  });
  $("#img8").mouseenter(function(){
    $("#p8").show();
  }); 
  $("#img8").mouseleave(function(){
    $("#p8").hide();
  });


});

$(document).ready(function(){
 $("#form1").submit(function(event){
   var name=$("input#name").val();
   var email=$("input#email").val();
   var message=$.trim($("#message").val());
   if ((name!="") && (email!="") && (message!="")){
    alert( "Hello " + name + "! We have received your message. Thank you for reaching out to us.")
   }
   else{
     alert("Fill well the form")
    }
    event.preventDefault();
  });

    
});


