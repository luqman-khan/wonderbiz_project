var today = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var $event = [];
var daychange = today.getDay();
var add_day = 0;

$(".document").ready(function() {
	check_events_div();
	check_buttons();
	check_add();
	set_day_date();
});

function check_events_div(){
	for(var i=0; i<5; i++)
	{
		if( $event[daychange] == null || $event[daychange][i] == null)
		{
			$("#"+(i+1)).hide();
		}
		else
		{
			$("#"+(i+1)).show();
			$("#"+(i+1)+"_text").text($event[daychange][i]);
		}
	}
};

function check_buttons(){
	if(daychange == 0){
		$("#prev").hide();
		$("#next").show();
	}
	if(daychange == 6){
		$("#prev").show();
		$("#next").hide();
	}
}

function check_add(){
	for(var i=0; i<5; i++)
	{
		if( $event[daychange] == null || $event[daychange][i] == null)
		{
			$(".event_entry").show();
			break;
		}
		else
		{
			$(".event_entry").hide();
		}
	}
}

function set_day_date(){
	$("#day").text(days[daychange]);
	var currentDate = new Date(+new Date() + (86400000*add_day));
	$("#date").text( currentDate.getDate()+"/"+currentDate.getMonth()+"/"+currentDate.getFullYear());
}


$("#add_event").click(function() {
	add_event();
});
function add_event(){
	if( $("#event_txt_box").val() != null && $("#event_txt_box").val() != "")
	{
		for(var i=0; i<5; i++)
		{
			if($event[daychange] == null || $event[daychange][i] == null)
			{
				if($event[daychange] == null)
				{
					$event[daychange] = [];
				}
				$event[daychange][i] = $("#event_txt_box").val();
				$("#"+(i+1)+"_text").text($event[daychange][i]);
				check_events_div();
				check_add();
				$("#event_txt_box").val(null);
				break;
			}
		}
	}
	else
	{
		alert("Please enter an event");
	}
}


function delete_event(i){
	$event[daychange][i] = null;
	check_events_div();
	check_buttons();
	check_add();
}

$("#prev").click(function(){
	if( daychange == today.getDay())
	{
		$("#prev").hide();
	}
	else
	{
		$("#prev").show();
		daychange--;
		add_day--;
	}
	check_events_div();
	check_buttons();
	check_add();
	set_day_date();
});

$("#next").click(function(){
	if( daychange == today.getDay()+6)
	{
		$("#prev").hide();
	}
	else
	{
		$("#prev").show();
		daychange++;
		add_day++;
	}
	check_events_div();
	check_buttons();
	check_add();
	set_day_date();
});
