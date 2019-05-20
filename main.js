//variables
const price1 = 1000;
const price2 = 1200;
const price3 = 1500;
const tax = 350;

// dates for comparasion and block old dates
var today = new Date().toISOString().split('T')[0];
var today2 = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);
document.getElementsByName("somedate2")[0].setAttribute('min', today);


//getPrice
function getPrice() {
    event.preventDefault();
    let dep = document.getElementById('list_departure').value;
    let dest = document.getElementById('list_destiny').value;
    let people = document.getElementById('list_people').value;



    let date_start = new Date(document.getElementById('date_departure').value);
    let date_start2 = new Date();
    let date_start_1 = date_start.setDate(date_start.getDate() + 1);
    let date_end = new Date(document.getElementById('date_back').value);
    let date_end_1 = date_start.setDate(date_end.getDate() + 1);
    let today3 = new Date();
    let today4 = today3.valueOf();


            if ((dest == 'fln') && (dest != dep) && (date_start_1 <= date_end_1) && (people >= 1) && (date_start_1 >= today4))
            {
              calc(price1);
              var modal = document.getElementById('myModal');
              modal.setAttribute('data-target', '#newModal');
              document.getElementById("date_error").style.display = 'none';
              document.getElementById("destiny_error").style.display = 'none';
              document.getElementById("people_error").style.display = 'none';
            }

            else if( dest == 'lnd' && (dest != dep) && (date_start_1 <= date_end_1) && (people >= 1) && (date_start_1 >= today4))
            {
              calc(price2);
              var modal = document.getElementById('myModal');
              modal.setAttribute('data-target', '#newModal');
              document.getElementById("date_error").style.display = 'none';
              document.getElementById("destiny_error").style.display = 'none';
              document.getElementById("people_error").style.display = 'none';
            }

            else if( dest == 'prs' && (dest != dep) && (date_start_1 <= date_end_1) && (people >= 1) && (date_start_1 >= today4))
            {
              calc(price3);
              var modal = document.getElementById('myModal');
              modal.setAttribute('data-target', '#newModal');
              document.getElementById("date_error").style.display = 'none';
              document.getElementById("destiny_error").style.display = 'none';
              document.getElementById("people_error").style.display = 'none';
            }


          if (dest == "zero" || dep =="um" || dest == dep)
          {
            document.getElementById("destiny_error").style.display = '';
          }


          if ( !date_start.getTime() || (date_start_1 > date_end_1) || (date_start_1 < today4) )
          {
            document.getElementById("date_error").style.display = '';
          }

          if (!date_end.getTime()) {

              document.getElementById("date_error2").style.display = '';
          }



          if (people == '' || people <= 0)
          {
            document.getElementById("people_error").style.display = '';
          }


          //Display Table
          function calc(price) {
            document.getElementsByClassName('table')[0].style.display = '';

            var table = document.getElementsByTagName('table')[0];
            var total = (price * people) + tax;

            var newRow = table.insertRow(1);

            var cel1 = newRow.insertCell(0);
            var cel2 = newRow.insertCell(1);
            var cel3 = newRow.insertCell(2);
            var cel4 = newRow.insertCell(3);

            cel1.innerHTML = 'R$ ' + price.toLocaleString('pt-BR');
            cel2.innerHTML = people;
            cel3.innerHTML = 'R$ ' + tax.toLocaleString('pt-BR');
            cel4.innerHTML = 'R$ ' + total.toLocaleString('pt-BR');
          }
}



//Clean Table
//window. is using because function needs to be in the glocal scope
//deleteRow(1) é para deletar apenas a linha 2
window.clearRow = function() {
  document.getElementById("myForm").reset();
  document.getElementById("myTable").deleteRow(1);
  document.getElementById("myTable").style.display = 'none';
  document.getElementById("buy_message").style.display = 'none';
  var modal = document.getElementById('myModal');
  modal.setAttribute('data-target', '');
}

//Refresh the form if the user press "esc" in modal
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      document.getElementById("myForm").reset();
      document.getElementById("myTable").deleteRow(1);
      document.getElementById("myTable").style.display = 'none';
      document.getElementById("buy_message").style.display = 'none';
      var modal = document.getElementById('myModal');
      modal.setAttribute('data-target', '');
    }
};

//Show message to confirm the payment in modal
window.toBuy = function() {
  document.getElementById('buy_message').style.display = '';
}
