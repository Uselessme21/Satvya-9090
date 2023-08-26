// const { json } = require("body-parser");

$(document).ready(function () {
    // Move the button element selection outside of the btn.addEventListener
 
  // const loader_container=$('.loader-container')
  // const loader = $(".loader");

  // Stop the spinning after 2 seconds
  // setTimeout(function() {
  //   loader_container.css('display','none')
  //   // loader.css("animation", "none"); // Remove the animation
  // }, 2000);

  const btn= $('input.mybutton[type="submit"]')
    btn.click(async (e) => {
        e.preventDefault();

      
        const name = $("input.name").val();
        const email = $("input.email").val();
        const phone = $("input.phone").val();
        const location = $('input.location').val();

        
           
            const requestData = {
                name: name,
                email: email,
                phone: phone,
                location: location
            };

            // Send the Ajax request
        const response = await $.ajax({
                type: "POST",
                url: 'http://localhost:2000/register/book',
                data: JSON.stringify(requestData), // Send the data object

                contentType: "application/json",
                beforeSend: function () {
                    console.log('hello befor')
                },
                success: function(response) {
                    // Executed when the request is successful
                    console.log(response);
                    console.log('hello');
                  },
                  error: function(xhr, status, error) {
                    // Executed when the request encounters an error

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        // footer: '<a href="#">Why do I have this issue?</a>'
                      }) 
                    console.error('Ajax error:', error, status, xhr);
                  },
                  complete: function(xhr, status) {
                    // Executed after the request is complete, regardless of success or error
                    console.log('Request completed:', status);
                  },
                  statusCode: {
                    401: function() {
                        Swal.fire({
                            icon: 'info',
                            title: 'request Pending',
                            text: ' Your Previous request is still Pending, We will connect with you soon',
                            // width: 500,
                            padding: '0.2em',
                            color: '#512DA8',
                            background: '#fff',
                            backdrop: `
                              rgba(0,0,123,0.4)
                              url("../images/1.jpg")
                              left top
                              no-repeat
                            `
                            // footer: '<a href="">Why do I have this issue?</a>'
                          })
                    //   console.log('Resource not found');
                    }
                    // Add more status codes and functions as needed
                  }
            });
            // .done(function(response) {
            //     // Executed when the request is successful (alternative way)
            //     console.log('Done:', response);
            //   });
      
  });

  const citySelect = $(".city");
  const subcity=$("sub_city")
  // Load previously selected city from local storage (if available)
  const selectedCity = localStorage.getItem("selectedCity");
  if (selectedCity) {
    citySelect.val(selectedCity);
  }

  // Listen for changes in the dropdown selection
  citySelect.change(function() {
    const selectedValue = $(this).val();
    localStorage.setItem("selectedCity", selectedValue);
  });
});
