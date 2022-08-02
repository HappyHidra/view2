$(document).ready(function () {
    $(".action_btn").on("click", function (e) {
      e.preventDefault(); //отменить выполнение действия по умолчанию
      let elem = document.querySelector("li.active");
      elem.className = '';
      let newActive = elem.nextElementSibling == null ? document.querySelector('#firstLi') : elem.nextElementSibling;
      newActive.className = "active";
    //   console.log(elem.nextElementSibling)
    });
  });
  