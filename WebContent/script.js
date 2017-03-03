function getGreeting(d)
{
    var greeting = new String();
    var hour = d.getHours();
    
    if (hour < 5){
        greeting = "Hello Night Owl";
    }
    else if (hour < 12){
        greeting = "Good Morning";
    }
    else if (hour < 17){
        greeting = "Good Afternoon";
    }
    else if (hour < 22){
        greeting = "Good Evening";
    }
    else{
        greeting = "Hello Night Owl";
    }
    
    return greeting;
}

window.onload = function() {
    var date = new Date();
    greeting = getGreeting(date);
    
    var header = document.getElementById("greeting");
    header.innerHTML = greeting;
}
