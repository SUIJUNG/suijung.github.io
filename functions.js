var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
	alert("Jailbreak Complete!");
    } else{
        alert("Jailbreak gagal! Nyalakan kembali PS4 Anda dan coba lagi.");
    }
}

function payload_finished()
{
    setTimeout(function(){alert("HEN BERHASIL !!"); }, 4000);
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
{	
	confirmJailbreak = confirm
	if(confirmJailbreak){
		document.write(JB('set1')+JB('set2')+JB('set3')+JB('set4')+JB('jb')+'<script>jb_finished();</scr'+'ipt>');
	}
}

function load_payload(payload)
{
    document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');
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
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+							
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'</tr>'+
						'</table>');
	}
}
