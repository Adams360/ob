$(function () {

    $('#app button').on('click', function () {


        var state = $('#placeholder').attr('data-state');
        var heading = $('.placeholder__content h1').text('data-state');

        console.log(state);

        if (state === 'start') {

            $('.placeholder__content h1').text('Your location is found!');
            $('.placeholder__content p').text('Take a look or reset.');
            $('.placeholder__content button').text('Reset');

            $('#placeholder').attr('data-state', 'results');


            $.ajax({
                method: 'GET',
                url: 'http://ip-api.com/json/?fields=continent,country,regionName,city,query',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",


                success: function (data) {

                    const cityItem = document.querySelector('#city span'),
                          countryItem = document.querySelector('#country span');
                          regionItem = document.querySelector('#region span'),
                          continet = document.querySelector('#continent span'),


                    cityItem.innerHTML    = data.city;
                    countyItem.innerHTML = data.country;
                    regionItem.innerHTML = data.regionName;
                    continet.innerHTML   = data.continent;

                }
            })


        } else if (state === 'results') {

            $('.placeholder__content h1').text('Want to find out where you are?');
            $('.placeholder__content p').text('Click on the button below to see details on your location');
            $('.placeholder__content button').text('Find Location');

            $('#placeholder').attr('data-state', 'start');

        }


    });

})