
$(function() {
  $("#company").hide()
  $("#personButton").click(function(){
    $("#individual").show()
    $("#company").hide()
  })
  $("#companyButton").click(function(){
    $("#individual").hide()
    $("#company").show()
    $("#company").prop("display","block")
  })
  });