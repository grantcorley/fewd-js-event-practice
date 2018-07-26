(function () {

  // your js goes here
  //console.log("success");

  //var row = document.querySelector(row);
  var row = document.querySelector('.row');

  var button02 = document.querySelector('.row .col-sm-4:nth-child(2) button');


  row.addEventListener('click', onClick);

  function onClick(e){
    
    //console.log(e.target.innerHTML);
    
    var theButton = e.target;
    var buttonName = e.target.innerHTML;

    if(buttonName === "button one"){
         theButton.classList.toggle("button-danger");
    }

    if(buttonName === "button two"){
      theButton.innerHTML = "you clicked me";
    }


    if(buttonName === "button three"){
      button02.innerHTML = "button two";
    }



  }


/*
  var button01 = document.querySelector('.row .col-sm-4:nth-child(1) button');
  var button02 = document.querySelector('.row .col-sm-4:nth-child(2) button');
  var button03 = document.querySelector('.row .col-sm-4:nth-child(3) button');

  button01.addEventListener('click', onClickButtonOne);
  button02.addEventListener('click', onClickButtonTwo);
  button03.addEventListener('click', onClickButtonThree);



  function onClickButtonOne(){
    console.log("onClickButtonOne()");
    button01.classList.toggle("button-danger");
  }

  function onClickButtonTwo(e){
    console.log("onClickButtonTwo()");
    e.target.innerHTML = "you clicked me";
  }

  function onClickButtonThree(){
    console.log("onClickButtonThree()");
    button02.innerHTML = "button two";
  }
*/

})();
