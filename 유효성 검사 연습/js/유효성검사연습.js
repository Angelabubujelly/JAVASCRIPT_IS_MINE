
$(function() {
  $("#company").hide()
  $("#personButton").click(function(){
    $("#personButton").css({"background-color": "#A5E374", "color": "white"})
    $("#companyButton").css({"background-color": "#F0F0F0", "color": "#858585"})
    $("#individual").show()
    $("#company").hide()
  })
  $("#companyButton").click(function(){
    $("#companyButton").css({"background-color": "#A5E374", "color": "white"})
    $("#personButton").css({"background-color": "#F0F0F0", "color": "#858585"})
    $("#individual").hide()
    $("#company").show()
    $("#company").prop("display","block")
  })
  });

  window.addEventListener('load', () => {
    const forms = document.getElementsByClassName('validation-form');
  
    Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
