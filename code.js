$(document).ready(function(){
    $("form").submit(DayEvents);
});

function DayEvents(e){
    e.preventDefault();

    let day = $("input[type=radio][name=day]:checked").val();

    let message;

    switch (day){
        case "Monday":
            message = "JavaScript: 12:30pm - 4:20pm Exercise: 5:00pm - 6:00pm"
            break;
        case "Tuesday":
            message = "Work: 8:30am - 4:00pm Exercise: 5:00pm - 6:00pm"
            break;
        case "Wednesday":
            message = "Study: 8:30am - 12:00pm Javascript: 12:30pm - 4:20pm"
            break;
        case "Thursday":
            message = "Work: 8:30am - 4:00pm Exercise: 5:00pm - 6:00pm"
            break;
        case "Friday":
            message = "Work: 2:00pm - 7:00pm "
            break;
        case "Saturday":
            message = "Work: 8:30am - 1:00pm Exercise: 5:00pm - 6:00pm"
            break;
        case "Sunday":
            message = "Exercise: 12:00pm - 1:00pm Study: 2:00pm - 4:00pm"
            break;


    }
    $("p#scheduleOutput").text(message);
}