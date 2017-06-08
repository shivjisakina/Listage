// Pseudo Code

// Basic HTML
// Document.ready

// on click of search button on user input form
    // Get user input
    // Display searched items in "Aopend: Products"
// Enable scroll arrows


// on click of appended product search item
    // Append to middle section/row

// Questions to calculate form
    // user input on how long until they want it back on their list
    // Maybe have an "ADD NOW" button(?) and a "1 TIME ONLY ADD" button (?)


// on click function when user adds products
    // Wait for the selected amount of time to pass
    // Append product to Grocery List row
    // + button to add grocery item to list

// If the users search gives no results
    // Append word to list

//----------------------------------------------------------------------------------------------------------------------

// List of variables and classes/Ids so we all use the same ones

// VARIABLES:
    // var user-input (the users search)
    // var queryURL (the API url)
    // var productOptions (the first row of search results)
    // var p (p tag to store the item names)
    // var productSelected (second row where the users chosen product shows up)
    // var groceryList (when time is up, the product appends to grocery list div)
    // var timeOptions (the options of time the user has)
    // var time (time user has chosen until it appends to the list)
    // var timesUp (when the time is up)
    // var coupons (the coupons we find)

// CLASSES:
    // class = searchForm
    // class = productOptions (img class)
    // class = productSelected (img class)
    // class = addTime (the amount of time the user selected)
    // class = newProduct (when a new product is added, we prepend it to the list)

// IDS:
    // ids suck so were sticking to classes

//----------------------------------------------------------------------------------------------------------------------

// THINGS TO REMEMBER:

// TEST EVERYTHING
// CONSOLE LOG EVERYTHING

//----------------------------------------------------------------------------------------------------------------------

// WALMART API DOCS

/* PARAMETERS
apiKey	Your API access key.
format	Type of response required, allowed values [json, xml]. Default is json.
ids	Comma separated list of item ids

API KEY: 3xy3dz4kywkwwkkxtjsqv9fj*/


// WIKIPEDIA API DOCS

// PARAMETERS

// GOOGLE MAPS API

// PARAMETERS AND RATE LIMIT

/* RATE LIMIT: 25,000 map loads per 24 hours */


//----------------------------------------------------------------------------------------------------------------------


// Document ready function
$(document).ready (function() {
    console.log("ready");

    $("#download-button").on("click", function(){
            event.preventDefault();
            console.log(this);
            $('#listbody').removeClass('hide');
    });

    // On click function for the search button
    $(".searchForm").on("click", function(){

        // Prevent default browser settings
        event.preventDefault();
        //console.log("search button working");

        // Creating variables to pull the query url from the user-input class
        var productOptionsWal = $(".userInput").val();
        var queryURLWal = "https://cors-bcs.herokuapp.com/https://api.walmartlabs.com/v1/search?query=" + productOptionsWal + "&format=json&apiKey=3xy3dz4kywkwwkkxtjsqv9fj"; //&lsPublisherId={Your LinkShare Publisher Id}"
        console.log(productOptionsWal);
        console.log(queryURLWal);

        var productOptionsWiki = $(".userInput").val();
        var queryURLWiki = "https://cors-bcs.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=" + productOptionsWiki;
        console.log(productOptionsWiki);
        console.log(queryURLWiki);

        // Pulling AJAX request from Walmart API
        $.ajax({
            url: queryURLWal
        }).done(function (response) {
            console.log(response);

            // Transfer content to HTML
            $(".productOptions1").html("<img src=" + "'" + response.items["0"].mediumImage + "'class='proImage'" + "<br>" + response.items["0"].name + ">" );
            $(".productOptions2").html("<img src=" + "'" + response.items["1"].mediumImage + "'class='proImage'" + "<br>" + response.items["1"].name + ">" );
            $(".productOptions3").html("<img src=" + "'" + response.items["3"].mediumImage + "'class='proImage'" + "<br>" + response.items["2"].name + ">" );
        });

        // Pulling AJAX request
        $.ajax({
            url: queryURLWiki
        }).done(function (response) {
            console.log(response);

            /*// Transfer content to HTML
            $(".productOptions1").html("<img src=" + "'" + response.query.pages[7089].images["0"].title + "'"+ ">" + "<br>" + response.query.pages[7089].title);
            $(".productOptions2").html("<img src=" + "'" + response.query.pages[7089].images["1"].title + "'"+ ">" + "<br>" + response.query.pages[7089].title);
            $(".productOptions3").html("<img src=" + "'" + response.query.pages[7089].images["2"].title + "'"+ ">" + "<br>" + response.query.pages[7089].title);*/

        });
    });
    
    // When the user clicks on a product options 1, it will append to the productSelected class
    $(document).on("click", ".proImage", function(){

        $(".productSelected").append(this);
        $('#addButton').removeClass('hidden');
        console.log(this);
    });

    $("#timer1").on("click", function(){
        var timeLeft = 5;
        var timerId = setInterval(countdown, 1000);
        console.log(timeLeft);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
                $(document).on("click", ".proImage", function(){
                    $("#listItems").append(this);
                    console.log(this);
                });

            } else {
                span = document.getElementById("timer");
                span.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    })


});


    