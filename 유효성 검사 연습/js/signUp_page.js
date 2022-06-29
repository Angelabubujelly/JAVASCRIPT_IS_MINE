//개인회원 기업회원 버튼 ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
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


// 생년월일 select  ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
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


  //유효성 검사❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
  function validate1() {
    var vali = /^[a-zA-Z0-9]{4,12}$/ // 아이디가 적합한지 검사할 정규식
    var vali2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ //비밀번호 정규식
    // var vali3 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일이 적합한지 검사할 정규식


    var id = document.getElementById("id");
    var pw = document.getElementById("pw");
    var cfpw = document.getElementById("cfpw");
    var name = document.getElementById("name");
    var year = document.getElementById("year");    // 배열로 담아야 할까나??
    var month = document.getElementById("month");    // 배열로 담아야 할까나??
    var day = document.getElementById("day");    // 배열로 담아야 할까나??
    var phoneInd1 = document.getElementById("phoneInd1");
    var phoneInd2 = document.getElementById("phoneInd2");
    var post1 = document.getElementById("post1");
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");

//검사
if(!check(vali,id,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력해주세요.")){
  return false;
}
if(!check(vali2,pw,"비밀번호는 최소 8자이상의 문자, 숫자, 특수문자($@$!%*#?&)를 포함해야 합니다.")){
  return false;
}
if(pw.value==cfpw.value) {
  alert("비밀번호가 일치하지 않습니다.");
  cfpw.focus();
  return false;
}

if(name.value=="") {
  alert("이름을 입력해 주세요");
  name.focus();
  return false;
}
if(year.value=="") {
  alert("년도를 선택해 주세요");
  year.focus();
  return false;
}
if(month.value=="") {
  alert("월을 선택해 주세요");
  month.focus();
  return false;
}
if(day.value=="") {
  alert("날짜를 선택해 주세요");
  day.focus();
  return false;
}
if(phoneInd1.value=="") {
  alert("식별번호를 선택해 주세요");
  phoneInd1.focus();
  return false;
}
if(post1.value=="") {
  alert("우편번호를 입력해주세요");
  post1.focus();
  return false;
}
if(address1.value=="") {
  alert("주소를 입력해주세요");
  address1.focus();
  return false;
}
if(address2.value=="") {
  alert("주소를 입력해주세요");
  address2.focus();
  return false;
}


alert("Welcome🍏");
location.href="default_page.html";
  }



function validate2() {
      var vali = /^[a-zA-Z0-9]{4,12}$/ // 아이디가 적합한지 검사할 정규식
      var vali2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ //비밀번호 정규식
      // var vali3 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일이 적합한지 검사할 정규식
  
  
          //기업
    var idCom = document.getElementById("idCom");
    var pwCom = document.getElementById("pwCom");
    var cfpwCom = document.getElementById("cfpwCom");
    var perIC = document.getElementById("perIC");
    var perICPhone = document.getElementById("perICPhone");
    var perICPhone2 = document.getElementById("perICPhone2");
    var nameCom = document.getElementById("nameCom");
    var post1 = document.getElementById("post1");
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");
    var representative = document.getElementById("representative");
    var companyNum = document.getElementById("companyNum");
    var formFile = document.getElementById("formFile");
    var post1Com = document.getElementById("post1Com");
    var address1Com = document.getElementById("address1Com");
    var address2Com = document.getElementById("address2Com");
  
  //검사
  if(!check(vali, idCom,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력해주세요.")){
    return false;
  }
  if(!check(vali2,pwCom,"비밀번호는 최소 8자이상의 문자, 숫자, 특수문자($@$!%*#?&)를 포함해야 합니다.")){
    return false;
  }
  if(pwCom.value==cfpwCom.value) {
    alert("비밀번호가 일치하지 않습니다.");
    cfpw.focus();
    return false;
  }
  
  if(perIC.value=="") {
    alert("인사 담당자의 이름을 입력해 주세요");
    perIC.focus();
    return false;
  }
  if(perICPhone.value=="") {
    alert("지역번호를 선택해 주세요");
    perICPhone.focus();
    return false;
  }
  if(perICPhone2.value=="") {
    alert("전화번호를 입력해 주세요");
    perICPhone.focus();
    return false;
  }
  if(nameCom.value=="") {
    alert("회사명를 입력해 주세요");
    nameCom.focus();
    return false;
  }
  if(post1.value=="") {
    alert("우편번호를 입력해주세요");
    post1.focus();
    return false;
  }
  if(address1.value=="") {
    alert("주소를 입력해주세요");
    address1.focus();
    return false;
  }
  if(address2.value=="") {
    alert("주소를 입력해주세요");
    address1.focus();
    return false;
  }
  if(representative.value=="") {
    alert("대표자명을 입력해 주세요");
    representative.focus();
    return false;
  }
  if(companyNum.value=="") {
    alert("사업자 등록번호를 입력해 주세요");
    companyNum.focus();
    return false;
  }
  if(formFile.value=="") {
    alert("증빙서류를 첨부해 주세요");
    formFile.focus();
    return false;
  }
  if(post1Com.value=="") {
    alert("우편번호를 입력해주세요");
    post1Com.focus();
    return false;
  }
  if(address1Com.value=="") {
    alert("주소를 입력해주세요");
    address1Com.focus();
    return false;
  }
  if(address2Com.value=="") {
    alert("주소를 입력해주세요");
    address2Com.focus();
    return false;
  }

  alert("Welcome🍏");
  location.href="default_page.html";
    }
  


  // 유효성검사 
  // window.addEventListener('load', () => {

  // // const는 호출 결과를 form 상수에 받아서 활용하는겨. 물론 상수나 변수에 함수를 할당할 수도 있습니당.
  //   const forms = document.getElementsByClassName('validation-form');
  
  //   Array.prototype.filter.call(forms, (form) => {
  //     form.addEventListener('submit', function (event) {
  //       if (form.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  
  //       form.classList.add('was-validated');
  //     }, false);
  //   });
  // }, false);



  
