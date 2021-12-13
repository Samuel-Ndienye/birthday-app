var days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var males = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var females = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if( year == "" || year.length !=4 || year >2100 || year <=1900) {
     alert( "Insert valid birth year!" );
     year.focus() ;
     return false;
  }
  else if( month.value == "" || isNaN( month.value ) || 
  month.value.length != 2 || month.value > 12  || month.value <= 0){
     alert( "Insert valid birth month!" );
     month.focus() ;
     return false;
  }
  else if( date.value == "" || isNaN( month.value ) || 
  month.value.length != 2|| date.value > 31 || date.value <= 0) {
     alert( "Insert valid date!" );
     date.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
      return false;
  }   
  else{
    return true ;
  }
  
}

function findDay(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 1){
        alert("Hello" +males[0] + " ? You were born on " +days[0]+"!");
      }
      else if(dayValue == 2){
        alert("Hello"  +males[1]+ " ? You were born on " +days[1]+"!");
      }
      else if(dayValue == 3){
        alert("Hello" +males[2]+ " ? You were born on " +days[2]+"!");
      }
      else if(dayValue == 4){
        alert("Hello" +males[3]+ " ? You were born on " +days[3]+"!");
      }
      else if(dayValue == 5){
        alert("Hello" +males[4]+ " ? You were born on " +days[4]+"!");
      }
      else if(dayValue == 6){
        alert("Hello" +males[5]+ " ? You were born on " +days[5]+"!");
      }
      else if(dayValue == -0){
        alert("Hello" +males[6]+ " ? You were born on " +days[6]+"!");
      }
    break;
    case "female":
      if (dayValue == 1){
        alert("Hello" +males[0]+ " ? You were born on " +days[0]+"!");
      }
      else if(dayValue == 2){
        alert("Hello" +males[1]+ " ? You were born on " +days[1]+"!");
      }
      else if(dayValue == 3){
        alert("Hello" +males[2]+ " ? You were born on " +days[2]+"!");
      }
      else if(dayValue == 4){
        alert("Hello" +males[3]+ " ? You were born on " +days[3]+"!");
      }
      else if(dayValue == 5){
        alert("Hello" +males[4]+ " ? You were born on " +days[4]+"!");
      }
      else if(dayValue == 6){
        alert("Hello" +males[4]+ " ? You were born on " +days[4]+"!");

      }
      else if(dayValue == -0){
        alert("Hello" +males[5]+ " ? You were born on " +days[5]+"!");
      }
    break
    default:
          
  }
}
function runName(){
  dayValue = findDay();
  getGender();
}