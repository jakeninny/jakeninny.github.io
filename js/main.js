// $(document).ready(function(){
//   $(".post-image").hide();
//
//   $('.posts li').hover(function() {
//     $(this).show( $(".post-image") );
//   }, function() {
//     $( this ).find( ".post-image" ).hide();
//   });
// });

$(document).ready( function(){

  var purp = $('#square-purp');
  var green = $('#square-green');

  //shout out to Legion btw

  function randomPosition() {
    // Minimum 0 and maximum 80%. You can change that.
    return Math.max(0, Math.min(50, Math.ceil(Math.random() * 100)));

  }

  function randomSize(){

    return Math.floor(Math.random() * 400) + 1;

  }

  function resize() {

    $(purp).css('height', randomSize());
    $(green).css('height', randomSize());

    $(purp).css('width', randomSize());
    $(green).css('width', randomSize());
  }

  function reposition() {
    $(purp).css('top', randomPosition() + '%');
    $(green).css('top', randomPosition() + '%');

    $(purp).css('left', randomPosition() + '%');
    $(green).css('left', randomPosition() + '%');

  }

  window.setInterval(function(){
    /// call your function here
    resize();
    reposition();

  }, 3000);


  //SHow content

  setTimeout(function(){

    workList.run();
    console.log('no click show work');

    $('.hidden').fadeIn('slow', function() {

    });

  }, 5000)


  $('#reveal').on('click', function(event) {
    event.preventDefault();

    workList.run();
    console.log('fading in and running work list code');

    $('.hidden').fadeIn('slow', function() {

    });

  });

  var workList = {

    run: function() {
      this.showPost();
      console.log('work object call');
    },
    showPost: function() {
      $('#work .posts li ').each(function(index, el) {
        $(this).on('click',  function(event) {
          event.preventDefault();
          console.log(this);

          var link = $(this).find('a').attr('href');
          console.log(index + " " +link);

          $.get(link, function(data){

            var content = $(data).find('.post-container');
            console.log(content);

            // console.log(data);
            $('.site-container').prepend(workList.workFrame());
            $('.work-popup').html(content);
            workList.removeWork();

            $(this).on('click',  function(event) {
              event.preventDefault();
              /* Act on the event */
            });

          });

          /* Act on the event */
        });

      });
    },
    workFrame: function() {
      var work = "<div class='work-popup-outer'>" +
                  "<div class='close-work'> Close </div>" +
                  "<div class='work-popup'> </div>" +
                 "</div>";

      return work;
    },
    removeWork: function() {
      // $('.work-popup-outer');
      console.log('remove test ' + $('.work-popup-outer') );

      $('.work-popup-outer').on('click', '.close-work', function(event) {
        event.preventDefault();
        $('.work-popup-outer').remove();
        /* Act on the event */
      });

      $('body').on('click', function(event) {
        // event.preventDefault();
        /* Act on the event */
        $('.work-popup-outer').remove();
      });

      $('.work-popup-outer').on('click', function(event) {
        event.stopPropagation();

        /* Act on the event */
      });

      // $('body').on('click',  function(event) {
      //   if(!$('.work-popup-outer') ) {
      //     $('.work-popup-outer').remove();
      //   }
      //   /* Act on the event */
      // });

    }

  };



});
