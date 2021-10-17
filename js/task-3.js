$(function () {

    $('#app button').on('click', function () {

        $.ajax({
            method: 'GET',
            url: 'http://ip-api.com/json/?fields=continent,country,regionName,city,query',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",

            success: function (data) {

                const cityItem     = document.querySelector('#city span'),
                      countryItem  = document.querySelector('#country span');
                      regionItem   = document.querySelector('#region span'),
                      continet     = document.querySelector('#continent span'),

                

                cityItem.innerHTML = data.city;
                countryItem.innerHTML = data.country;
                regionItem.innerHTML = data.regionName;
                continet.innerHTML = data.city;

            }
        })

    });

})