$(function() {

    $('#app button').on('click', function() {

        $.ajax({
            method: 'GET',
            url: 'http://ip-api.com/json/?fields=query,city,country,regionName/',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",

            success: function(data) {
                $.each(data, function(i, stat) {
                    console.log(i, ":", stat);
                })
        
            }
        })

    });

})