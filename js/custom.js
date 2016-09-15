(function () {
    var observer = new FontFaceObserver('Source Sans Pro', {
        weight: 400
    });

    observer.check()
        .then( function(){
            $('body').addClass('fonts-loaded');
        });

    $(window).scroll(function () {
        var scrolled = $(document).scrollTop();
        //var vertical = $('.cover').data('vertical-value');
        //var horizontal = $('.cover').data('vertical-value');
        //$('.cover').css('background-position', horizontal + ' ' + vertical);
    });

    $(document).ready(function () {
        $('form#bookNow').submit(function(e) {
            var checkInDate = toDateObject('#checkInDate');
            var numberOfNightsToAdd = $("#numberOfNights").val();
            var checkOutDate = toDateObject('#checkInDate').addNights(numberOfNightsToAdd);

            var dd = checkOutDate.getDate();
            var mm = checkOutDate.getMonth();
            var yyyy = checkOutDate.getFullYear();
            var checkOutDateFormatted = yyyy + '-'+ mm + '-'+ dd;

            $("#checkOutDate").val(checkOutDateFormatted);

            return true;
        });

        var $container = $('.masonry-container');
        $container.imagesLoaded( function () {
            $container.masonry({
                columnWidth: '.item',
                itemSelector: '.item'
            });
        });
    });



    function toDateObject(selector) {
        var from = $(selector).val().split("-");
        return new Date(from[0], from[1], from[2]);
    }

    Date.prototype.addNights = function(days)
    {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + parseInt(days));
        return dat;
    }

})();
