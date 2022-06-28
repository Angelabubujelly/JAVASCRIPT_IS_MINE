//개인회원 기업회원 버튼
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


// 생년월일 select 
    $(document).ready(function(){            
      var now = new Date();
      var year = now.getFullYear();
      var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1); 
      var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());           
      //년도 selectbox만들기               
      for(var i = 1900 ; i <= year ; i++) {
          $('#year').append('<option value="' + i + '">' + i + '년</option>');    
      }
  
      // 월별 selectbox 만들기            
      for(var i=1; i <= 12; i++) {
          var mm = i > 9 ? i : "0"+i ;            
          $('#month').append('<option value="' + mm + '">' + mm + '월</option>');    
      }
      
      // 일별 selectbox 만들기
      for(var i=1; i <= 31; i++) {
          var dd = i > 9 ? i : "0"+i ;            
          $('#day').append('<option value="' + dd + '">' + dd+ '일</option>');    
      }
      $("#year  > option[value="+year+"]").attr("selected", "true");        
      $("#month  > option[value="+mon+"]").attr("selected", "true");    
      $("#day  > option[value="+day+"]").attr("selected", "true");       
    
  })

  // 유효성검사
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