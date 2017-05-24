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


  var workList = {

    run: function() {
      this.showPost();
      console.log('work object call');
    },
    showPost: function() {
      $('#work .posts li ').each(function(index, el) {
        $(this).on('click', function(event) {
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
      var work = "<div class='work-popup-outer animated fadeInDown'>" +
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

  workList.run();



});
