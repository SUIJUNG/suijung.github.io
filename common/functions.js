function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
		setCookie("JB","DONE",30);
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Exploit Complete ✔"; }, 500);
    } else{
        	setTimeout(function(){document.getElementById("progress").innerHTML="Jailbreak failed! Reboot your PS4 and try again!!"; }, 500);
    }
}

function payload_finished()
{
	setCookie("JB","DONE",30);
	setTimeout(function(){document.getElementById("progress").innerHTML="Load Successful!!"; }, 3000);
	setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Payload Loaded Succesfully ✔"; }, 7000);
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_JB()
{	var jbDone=getCookie("JB");
	if (jbDone == "" || jbDone == "START"){
		setCookie("JB","START",30);
		exploit();	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Exploit Complete ✔"; }, 500);
	}
}

function exploit(){
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">Running Jailbreak Exploit!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";</scr'+'ipt>');
	}
	setTimeout(function(){document.write(JB('jb'));}, 500);
}

function load_payload(payload)
{	
    if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">Loading! Please Wait!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="Loading! Please Wait!!";</scr'+'ipt>');
	}
	setCookie("JB","START",30);
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');}, 500);
}

function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(name, value, mins) {
  var d = new Date();
  d.setTime(d.getTime() + (mins*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
