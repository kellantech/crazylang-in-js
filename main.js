function ex(prog) {
	var ary = []
	for (var a=0;a<255;a++){ary[a]=0}
	var indx = 0

	for (var it=0;it<prog.length;it++){
	var i = prog[it]
	if (i == "+"){
		ary[indx]+=1;
		ary[indx]%=255
	}
	if (i == "-"){
		if(ary[indx]==0){
			ary[indx]=255
		}
		else{ --ary[indx]}
	}
	if (i=="."){
		print(ary[indx])
	}
	if (i==","){
		ary[indx] = prompt()
	}
	if (i==">"){
		indx+=1
		indx%=255
	}
	if (i == "<"){
		if(indx==0){
			indx=255
		}
		else{ --indx}
	}
	if (i=="?"){
		print(indx)
	}	
	}
}
function print(txt,brk="<br>"){
	document.getElementById("stdout").innerHTML += (txt)
	document.getElementById("stdout").innerHTML += (brk)

}
ex(prompt())
