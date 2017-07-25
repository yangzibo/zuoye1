function fnTab(x,y,even){
	var oBox=document.getElementById(x);
	var oul=document.getElementById(y);
	var ali=oul.getElementsByTagName('li');
	var aDiv=oBox.getElementsByTagName('div');
	
	for(var i=0;i<ali.length;i++){
		
		ali[i].index=i;
		
		ali[i][even]=function(){
			
			for(var i=0;i<ali.length;i++){
				ali[i].className='';
				aDiv[i].className='';
			}
			
			this.className='active';
			//alert(this.index);
			aDiv[this.index].className='active';	
		};	
	}
}
function fnn(x,y,even){
	var oBox=document.getElementById(x);
	var oul=document.getElementById(y);
	var ali=oul.getElementsByTagName('li');
	var aDiv=oBox.getElementsByTagName('div');
	
	for(var i=0;i<ali.length;i++){
		
		ali[i].index=i;
		
		ali[i][even]=function(){
			
			for(var i=0;i<ali.length;i++){
				ali[i].className='';
				aDiv[i].className='';
			}
			
			this.className='active';
			//alert(this.index);
			aDiv[this.index].className='show';	
		};	
	}
}
function fn(m,n,even){
	var oBox=document.getElementById(m);
	var oul=document.getElementById(n);
	var adiv=oBox.getElementsByTagName('div');
	var spans=oul.getElementsByTagName('span');
	
	for(var i=0;i<spans.length;i++){
		
		spans[i].index=i;
		
		spans[i][even]=function(){
			
			for(var i=0;i<spans.length;i++){
				spans[i].className='';
				adiv[i].className='';
			}
			
			this.className='active';
			//alert(this.index);
			adiv[this.index].className='active';	
		};	
	}
}