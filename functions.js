var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0)
    {
        alert("Selesaikan Jailbreak!");
    }
    else if(confirmJailbreak)
        alert("Jailbreak gagal! Restart PS4 Anda dan coba lagi.");
	else
		alert("Jailbreak Dilewati !! Mulai jalankan Muatan !!");
}

function mira_finished()
{
	setTimeout(function(){alert("Muat Berhasil !!"); }, 8000);
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
		document.write('<center><td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a></td>'+
						'</table>');
	}
}

function load_JB()
{	
	confirmJailbreak = confirm("Haruskah Kita Mulai dengan PS4 Jailbreak 6.72?\nNote: Klik 'Cancel' jika Jailbreak sudah Selesai setelah Memulai PS4 Anda!!")
	if(confirmJailbreak){
		document.write(JB('c-code')+'<script>jb_finished();</scr'+'ipt>');
	}
}
