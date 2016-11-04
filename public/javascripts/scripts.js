(function($){
    // Accordion
    $('.ac-title').click(function(){
       $(this).parents('.ac-row').toggleClass('active');
       $(this).siblings('.ac-content').slideToggle();
    });

    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

  var employeeID = 0;

  getData(8);

  function getData (id) {
    $.ajax({
      url: '/data/',
      method: 'GET'
    }).done(function(data) {
      var profiles = data;
      for (var i = 0; i < id; i++) {
        appendEmpToDom(profiles);
        employeeID++;
      }
    })
  }

  function appendEmpToDom(emp) {
    var $profile = "<div class='profile'><img src='/images/employees/" + emp[employeeID].image + "'/>" + "<div class='hidden-info'><div class='team__container--text'><h2>"
      + emp[employeeID].name.first + ""
      + emp[employeeID].name.last + "</h2><h4>"
      + emp[employeeID].position + "</h4></div></div></div>";
    $('.team__container').append($profile);
  }

///////////////////////////////////////////////////
// On Click the button will load 4 more employees
//////////////////////////////////////////////////
  $('#load-more').on('click', function() {
    getData(4);
  });

})(jQuery);