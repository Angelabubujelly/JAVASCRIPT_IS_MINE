
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

  var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
  $(document).ready(function(){
      var option = '<option value="day">day</option>';
      var selectedDay="day";
      for (var i=1;i <= Days[0];i++){ //add option days
          option += '<option value="'+ i + '">' + i + '</option>';
      }
      $('#day').append(option);
      $('#day').val(selectedDay);
  
      var option = '<option value="month">month</option>';
      var selectedMon ="month";
      for (var i=1;i <= 12;i++){
          option += '<option value="'+ i + '">' + i + '</option>';
      }
      $('#month').append(option);
      $('#month').val(selectedMon);
  
      var option = '<option value="month">month</option>';
      var selectedMon ="month";
      for (var i=1;i <= 12;i++){
          option += '<option value="'+ i + '">' + i + '</option>';
      }
      $('#month2').append(option);
      $('#month2').val(selectedMon);
    
      var d = new Date();
      var option = '<option value="year">year</option>';
      selectedYear ="year";
      for (var i=1930;i <= d.getFullYear();i++){// years start i
          option += '<option value="'+ i + '">' + i + '</option>';
      }
      $('#year').append(option);
      $('#year').val(selectedYear);
  });
  function isLeapYear(year) {
      year = parseInt(year);
      if (year % 4 != 0) {
          return false;
      } else if (year % 400 == 0) {
          return true;
      } else if (year % 100 == 0) {
          return false;
      } else {
          return true;
      }
  }
  
  function change_year(select)
  {
      if( isLeapYear( $(select).val() ) )
      {
          Days[1] = 29;
          
      }
      else {
          Days[1] = 28;
      }
      if( $("#month").val() == 2)
          {
               var day = $('#day');
               var val = $(day).val();
               $(day).empty();
               var option = '<option value="day">day</option>';
               for (var i=1;i <= Days[1];i++){ //add option days
                   option += '<option value="'+ i + '">' + i + '</option>';
               }
               $(day).append(option);
               if( val > Days[ month ] )
               {
                    val = 1;
               }
               $(day).val(val);
           }
    }
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