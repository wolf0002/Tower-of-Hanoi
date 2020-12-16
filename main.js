var canvas1=document.getElementById("can1");
var elemLeft = canvas1.offsetLeft + canvas1.clientLeft;
var elemTop = canvas1.offsetTop + canvas1.clientTop;
var canvas2=document.getElementById("can2");
var elemLeft2 = canvas2.offsetLeft + canvas2.clientLeft;
var elemTop2 = canvas2.offsetTop + canvas2.clientTop;
var canvas3=document.getElementById("can3");
var elemLeft3 = canvas3.offsetLeft + canvas3.clientLeft;
var elemTop3 = canvas3.offsetTop + canvas3.clientTop;
var ctx1=canvas1.getContext("2d");
var ctx2=canvas2.getContext("2d");
var ctx3=canvas3.getContext("2d");
var ADiscs=new Array();
var BDiscs=new Array();
var CDiscs=new Array();
var AtoB=false;
var AtoC=false;
var BtoC=false;
var BtoA=false;
var CtoA=false;
var CtoB=false;
var n;
var myAudio=document.getElementById("myAudio");
var myAudio1=document.getElementById("myAudio1");
var myAudio2=document.getElementById("myAudio2");
function initialiser()
{
	var xi=90;
	var yi=500;
	var wi=220;
	ADiscs=[];
	BDiscs=[];
	CDiscs=[];
	n=document.getElementById("inp").value;
	for (var i = n; i >=1; i--) {
		var A=new Object();
		xi=xi+10;
		wi=wi-20;
		A.x=xi;
		A.y=yi;
		A.w=wi;
		A.v=i;
		ADiscs.push(A);
	}
}
canvas1.addEventListener("click",function(e)
{
	var bx=e.pageX-elemLeft;
	var by=e.pageY-elemTop;
	if(bx>350 && by>10 && bx<390  && by<50 && ADiscs.length>0)
	{
		AtoB=true;
	}
},false);
canvas1.addEventListener("click",function(e)
{
	var cx=e.pageX-elemLeft;
	var cy=e.pageY-elemTop;
	if(cx>350 && cy>60 && cx<390  && cy<100 && ADiscs.length>0)
	{
		AtoC=true;
	}
},false);
canvas2.addEventListener("click",function(e)
{
	var cx=e.pageX-elemLeft2;
	var cy=e.pageY-elemTop2;
	if(cx>350 && cy>10 && cx<390  && cy<50 && BDiscs.length>0)
	{
		BtoC=true;
	}
},false);
canvas2.addEventListener("click",function(e)
{
	var ax=e.pageX-elemLeft2;
	var ay=e.pageY-elemTop2;
	if(ax>350 && ay>60 && ax<390  && ay<100 && BDiscs.length>0)
	{
		BtoA=true;
	}
},false);
canvas3.addEventListener("click",function(e)
{
	var ax=e.pageX-elemLeft3;
	var ay=e.pageY-elemTop3;
	if(ax>350 && ay>10 && ax<390  && ay<50 && CDiscs.length>0)
	{
		CtoA=true;
	}
},false);
canvas3.addEventListener("click",function(e)
{
	var bx=e.pageX-elemLeft3;
	var by=e.pageY-elemTop3;
	if(bx>350 && by>60 && bx<390  && by<100 && CDiscs.length>0)
	{
		CtoB=true;
	}
},false);

function draw1()
{
	ctx1.beginPath();
	ctx1.moveTo(canvas1.width/2,canvas1.height);
	ctx1.lineTo(canvas1.width/2,60);
	ctx1.strokeStyle="grey";
	ctx1.lineWidth="10";
	ctx1.stroke();
	ctx1.closePath();
	for (var i = 1; i <=ADiscs.length; i++) {
		ctx1.beginPath();
		ctx1.rect(ADiscs[i-1].x, canvas1.height-i*30, ADiscs[i-1].w, 28);
		ctx1.fillStyle="#03a9fc";
		ctx1.fill();
		ctx1.closePath();
		ctx1.beginPath();
		ctx1.font="26px Arial";
		ctx1.fillStyle="black";
		ctx1.fillText(ADiscs[i-1].v,ADiscs[i-1].x+4,canvas1.height+26-i*30);
		ctx1.closePath();
	}
	ctx1.beginPath();
	ctx1.arc(canvas1.width-30,30,20,0,Math.PI*2,true);
	ctx1.fillStyle="#fca903";
	ctx1.fill();
	ctx1.closePath();
	ctx1.beginPath();
	ctx1.arc(canvas1.width-30,80,20,0,Math.PI*2,true);
	ctx1.fillStyle="#00ffb3";
	ctx1.fill();
	ctx1.closePath();
	ctx1.beginPath();
	ctx1.font="34px Arial";
	ctx1.fillStyle="black";
	ctx1.fillText("B",canvas1.width-40,42);
	ctx1.closePath();
	ctx1.beginPath();
	ctx1.font="34px Arial";
	ctx1.fillStyle="black";
	ctx1.fillText("C",canvas1.width-42,92);
	ctx1.closePath();
	ctx1.beginPath();
	ctx1.font="40px Arial";
	ctx1.fillText("A",4,canvas1.height-4);
	ctx1.closePath();
}
function draw2()
{
	ctx2.beginPath();
	ctx2.moveTo(canvas1.width/2,canvas1.height);
	ctx2.lineTo(canvas1.width/2,60);
	ctx2.strokeStyle="grey";
	ctx2.lineWidth="10";
	ctx2.stroke();
	ctx2.closePath();
	for (var i = 1; i <=BDiscs.length; i++) {
		ctx2.beginPath();
		ctx2.rect(BDiscs[i-1].x, canvas2.height-i*30, BDiscs[i-1].w, 28);
		ctx2.fillStyle="#03a9fc";
		ctx2.fill();
		ctx2.closePath();
		ctx2.beginPath();
		ctx2.font="26px Arial";
		ctx2.fillStyle="black";
		ctx2.fillText(BDiscs[i-1].v,BDiscs[i-1].x+4,canvas2.height+26-i*30);
		ctx2.closePath();
	}
	ctx2.beginPath();
	ctx2.arc(canvas2.width-30,30,20,0,Math.PI*2,true);
	ctx2.fillStyle="#fca903";
	ctx2.fill();
	ctx2.closePath();
	ctx2.beginPath();
	ctx2.arc(canvas2.width-30,80,20,0,Math.PI*2,true);
	ctx2.fillStyle="#00ffb3";
	ctx2.fill();
	ctx2.closePath();
	ctx2.beginPath();
	ctx2.font="34px Arial";
	ctx2.fillStyle="black";
	ctx2.fillText("C",canvas2.width-40,42);
	ctx2.closePath();
	ctx2.beginPath();
	ctx2.font="34px Arial";
	ctx2.fillStyle="black";
	ctx2.fillText("A",canvas2.width-42,92);
	ctx2.closePath();
	ctx2.beginPath();
	ctx2.font="40px Arial";
	ctx2.fillText("B",4,canvas2.height-4);
	ctx2.closePath();
}
function draw3()
{
	ctx3.beginPath();
	ctx3.moveTo(canvas1.width/2,canvas1.height);
	ctx3.lineTo(canvas1.width/2,60);
	ctx3.strokeStyle="grey";
	ctx3.lineWidth="10";
	ctx3.stroke();
	ctx3.closePath();
	for (var i = 1; i <=CDiscs.length; i++) {
		ctx3.beginPath();
		ctx3.rect(CDiscs[i-1].x, canvas3.height-i*30, CDiscs[i-1].w, 28);
		ctx3.fillStyle="#03a9fc";
		ctx3.fill();
		ctx3.closePath();
		ctx3.beginPath();
		ctx3.font="26px Arial";
		ctx3.fillStyle="black";
		ctx3.fillText(CDiscs[i-1].v,CDiscs[i-1].x+4,canvas3.height+26-i*30);
		ctx3.closePath();
	}
	ctx3.beginPath();
	ctx3.arc(canvas3.width-30,30,20,0,Math.PI*2,true);
	ctx3.fillStyle="#fca903";
	ctx3.fill();
	ctx3.closePath();
	ctx3.beginPath();
	ctx3.arc(canvas3.width-30,80,20,0,Math.PI*2,true);
	ctx3.fillStyle="#00ffb3";
	ctx3.fill();
	ctx3.closePath();
	ctx3.beginPath();
	ctx3.font="34px Arial";
	ctx3.fillStyle="black";
	ctx3.fillText("A",canvas3.width-40,42);
	ctx3.closePath();
	ctx3.beginPath();
	ctx3.font="34px Arial";
	ctx3.fillStyle="black";
	ctx3.fillText("B",canvas3.width-42,92);
	ctx3.closePath();
	ctx3.beginPath();
	ctx3.font="40px Arial";
	ctx3.fillText("C",4,canvas3.height-4);
	ctx3.closePath();
}
function draw()
{
	if(CDiscs.length==n && CDiscs.length>0)
	{
		myAudio2.play();
		clearInterval(intrvl);
		alert("Congrates, You Win!");
		document.location.reload();
	}
	ctx1.clearRect(0,0,canvas1.width,canvas1.height);
	ctx2.clearRect(0,0,canvas2.width,canvas2.height);
	ctx3.clearRect(0,0,canvas3.width,canvas3.height);
	if(AtoB)
	{
		if(BDiscs.length==0 || ADiscs[ADiscs.length-1].v<BDiscs[BDiscs.length-1].v){
			var disc=ADiscs.pop();
			BDiscs.push(disc);
			myAudio.play();
		}
		else
		{
			myAudio1.play();
		}
		AtoB=false;
	}
	if(AtoC)
	{
		if(CDiscs.length==0 || ADiscs[ADiscs.length-1].v<CDiscs[CDiscs.length-1].v){
			CDiscs.push(ADiscs[ADiscs.length-1]);
			ADiscs.pop();
			myAudio.play();
		}
		else
		{
			myAudio1.play();
		}
		AtoC=false;
	}
	if(BtoC)
	{
		if(CDiscs.length==0 || BDiscs[BDiscs.length-1].v<CDiscs[CDiscs.length-1].v){
			CDiscs.push(BDiscs[BDiscs.length-1]);
			BDiscs.pop();
			myAudio.play();
		}
		else
		{
			myAudio1.play();
		}
		BtoC=false;
	}
	if(BtoA)
	{
		if(ADiscs.length==0 || BDiscs[BDiscs.length-1].v<ADiscs[ADiscs.length-1].v){
			ADiscs.push(BDiscs[BDiscs.length-1]);
			BDiscs.pop();
			myAudio.play();
		}
		else
		{
			myAudio1.play();
		}
		BtoA=false;
	}
	if(CtoA)
	{
		if(ADiscs.length==0 || CDiscs[CDiscs.length-1].v<ADiscs[ADiscs.length-1].v){
			ADiscs.push(CDiscs[CDiscs.length-1]);
			CDiscs.pop();
			myAudio.play();
		}
		else
		{
			myAudio1.play();
		}
		CtoA=false;
	}
	if(CtoB)
	{
		if(BDiscs.length==0 || CDiscs[CDiscs.length-1].v<BDiscs[BDiscs.length-1].v){
			BDiscs.push(CDiscs[CDiscs.length-1]);
			CDiscs.pop();
			myAudio.play();
		}
		else
		{
			myAudio1.play();
		}
		CtoB=false;
	}
	draw1();
	draw2();
	draw3();
}
var intrvl=setInterval(draw,10);