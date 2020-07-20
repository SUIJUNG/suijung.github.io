var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0)
    {
        alert("Jailbreak Complete!");
    }
    else if(confirmJailbreak)
        alert("Jailbreak failed! Reboot your PS4 and try again.");
	else
		alert("Jailbreak Skipped!! Start running Payloads !!");
}

function mira_finished()
{
	setTimeout(function(){alert("You're all set!!"); }, 5000);
}

function payload_finished()
{
    alert("Load Successful!!");
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function MIRA(x)
{
    return SC('mira/'+x);
}

function JB(x)
{
    return SC('jb/'+x);
}

function load_mira()
{
    document.write(MIRA('mira')+MIRA('mira2')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<table id="table" align="center" style="width:500px;margin-top:150px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_mira_nohb()
{
    document.write(MIRA('mira')+MIRA('mira3')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<table id="table" align="center" style="width:500px;margin-top:150px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_JB()
{	
	confirmJailbreak = confirm("Shall We Start with PS4 Jailbreak 6.72?\nNote: Click 'Cancel' if Jailbreak is already Complete after Starting your PS4!!")
	if(confirmJailbreak){
		document.write(JB('c-code')+'<script>jb_finished();</scr'+'ipt>');
	}
}

function load_netcat()
{
    document.write(MIRA('mira')+MIRA('c-code')+'<script>alert("Awaiting Payload !!");</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<table id="table" align="center" style="width:500px;margin-top:150px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>PS4 Jailbreak 6.72</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'</table>');
	}
}