function addModalListener(){
    $(".bg-click").click(function(e){
        gsap.to($(".modal"),{scale:0, duration:0.8});
        
    });
}

function initListeners(){

    $("#submit").click(function(e){
        e.preventDefault();
        let text = $("#callout-text").val();
        gsap.to($(".modal"),{
            scale:0, 
            duration:0.8, 
            onComplete: showAlert,
            onCompleteParams:[text]
        });
        window.alert("Login Sucessful")
    })

     $("#showModal").click(function(e){
    addModalListener();
    gsap.to($(".modal"),{
        scale:1, 
        duration:0.8,
        onComplete:showAlert, 
        });

    });


}


function showAlert(info){
    console.log("hi " + info);
    $("#callout-text").val("")
}


$(document).ready(function(){
    gsap.set($(".modal"),{scale:0});

    initListeners();

});