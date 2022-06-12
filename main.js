var ascii = {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z', 26: 'A', 27: 'B', 28: 'C', 29: 'D', 30: 'E', 31: 'F', 32: 'G', 33: 'H', 34: 'I', 35: 'J', 36: 'K', 37: 'L', 38: 'M', 39: 'N', 40: 'O', 41: 'P', 42: 'Q', 43: 'R', 44: 'S', 45: 'T', 46: 'U', 47: 'V', 48: 'W', 49: 'X', 50: 'Y', 51: 'Z', 52: '1', 53: '2', 54: '3', 55: '4', 56: '5', 57: '6', 58: '7', 59: '8', 60: '9', 61: '0',62:" "}

function ex(prog) {
	var ary = []
	for (var a=0;a<255;a++){ary[a]=0}
	var indx = 0

	for (var it=0;it<prog.length;it++){
	var i = prog[it]
	if (i == "+"){
		ary[indx]+=1;
		ary[indx]=ary[indx]%255
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
		var inp = prompt()
		if (inp == null){inp=0}
		
		ary[indx] = Number(inp%255)
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
if (i==":"){

	print(ascii[ary[indx]])
}
if (i==";"){

	print(ascii[ary[indx]],"")
}
if (i=="#"){
	indx = 0
}	
if (i=="`"){
	var crsh=''
	for (var i_=0;i_<ary.length;i_++){
		crsh+=String(ary[i_])
		crsh+=";"
	}
	print(crsh)
}//new feature -- return hex value of array dump
		if (i=="&"){
	var crsh=''
	for (var i_=0;i_<ary.length;i_++){
		crsh+=String(parseInt(ary[i_], 10).toString(16)).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
		crsh+=";"
	}
	print(crsh)
}
	}	
}
function print(txt,brk="<br>"){
	document.getElementById("stdout").innerHTML += (txt)
	document.getElementById("stdout").innerHTML += (brk)
}

