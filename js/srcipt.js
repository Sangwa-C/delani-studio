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
  $("#image1").mouseenter(function(){
    $("#p1").show();
  }); 
  $("#image1").mouseleave(function(){
    $("#p1").hide();
  });  
  $("#image2").mouseenter(function(){
    $("#p2").show();
  }); 
  $("#image2").mouseleave(function(){
    $("#p2").hide();
  });
  $("#image3").mouseenter(function(){
    $("#p3").show();
  }); 
  $("#image3").mouseleave(function(){
    $("#p3").hide();
  });  
  $("#image4").mouseenter(function(){
    $("#p4").show();
  }); 
  $("#image4").mouseleave(function(){
    $("#p4").hide();
  });  
  $("#image5").mouseenter(function(){
    $("#p5").show();
  }); 
  $("#image5").mouseleave(function(){
    $("#p5").hide();
  }); 
  $("#image6").mouseenter(function(){
    $("#p6").show();
  }); 
  $("#image6").mouseleave(function(){
    $("#p6").hide();
  });
  $("#image7").mouseenter(function(){
    $("#p7").show();
  }); 
  $("#image7").mouseleave(function(){
    $("#p7").hide();
  });
  $("#image8").mouseenter(function(){
    $("#p8").show();
  }); 
  $("#image8").mouseleave(function(){
    $("#p8").hide();
  });

  // $("#submit").click(function() {
  //   alert("We have received your message. Thank you for reaching out to us.")
  // });

});

$(document).ready(function(){
  $("#submit").submit(function(){
    var submit=$(submit).val()

    alert("result" + "We have received your message. Thank you for reaching out to us.")
  });
});

