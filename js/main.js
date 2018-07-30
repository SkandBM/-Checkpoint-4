function bold(){
	var ban = document.getElementById("box");
       	if( ban.style.fontWeight =='bold')
   	{
    	        ban.style.fontWeight = 'normal';
   	}

   	    else{
   		        ban.style.fontWeight = 'bold';
   	}
} 

function italic(){
	var ban = document.getElementById("box");
		if (ban.style.fontStyle =='normal')
	{
				ban.style.fontStyle = 'italic';
	}	
		
		else{
				ban.style.fontStyle = 'normal';
	}

}

function underline(){
		var ban = document.getElementById("box");
		console.log(ban.style.textDecoration)
		if(ban.style.textDecoration == 'none')
	{
				ban.style.textDecoration = 'underline'
	}

		else{
				ban.style.textDecoration = 'none'
    }
}   

function fontFamily(){
	 document.getElementById("box").style.fontFamily= document.getElementById("font").value;
}

function changeSize(){
	 document.getElementById("box").style.fontSize= document.getElementById("ssize").value+'px'
}