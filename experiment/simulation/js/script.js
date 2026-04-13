
function navNext()
{
	for(temp=0;temp<14;temp++)
	{
	document.getElementById('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

function animatearrow()
{
	if(document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}
function myStopFunction()
{
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility="hidden";
}

function magic()
{
	if(simsubscreennum==1)
	{ 
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:484px; top:440px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(0deg)";
		document.getElementById('arrow1').style.msTransform="rotate(0deg)";
		document.getElementById('arrow1').style.transform="rotate(0deg)";
		document.getElementById('0-2').style.visibility="visible";
		document.getElementById('0-2').onclick=function(){
		myStopFunction();
		document.getElementById("0-2").onclick = "";
   		
		   document.getElementById('nextButton').style.visibility="visible";
	}

		
	}


else if(simsubscreennum==2)
	{ 
		document.getElementById("0-2").style.visibility = "hidden";
    myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:455px; top:362px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
    document.getElementById('1-1').style.visibility="visible";
    document.getElementById('1-2').style.visibility="visible";
	document.getElementById('1-2').onclick=function() {
    myStopFunction();
    document.getElementById('1-2').onclick="";
	document.getElementById('1-2').style.visibility="hidden";
	document.getElementById('1-3').style.visibility="visible";
	// document.getElementById('tabwithconnector').style.visibility="visible";
    document.getElementById('1-3').style.transformOrigin="2% 54%";
	document.getElementById('1-3').style.animation="stand 2s forwards";
   setTimeout(function(){
	document.getElementById('1-3').style.visibility="hidden";
	// document.getElementById('plainpaper').style.visibility="visible";
	document.getElementById('rodset').style.visibility="visible";
	
	// document.getElementById('rodset').style.animation="rodstand 2s forwards";
	
	// document.getElementById('1-4').style.visibility="visible";
	
	document.getElementById('1-5').style.visibility="visible";

	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:138px; top:291px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.transform="rotate(-180deg)";
    // document.getElementById('1-5').style.visibility="visible";

	document.getElementById('1-5').onclick=function() {
	myStopFunction();
	document.getElementById('1-5').onclick="";
	// document.getElementById('1-5').style.visibility="visible";
	
    document.getElementById('1-5').style.transformOrigin="41% 33%";
	document.getElementById('1-5').style.animation="cap 1s forwards";
	document.getElementById('connector').style.visibility="visible";
				document.getElementById('backpaper').style.visibility="visible";
				document.getElementById('backpaper1').style.visibility="visible";
	setTimeout(function(){
		// document.getElementById('3-2').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
	},1000);
}},2000);

    }
    }

else if(simsubscreennum==3){
	// document.getElementById('connector').style.visibility="hidden";
	
	document.getElementById('rodset').style.visibility="visible";
	document.getElementById('3-2').style.visibility="hidden";
	document.getElementById('1-2').style.visibility="hidden";
	// document.getElementById('1-4').style.visibility="visible";
	document.getElementById('1-5').style.visibility="visible";
	document.getElementById('1-1').style.visibility="visible";
	// document.getElementById('1-5a').style.visibility="visible";
	// document.getElementById('1-5').style.visibility="hidden";
	document.getElementById('1-3').style.visibility="hidden";
	
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:651px; top:121px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById('2-4').style.visibility="visible";
	document.getElementById('2-4').onclick=function()
	{
	myStopFunction();
	document.getElementById('2-4').onclick="";
	document.getElementById('2-4').style.visibility="hidden";
	document.getElementById('2-5').style.visibility="visible";
	document.getElementById('2-5').style.transformOrigin="0 20%";
	document.getElementById('2-5').style.animation="tab 2.5s forwards";
	setTimeout(function(){
		document.getElementById('2-5').style.visibility="hidden";
		document.getElementById('1-5a').style.visibility="hidden";
		document.getElementById('1-5').style.visibility="hidden";
		document.getElementById('2-6').style.visibility="visible";
		document.getElementById('2-2').style.visibility="visible";
		document.getElementById('2-3').style.visibility="visible";

		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:252px; top:259px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.transform="rotate(-90deg)";
		document.getElementById('2-2').style.visibility="visible";
		document.getElementById('2-2').onclick=function()
		{
		myStopFunction();
		document.getElementById('2-2').onclick="";
		document.getElementById('2-2').style.transformOrigin="0 20%";
		document.getElementById('2-2').style.animation="lock1 1s forwards";
		setTimeout(function(){
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById('arrow1').style="visibility:visible; left:252px; top:228px; position:absolute; height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
			document.getElementById('arrow1').style.transform="rotate(-90deg)";
			document.getElementById('2-3').onclick=function()
			{
			myStopFunction();
			document.getElementById('2-3').onclick="";
			document.getElementById('2-3').style.transformOrigin="0 20%";
			document.getElementById('2-3').style.animation="lock2 1s forwards";	
			setTimeout(function(){
				document.getElementById('backpaper').style.visibility="visible";
				document.getElementById('backpaper1').style.visibility="visible";
				document.getElementById('connector').style.visibility="hidden";
				document.getElementById('2-7').style.visibility="visible";
				document.getElementById('2-7').style.visibility="hidden";
				document.getElementById('1-4').style.visibility="hidden";
				document.getElementById('1-5a').style.visibility="hidden";
				document.getElementById('1-1').style.visibility="visible";
				
				
				myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:292px; top:306px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById('connector1').style.visibility="visible";
	document.getElementById('connector1').onclick=function(){
					
					myStopFunction()
				
						
						document.getElementById('3-3').style.visibility="visible";
						document.getElementById('connector1').style.visibility="hidden";
						document.getElementById('3-3').style.transformOrigin="29% 80%";
						document.getElementById('3-3').style.animation="cable 1.5s forwards";	
	
		setTimeout(function(){
			
			document.getElementById('3-4').style.visibility="visible";
			document.getElementById('2-7a').style.visibility="hidden";
			document.getElementById('3-3').style.visibility="hidden";
			document.getElementById('2-3').style.visibility="hidden";
			document.getElementById('2-6').style.visibility="hidden";
			document.getElementById('2-2').style.visibility="hidden";
			
			setTimeout(function(){
				document.getElementById("3-4").style.animation = "hide1 1s forwards";
				document.getElementById("1-1").style.animation = "hide2 1s forwards";
				document.getElementById("rodset").style.animation = "hide3 1s forwards";
				setTimeout(function(){
					document.getElementById('rodset').style.visibility="hidden";
					document.getElementById('3-5').style.visibility="visible";
					
					document.getElementById('text1').style.visibility="visible";
					document.getElementById('3-6').style.visibility="visible";
					document.getElementById('text2').style.visibility="visible";
					document.getElementById("3-5").style.animation = "frontView 1s forwards";
					document.getElementById("text1").style.animation = "frontText 1s forwards";
					document.getElementById("3-6").style.animation = "backView 1s forwards";
					document.getElementById("text2").style.animation = "backText 1s forwards";
					document.getElementById('nextButton').style.visibility="visible";

				},1000);


			},1000);

		},1500);
}
	
// },500);
				
},1000);
			}
		},1000);
	}},2500);
	}}

else if(simsubscreennum==4){
	document.getElementById('3-5').style.visibility="hidden";
	document.getElementById('text1').style.visibility="hidden";
	document.getElementById('3-6').style.visibility="hidden";
	document.getElementById('text2').style.visibility="hidden";
	document.getElementById('4-1').style.visibility="visible";

	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:475px; top:164px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(0deg)";
	document.getElementById('arrow1').style.msTransform="rotate(0deg)";
	document.getElementById('arrow1').style.transform="rotate(0deg)";
	document.getElementById('4-2').style.visibility="visible";
	document.getElementById("4-2").onclick= function (){
	myStopFunction();
		document.getElementById("4-2").onclick = "";
   		document.getElementById("4-1").style.visibility = "hidden";
		document.getElementById("4-2").style.visibility = "hidden";
		document.getElementById('4-3').style.visibility="visible";
		// document.getElementById("4-3").style.animation = "zoomin 1s forwards";
		document.getElementById("4-3").style.animation = "zoominipad 1s forwards";
		document.getElementById('4-4').style.visibility="visible";
		document.getElementById('4-5').style.visibility="visible";
		setTimeout(function(){
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:143px; top:351px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.transform="rotate(-180deg)";
	document.getElementById("4-5").onclick= function (){
		document.getElementById('4-4').style.visibility="hidden";
		document.getElementById('4-5').style.visibility="hidden";
		document.getElementById('4-6').style.visibility="visible";
		document.getElementById('4-7').style.visibility="visible";
		myStopFunction();
		setTimeout(function(){
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById('arrow1').style="visibility:visible; left:297px; top:169px; position:absolute; height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.transform="rotate(-180deg)";
			document.getElementById("4-7").onclick= function (){
			myStopFunction();
			setTimeout(function(){
				document.getElementById('4-6').style.visibility="hidden";
				document.getElementById('4-7').style.visibility="hidden";
				document.getElementById('4-8').style.visibility="visible";
				document.getElementById('4-9').style.visibility="visible";
				document.getElementById('4-10a').style.visibility="visible";
				document.getElementById('4-10b').style.visibility="visible";
				document.getElementById('4-10c').style.visibility="visible";
				setTimeout(function(){
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById('arrow1').style="visibility:visible; left:286px; top:127px; position:absolute; height:30px;";
					document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
					document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
					document.getElementById('arrow1').style.transform="rotate(-180deg)";
					document.getElementById("4-9").onclick= function (){
						myStopFunction();
						document.getElementById('noteText').style.visibility="visible";
						document.getElementById("4-10a").style.animation = "curve1 2.5s forwards";
						document.getElementById("4-10b").style.animation = "curve2 2.5s forwards";
						document.getElementById("4-10c").style.animation = "curve3 2.5s forwards";
						setTimeout(function(){
							document.getElementById('noteText').style.visibility="visible";
							setTimeout(function(){
							document.getElementById('noteText').style.visibility="hidden";
							document.getElementById('noteText1').style.visibility="visible";
						setTimeout(function(){
							document.getElementById('noteText1').style.visibility="hidden";
							document.getElementById('noteText').style.visibility="hidden";
							document.getElementById('4-11').style.visibility="visible";
							document.getElementById('paper3').style.visibility="visible";
							document.getElementById('4-12').style.visibility="visible";
							myInt=setInterval(function(){animatearrow();},500);
							document.getElementById('arrow1').style="visibility:visible; left:415px; top:480px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
							document.getElementById('arrow1').style.transform="rotate(-180deg)";
							document.getElementById("4-12").onclick= function (){
							myStopFunction();
							setTimeout(function(){
							document.getElementById('4-11').style.visibility="hidden";
							document.getElementById('paper3').style.visibility="hidden";
							document.getElementById('4-12').style.visibility="hidden";
							document.getElementById('4-13').style.visibility="visible";
							myInt=setInterval(function(){animatearrow();},500);
							document.getElementById('arrow1').style="visibility:visible; left:649px; top:493px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.transform="rotate(-90deg)";
							document.getElementById("4-13").onclick= function (){
							myStopFunction();
							setTimeout(function(){
								document.getElementById('4-8').style.visibility="hidden";
								document.getElementById('4-10a').style.visibility="hidden";
								document.getElementById('4-10b').style.visibility="hidden";
								document.getElementById('4-10c').style.visibility="hidden";
								document.getElementById('4-14').style.visibility="hidden";
								document.getElementById('4-13').style.visibility="hidden";
								document.getElementById('4-9').style.visibility="hidden";
								document.getElementById('4-14').style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
							document.getElementById('arrow1').style="visibility:visible; left:401px; top:428px; position:absolute; height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
							document.getElementById('arrow1').style.transform="rotate(-90deg)";
							document.getElementById('4-14a').style.visibility="visible";
							document.getElementById("4-14a").onclick= function (){
								myStopFunction();
								document.getElementById('nextButton').style.visibility="visible";



								
}})}
})}
},1000);
},1000);
},2500);
}})
})}})}
},1000);
}}

else if(simsubscreennum==5){
	document.getElementById('4-14').style.visibility="hidden";
	document.getElementById('4-3').style.visibility="hidden";
									document.getElementById('4-14a').style.visibility="hidden";
									
									// setTimeout(function(){
										document.getElementById('tab').style.visibility="visible";
										
									document.getElementById('4-15').style.visibility="visible";
									document.getElementById('4-15a').style.visibility="visible";
									myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:128px; top:167px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.transform="rotate(-180deg)";
								document.getElementById("4-15a").onclick= function (){
	
									myStopFunction();
									document.getElementById('4-16').style.visibility="visible";
									document.getElementById('singleline').style.visibility="visible";
									document.getElementById('OK').style.visibility="visible";
									document.getElementById('4-15').style.visibility="hidden";
									document.getElementById('4-15a').style.visibility="hidden";
								document.getElementsByClassName('blink')[0].style.visibility="visible";
								setTimeout(function(){
									document.getElementsByClassName('blink')[0].style.visibility="hidden";
									myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:72px; top:270px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.transform="rotate(-180deg)";
								document.getElementById('singleline').style.visibility="visible";
								document.getElementById("singleline").onclick= function(){
								myStopFunction();	
								setTimeout(function(){
									document.getElementsByClassName('blink')[0].style.visibility="hidden";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:531px; top:153px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.transform="rotate(-180deg)";
								document.getElementById("OK").onclick= function(){
									myStopFunction();
									document.getElementById('OK').style.visibility="hidden";
									document.getElementById('4-16').style.visibility="hidden";
									document.getElementById('singleline').style.visibility="hidden";
									document.getElementById('graph2_slide').style.visibility="visible";
									// document.getElementsByClassName('blink2')[0].style.visibility="visible";
									// document.getElementById('pause').style.visibility="visible";
								// setTimeout(function(){
										// document.getElementsByClassName('blink2')[0].style.visibility="hidden";
										document.getElementById('paper').style.visibility="visible";
										document.getElementById('auto_Select').style.visibility="visible";
										document.getElementById('auto').style.visibility="visible";
										document.getElementById('auto_ok').style.visibility="visible";
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById('arrow1').style="visibility:visible; left:314px; top:220px; position:absolute; height:30px;";
										document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.transform="rotate(-180deg)";
										document.getElementById("auto").onclick= function(){
											myStopFunction();	
											myInt=setInterval(function(){animatearrow();},500);
										document.getElementById('arrow1').style="visibility:visible; left:314px; top:462px; position:absolute; height:30px;";
										document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.transform="rotate(-180deg)";
										document.getElementById("auto_ok").onclick= function(){
											myStopFunction();	
											document.getElementById('auto_Select').style.visibility="hidden";
											document.getElementById('paper').style.visibility="hidden";
										document.getElementById('auto').style.visibility="hidden";
										document.getElementById('auto_ok').style.visibility="hidden";
										document.getElementById('nextButton').style.visibility="visible";
	
	}}
// },2000);
	}})}
	},1000);
	}
// },3000);
	}

else if(simsubscreennum==6){
	document.getElementById('tab').style.visibility="hidden";
	document.getElementById('4-14').style.visibility="hidden";
	document.getElementById('4-14a').style.visibility="hidden";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById('graph2_slide').style.visibility="visible";
	document.getElementById('ipad').style.visibility="visible";
	setTimeout(function(){
		document.getElementById('play').style.visibility="visible";
		document.getElementById('myVideo1').style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:209px; top:163px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(90deg)";
	document.getElementById('arrow1').style.transform="rotate(90deg)";
	document.getElementById("play").onclick= function(){
		myStopFunction();
		document.getElementById("play").onclick = "";
		document.getElementById('grass').style.visibility="visible";
			document.getElementById('play').style.visibility="hidden";
	//  document.getElementById("4-3").style.animation = "zoomin 1s forwards";
	 document.getElementById("ipad").style.animation = "zoominipad44 1s forwards";
	 document.getElementById("graph2_slide").style.animation = "zoominipad41 1s forwards";
	 //  document.getElementById('rightleg').style.visibility="visible";
	// document.getElementById('leftleg').style.visibility="visible";
	setTimeout(function(){
		document.getElementById('myVideo2').style.visibility="visible";
		document.getElementById('color').style.visibility="visible";
		document.getElementById("myVideo2").style.animation = "graph1 6s forwards";
		
		setTimeout(function(){
		document.getElementById('rightleg').style.visibility="visible";
	 document.getElementById('GPR').style.visibility="visible";
	 document.getElementById('ring1').style.visibility="visible";
	 document.getElementById('ring2').style.visibility="visible";
			document.getElementById("rightleg").style.animation = "Radarmen 1s forwards";
			document.getElementById("GPR").style.animation = "gpr1 1s forwards";
			document.getElementById("ring1").style.animation = "ring1a 1s forwards";
			document.getElementById("ring2").style.animation = "ring2a 1s forwards";
setTimeout(function(){
			document.getElementById('leftleg').style.visibility="visible";
			document.getElementById('rightleg').style.visibility="hidden";
			document.getElementById("leftleg").style.animation = "Radarmen1 1s forwards";
			document.getElementById("GPR").style.animation = "gpr2 1s forwards";
			document.getElementById("ring1").style.animation = "ring1b 1s forwards";
			document.getElementById("ring2").style.animation = "ring2b 1s forwards";
		setTimeout(function(){
				document.getElementById('leftleg').style.visibility="hidden";
				document.getElementById('rightleg').style.visibility="visible";
				document.getElementById("rightleg").style.animation = "Radarmen2 1s forwards";
				document.getElementById("GPR").style.animation = "gpr3 1s forwards";
				document.getElementById("ring1").style.animation = "ring1c 1s forwards";
				document.getElementById("ring2").style.animation = "ring2c 1s forwards";
			setTimeout(function(){
					document.getElementById('leftleg').style.visibility="visible";
					document.getElementById('rightleg').style.visibility="hidden";
					document.getElementById("leftleg").style.animation = "Radarmen3 1s forwards";
					document.getElementById("GPR").style.animation = "gpr4 1s forwards";
				document.getElementById("ring1").style.animation = "ring1d 1s forwards";
				document.getElementById("ring2").style.animation = "ring2d 1s forwards";
				setTimeout(function(){
						document.getElementById('rightleg').style.visibility="visible";
						document.getElementById('leftleg').style.visibility="hidden";
						document.getElementById("rightleg").style.animation = "Radarmen4 1s forwards";
						document.getElementById("GPR").style.animation = "gpr5 1s forwards";
						document.getElementById("ring1").style.animation = "ring1e 1s forwards";
						document.getElementById("ring2").style.animation = "ring2e 1s forwards";
					setTimeout(function(){
						document.getElementById('leftleg').style.visibility="visible";
						document.getElementById('rightleg').style.visibility="hidden";
						document.getElementById("leftleg").style.animation = "Radarmen5 1s forwards";
						document.getElementById("GPR").style.animation = "gpr6 1s forwards";
						document.getElementById("ring1").style.animation = "ring1f 1s forwards";
						document.getElementById("ring2").style.animation = "ring2f 1s forwards";
					setTimeout(function(){
							document.getElementById('rightleg').style.visibility="visible";
							document.getElementById('leftleg').style.visibility="hidden";
							document.getElementById("rightleg").style.animation = "Radarmen6 1s forwards";
							document.getElementById("GPR").style.animation = "gpr7 1s forwards";
						document.getElementById("ring1").style.animation = "ring1g 1s forwards";
						document.getElementById("ring2").style.animation = "ring2g 1s forwards";
					setTimeout(function(){
								document.getElementById('leftleg').style.visibility="visible";
								document.getElementById('rightleg').style.visibility="hidden";
								document.getElementById("leftleg").style.animation = "Radarmen7 1s forwards";
								document.getElementById("GPR").style.animation = "gpr8 1s forwards";
						document.getElementById("ring1").style.animation = "ring1h 1s forwards";
						document.getElementById("ring2").style.animation = "ring2h 1s forwards";
							setTimeout(function(){
									document.getElementById('rightleg').style.visibility="visible";
									document.getElementById('leftleg').style.visibility="hidden";
									document.getElementById("rightleg").style.animation = "Radarmen8 1s forwards";
									document.getElementById("GPR").style.animation = "gpr9 1s forwards";
									document.getElementById("ring1").style.animation = "ring1i 1s forwards";
									document.getElementById("ring2").style.animation = "ring2i 1s forwards";
								setTimeout(function(){
										document.getElementById('leftleg').style.visibility="visible";
										document.getElementById('rightleg').style.visibility="hidden";
										document.getElementById("leftleg").style.animation = "Radarmen9 1s forwards";
										document.getElementById("GPR").style.animation = "gpr10 1s forwards";
										document.getElementById("ring1").style.animation = "ring1j 1s forwards";
										document.getElementById("ring2").style.animation = "ring2j 1s forwards";
										setTimeout(function(){
											document.getElementById('grass').style.visibility="hidden";
											document.getElementById('rightleg').style.visibility="hidden";
											document.getElementById('leftleg').style.visibility="hidden";
											document.getElementById('myVideo2').style.visibility="hidden";
											document.getElementById('color').style.visibility="hidden";
											
											// document.getElementById('color1').style.visibility="visible";
											
											document.getElementById('GPR').style.visibility="hidden";
											document.getElementById('ring1').style.visibility="hidden";
											document.getElementById('ring2').style.visibility="hidden";
											document.getElementById("ipad").style.animation = "zoominipad55 1s forwards";
											document.getElementById("graph2_slide").style.animation = "zoominipad51 1s forwards";
											setTimeout(function(){
												document.getElementById('myVideo3').style.visibility="visible";
												document.getElementById('recordpaper').style.visibility="visible";
												document.getElementById('recording').style.visibility="visible";
												document.getElementById('save').style.visibility="visible";
			
											myInt=setInterval(function(){animatearrow();},500);
											document.getElementById('arrow1').style="visibility:visible; left:296px; top:389px; position:absolute; height:30px;";
											document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
											document.getElementById('arrow1').style.msTransform="rotate(180deg)";
											document.getElementById('arrow1').style.transform="rotate(180deg)";
											document.getElementById("save").onclick= function(){
												myStopFunction();
												// setTimeout(function(){
													document.getElementById('recordpaper').style.visibility="hidden";
													document.getElementById('recording').style.visibility="hidden";
													document.getElementById('save').style.visibility="hidden";
													document.getElementById('nextButton').style.visibility="visible";
												// })
											}
											},1050);
										},500);
									},500);
								},500);
					},500);
						},500);
					},500);
					},500);
				 },500);
				},500);
			},100);
	},100);
	},1000);
	};
})}
else if(simsubscreennum==7){

	// myInt=setInterval(function(){animatearrow();},500);
									// document.getElementById('arrow1').style="visibility:visible; left:271px; top:386px; position:absolute; height:30px;";
									// document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
									// document.getElementById('arrow1').style.msTransform="rotate(180deg)";
									// document.getElementById('arrow1').style.transform="rotate(180deg)";
									// document.getElementById("save").onclick= function(){
									// 	myStopFunction();
									document.getElementById('tab').style.visibility="visible";
									document.getElementById('4-3').style.visibility="hidden";
									document.getElementById('myVideo3').style.visibility="hidden";
										document.getElementById('screen_folder').style.visibility="visible";
										document.getElementById('plus_button').style.visibility="visible";
										document.getElementById('s1').style.visibility="visible";
										document.getElementById('recording').style.visibility="hidden";
										document.getElementById('save').style.visibility="hidden";
										document.getElementById('graph2_slide').style.visibility="hidden";
										// document.getElementById('pause').style.visibility="hidden";
										document.getElementById('play').style.visibility="hidden";
										document.getElementById('myVideo2').style.visibility="hidden";
										myInt=setInterval(function(){animatearrow();},500);
									document.getElementById('arrow1').style="visibility:visible; left:128px; top:213px; position:absolute; height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-0deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-0deg)";
									document.getElementById('arrow1').style.transform="rotate(-0deg)";
									document.getElementById("plus_button").onclick= function(){
										myStopFunction();
										document.getElementById('plus_button').style.visibility="hidden";
										document.getElementById('plus_button1').style.visibility="visible";
										document.getElementById("s2").style.visibility="visible";
										document.getElementById("s2").style.animation = "image1 1s forwards";
										setTimeout(function(){
											myInt=setInterval(function(){animatearrow();},500);
									document.getElementById('arrow1').style="visibility:visible; left:128px; top:213px; position:absolute; height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-0deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-0deg)";
									document.getElementById('arrow1').style.transform="rotate(-0deg)";
									document.getElementById("plus_button1").onclick= function(){
										myStopFunction();	
										document.getElementById('plus_button1').style.visibility="hidden";
										document.getElementById('plus_button2').style.visibility="visible";
										document.getElementById("s3").style.visibility="visible";
										document.getElementById("s3").style.animation = "image2 1s forwards";
										setTimeout(function(){
											myInt=setInterval(function(){animatearrow();},500);
									document.getElementById('arrow1').style="visibility:visible; left:128px; top:213px; position:absolute; height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-0deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-0deg)";
									document.getElementById('arrow1').style.transform="rotate(-0deg)";
									document.getElementById("plus_button2").onclick= function(){
										myStopFunction();	
										document.getElementById('plus_button2').style.visibility="hidden";
										document.getElementById('plus_button3').style.visibility="visible";
										document.getElementById("s4").style.visibility="visible";
										document.getElementById("s4").style.animation = "image3 1s forwards";
										setTimeout(function(){
											document.getElementById('nextButton').style.visibility="visible";
								},1000);
							}
						},1000);
							}
						},1000);
					}
				// }


}

else if(simsubscreennum==8){
	document.getElementById('tab').style.visibility="visible";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById('screen_folder').style.visibility="visible";
	document.getElementById('plus_button').style.visibility="visible";
	document.getElementById('s4').style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:439px; top:265px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById("round").style.visibility="visible";
	document.getElementById("round").onclick= function(){
		myStopFunction();
		document.getElementById("data").style.visibility="visible";
		document.getElementById("round").style.visibility="hidden";
	setTimeout(function(){
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:565px; top:192px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.transform="rotate(-90deg)";
		document.getElementById("round1").style.visibility="visible";
		document.getElementById("round1").onclick= function(){
	myStopFunction();
		document.getElementById("data1").style.visibility="visible";
		document.getElementById("round1").style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="visible";
	}})}
}
else if(simsubscreennum==9){
	document.getElementById('tab').style.visibility="hidden";
	// document.getElementById('1').style.visibility="hidden";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById("ipad").style.visibility="hidden";	
	document.getElementById("round").style.visibility="hidden";	
	document.getElementById("round1").style.visibility="hidden";
	document.getElementById("data").style.visibility="hidden";
	document.getElementById("data1").style.visibility="hidden";	
	document.getElementById('s1').style.visibility="hidden";
	document.getElementById('s2').style.visibility="hidden";
	document.getElementById('s3').style.visibility="hidden";
	document.getElementById('s4').style.visibility="hidden";
	document.getElementById("4-3").style.visibility="hidden";
	document.getElementById('screen_folder').style.visibility="hidden";
	document.getElementById('plus_button').style.visibility="hidden";
	document.getElementById('plus_button1').style.visibility="hidden";
	document.getElementById('plus_button2').style.visibility="hidden";
	document.getElementById('plus_button3').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";

}
else if(simsubscreennum==10){
	
	document.getElementById('p13-1').style.visibility = "visible";
	document.getElementById('p13-1').style.transformOrigin="45% 80%";
	document.getElementById('p13-1').style.animation="fadeIn 2s forwards";
	setTimeout(function(){
		

	// document.getElementById('tab10').style.visibility="visible";
	// document.getElementById('1').style.visibility="visible";
	// document.getElementById('4-3').style.visibility="visible";
	// document.getElementById("ipad").style.visibility="visible";	
	// document.getElementById("round").style.visibility="hidden";	
	// document.getElementById("round1").style.visibility="hidden";
	// document.getElementById("data").style.visibility="hidden";
	// document.getElementById("data1").style.visibility="hidden";	
	// document.getElementById('s1').style.visibility="hidden";
	// document.getElementById('s2').style.visibility="hidden";
	// document.getElementById('s3').style.visibility="hidden";
	// document.getElementById('s4').style.visibility="hidden";
	// document.getElementById("4-3").style.visibility="hidden";

	document.getElementById('ipad').style.visibility="visible";
	
									document.getElementById('10-15').style.visibility="visible";
									document.getElementById('10-15a').style.visibility="visible";
									myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:128px; top:167px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.transform="rotate(-180deg)";
								document.getElementById("10-15a").onclick= function (){
	
									myStopFunction();
									document.getElementById('10-16').style.visibility="visible";
									document.getElementById('singleline10').style.visibility="visible";
									document.getElementById('OK10').style.visibility="visible";
									document.getElementById('10-15').style.visibility="hidden";
									document.getElementById('10-15a').style.visibility="hidden";
								document.getElementsByClassName('blink10')[0].style.visibility="visible";
								setTimeout(function(){
									document.getElementsByClassName('blink10')[0].style.visibility="hidden";
									myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:72px; top:270px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.transform="rotate(-180deg)";
								document.getElementById('singleline10').style.visibility="visible";
								document.getElementById("singleline10").onclick= function(){
								myStopFunction();	
								setTimeout(function(){
									document.getElementsByClassName('blink10')[0].style.visibility="hidden";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById('arrow1').style="visibility:visible; left:551px; top:153px; position:absolute; height:30px;";
								document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
								document.getElementById('arrow1').style.transform="rotate(-180deg)";
								document.getElementById("OK10").onclick= function(){
									myStopFunction();
									document.getElementById('OK10').style.visibility="hidden";
									document.getElementById('10-16').style.visibility="hidden";
									document.getElementById('singleline10').style.visibility="hidden";
									document.getElementById('graph2_slide').style.visibility="visible";
									// document.getElementsByClassName('blink2')[0].style.visibility="visible";
									// document.getElementById('pause').style.visibility="visible";
								// setTimeout(function(){
										// document.getElementsByClassName('blink2')[0].style.visibility="hidden";
										document.getElementById('paper').style.visibility="visible";
										document.getElementById('auto_Select1').style.visibility="visible";
										document.getElementById('auto1').style.visibility="visible";
										document.getElementById('auto_ok1').style.visibility="visible";
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById('arrow1').style="visibility:visible; left:314px; top:220px; position:absolute; height:30px;";
										document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.transform="rotate(-180deg)";
										document.getElementById("auto1").onclick= function(){
											myStopFunction();	
											myInt=setInterval(function(){animatearrow();},500);
										document.getElementById('arrow1').style="visibility:visible; left:314px; top:462px; position:absolute; height:30px;";
										document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
										document.getElementById('arrow1').style.transform="rotate(-180deg)";
										document.getElementById("auto_ok1").onclick= function(){
											myStopFunction();	
											document.getElementById('auto_Select1').style.visibility="hidden";
											document.getElementById('paper').style.visibility="hidden";
										document.getElementById('auto1').style.visibility="hidden";
										document.getElementById('auto_ok1').style.visibility="hidden";
										document.getElementById('nextButton').style.visibility="visible";
	
	}}
// },2000);
	}})}
	},1000);
	}
},2000);
}
else if(simsubscreennum==11){
	document.getElementById('tab').style.visibility="hidden";
	document.getElementById('4-14').style.visibility="hidden";
	document.getElementById('4-14a').style.visibility="hidden";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById('graph2_slide').style.visibility="visible";
	document.getElementById('ipad').style.visibility="visible";
	setTimeout(function(){
		document.getElementById('play1').style.visibility="visible";
		document.getElementById('myVideo11').style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:209px; top:163px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(90deg)";
	document.getElementById('arrow1').style.transform="rotate(90deg)";
	document.getElementById("play1").onclick= function(){
		myStopFunction();
		document.getElementById("play1").onclick = "";
		document.getElementById('grass1').style.visibility="visible";
		document.getElementById('building').style.visibility="visible";
		document.getElementById('play1').style.visibility="hidden";
		document.getElementById("ipad").style.animation = "zoominipad44 1s forwards";
		document.getElementById("graph2_slide").style.animation = "zoominipad41 1s forwards";
		setTimeout(function(){
			document.getElementById('myVideo21').style.visibility="visible";
			document.getElementById('color1').style.visibility="visible";
			
			document.getElementById("myVideo21").style.animation = "graph1 10s forwards";
			setTimeout(function(){
				document.getElementById('rightleg1').style.visibility="visible";
			 document.getElementById('GPR1').style.visibility="visible";
			 document.getElementById('ring11').style.visibility="visible";
			 document.getElementById('ring21').style.visibility="visible";
					document.getElementById("rightleg1").style.animation = "Radarmend 1s forwards";
					document.getElementById("GPR1").style.animation = "gpr2data 1s forwards";
					document.getElementById("ring11").style.animation = "ring2adata 1s forwards";
					document.getElementById("ring21").style.animation = "ring2a1data 1s forwards";
					setTimeout(function(){
						document.getElementById('leftleg1').style.visibility="visible";
						document.getElementById('rightleg1').style.visibility="hidden";
						document.getElementById("leftleg1").style.animation = "Radarmen1data 1s forwards";
						document.getElementById("GPR1").style.animation = "gpr2adata 1s forwards";
						document.getElementById("ring11").style.animation = "ring1bdata 1s forwards";
						document.getElementById("ring21").style.animation = "ring2bdata 1s forwards";
					setTimeout(function(){
							document.getElementById('leftleg1').style.visibility="hidden";
							document.getElementById('rightleg1').style.visibility="visible";
							document.getElementById("rightleg1").style.animation = "Radarmen2data 1s forwards";
							document.getElementById("GPR1").style.animation = "gpr3data 1s forwards";
							document.getElementById("ring11").style.animation = "ring1cdata 1s forwards";
							document.getElementById("ring21"	).style.animation = "ring2cdata 1s forwards";
							setTimeout(function(){
								document.getElementById('leftleg1').style.visibility="visible";
								document.getElementById('rightleg1').style.visibility="hidden";
								document.getElementById("leftleg1").style.animation = "Radarmen3data 1s forwards";
								document.getElementById("GPR1").style.animation = "gpr4data 1s forwards";
							document.getElementById("ring11").style.animation = "ring1ddata 1s forwards";
							document.getElementById("ring21").style.animation = "ring2ddata 1s forwards";
							setTimeout(function(){
									document.getElementById('rightleg1').style.visibility="visible";
									document.getElementById('leftleg1').style.visibility="hidden";
									document.getElementById("rightleg1").style.animation = "Radarmen4data 1s forwards";
									document.getElementById("GPR1").style.animation = "gpr5data 1s forwards";
									document.getElementById("ring11").style.animation = "ring1edata 1s forwards";
									document.getElementById("ring21").style.animation = "ring2edata 1s forwards";
								setTimeout(function(){
									document.getElementById('leftleg1').style.visibility="visible";
									document.getElementById('rightleg1').style.visibility="hidden";
									document.getElementById("leftleg1").style.animation = "Radarmen5data 1s forwards";
									document.getElementById("GPR1").style.animation = "gpr6data 1s forwards";
									document.getElementById("ring11").style.animation = "ring1fdata 1s forwards";
									document.getElementById("ring21").style.animation = "ring2fdata 1s forwards";
								setTimeout(function(){
										document.getElementById('rightleg1').style.visibility="visible";
										document.getElementById('leftleg1').style.visibility="hidden";
										document.getElementById("rightleg1").style.animation = "Radarmen6data 1s forwards";
										document.getElementById("GPR1").style.animation = "gpr7data 1s forwards";
									document.getElementById("ring11").style.animation = "ring1gdata 1s forwards";
									document.getElementById("ring21").style.animation = "ring2gdata 1s forwards";
									setTimeout(function(){
										document.getElementById('leftleg1').style.visibility="visible";
										document.getElementById('rightleg1').style.visibility="hidden";
										document.getElementById("leftleg1").style.animation = "Radarmen7data 1s forwards";
										document.getElementById("GPR1").style.animation = "gpr8data 1s forwards";
								document.getElementById("ring11").style.animation = "ring1hdata 1s forwards";
								document.getElementById("ring21").style.animation = "ring2hdata 1s forwards";
									setTimeout(function(){
											document.getElementById('rightleg1').style.visibility="visible";
											document.getElementById('leftleg1').style.visibility="hidden";
											document.getElementById("rightleg1").style.animation = "Radarmen8data 1s forwards";
											document.getElementById("GPR1").style.animation = "gpr9data 1s forwards";
											document.getElementById("ring11").style.animation = "ring1idata 1s forwards";
											document.getElementById("ring21").style.animation = "ring2idata 1s forwards";
										setTimeout(function(){
											document.getElementById('leftleg1').style.visibility="visible";
										document.getElementById('rightleg1').style.visibility="hidden";
										document.getElementById("leftleg1").style.animation = "Radarmen9data 1s forwards";
										document.getElementById("GPR1").style.animation = "gpr10data 1s forwards";
										document.getElementById("ring11").style.animation = "ring1jdata 1s forwards";
										document.getElementById("ring21").style.animation = "ring2jdata 1s forwards";
										setTimeout(function(){
											document.getElementById('rightleg1').style.visibility="visible";
											document.getElementById('leftleg1').style.visibility="hidden";
											document.getElementById("rightleg1").style.animation = "Radarmen10data 1s forwards";
											document.getElementById("GPR1").style.animation = "gpr11data 1s forwards";
											document.getElementById("ring11").style.animation = "ring1kdata 1s forwards";
											document.getElementById("ring21").style.animation = "ring2kdata 1s forwards";
											setTimeout(function(){
												document.getElementById('leftleg1').style.visibility="visible";
												document.getElementById('rightleg1').style.visibility="hidden";
												document.getElementById("leftleg1").style.animation = "Radarmen11data 1s forwards";
												document.getElementById("GPR1").style.animation = "gpr12data 1s forwards";
												document.getElementById("ring11").style.animation = "ring1ldata 1s forwards";
												document.getElementById("ring21").style.animation = "ring2ldata 1s forwards";
												setTimeout(function(){
													document.getElementById('rightleg1').style.visibility="visible";
													document.getElementById('leftleg1').style.visibility="hidden";
													document.getElementById("rightleg1").style.animation = "Radarmen12data 1s forwards";
													document.getElementById("GPR1").style.animation = "gpr13data 1s forwards";
													document.getElementById("ring11").style.animation = "ring1mdata 1s forwards";
													document.getElementById("ring21").style.animation = "ring2mdata 1s forwards";
													setTimeout(function(){
														document.getElementById('leftleg1').style.visibility="visible";
														document.getElementById('rightleg1').style.visibility="hidden";
														document.getElementById("leftleg1").style.animation = "Radarmen13data 1s forwards";
														document.getElementById("GPR1").style.animation = "gpr14data 1s forwards";
														document.getElementById("ring11").style.animation = "ring1ndata 1s forwards";
														document.getElementById("ring21").style.animation = "ring2ndata 1s forwards";
														setTimeout(function(){
															document.getElementById('rightleg1').style.visibility="visible";
															document.getElementById('leftleg1').style.visibility="hidden";
															document.getElementById("rightleg1").style.animation = "Radarmen14data 1s forwards";
															document.getElementById("GPR1").style.animation = "gpr15data 1s forwards";
															document.getElementById("ring11").style.animation = "ring1odata 1s forwards";
															document.getElementById("ring21").style.animation = "ring2odata 1s forwards";
															setTimeout(function(){
																document.getElementById('grass1').style.visibility="hidden";
																document.getElementById('rightleg1').style.visibility="hidden";
																document.getElementById('leftleg1').style.visibility="hidden";
																document.getElementById('myVideo21').style.visibility="hidden";
																document.getElementById('color1').style.visibility="hidden";
															
																document.getElementById('GPR1').style.visibility="hidden";
																document.getElementById('ring11').style.visibility="hidden";
																document.getElementById('ring21').style.visibility="hidden";
																document.getElementById('building').style.visibility="hidden";
																document.getElementById("ipad").style.animation = "zoominipad55 1s forwards";
																document.getElementById("graph2_slide").style.animation = "zoominipad51 1s forwards";
											setTimeout(function(){
												
												document.getElementById('myVideo31').style.visibility="visible";
												document.getElementById('recordpaper').style.visibility="visible";
												document.getElementById('recording1').style.visibility="visible";
												document.getElementById('save1').style.visibility="visible";
			
											myInt=setInterval(function(){animatearrow();},500);
											document.getElementById('arrow1').style="visibility:visible; left:296px; top:389px; position:absolute; height:30px;";
											document.getElementById('arrow1').style.WebkitTransform="rotate(180deg)";
											document.getElementById('arrow1').style.msTransform="rotate(180deg)";
											document.getElementById('arrow1').style.transform="rotate(180deg)";
											document.getElementById("save1").onclick= function(){
												myStopFunction();
												
													document.getElementById('recording1').style.visibility="hidden";
													document.getElementById('recordpaper').style.visibility="hidden";
													document.getElementById('save1').style.visibility="hidden";
													document.getElementById('nextButton').style.visibility="visible";
											}
											},750)
										},500);
										},500);
										},500);
										},500);
									},500);
										},500);
											
										},500);
									},500);
								},500);
								},500);
							},500);
						},500);
					},500);

					},500);
				},100)
			},1200)
			},1000);
		
	}
	})
	
}
else if(simsubscreennum==12){
	document.getElementById('tab').style.visibility="visible";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById('myVideo3').style.visibility="hidden";
		document.getElementById('screen_folder').style.visibility="visible";
		document.getElementById('plus_button').style.visibility="visible";
		document.getElementById('myVideo31a').style.visibility="visible";
		document.getElementById('recording').style.visibility="hidden";
		document.getElementById('save').style.visibility="hidden";
		document.getElementById('graph2_slide').style.visibility="hidden";
		// document.getElementById('pause').style.visibility="hidden";
		document.getElementById('play').style.visibility="hidden";
		document.getElementById('myVideo31').style.visibility="hidden";



	document.getElementById('tab').style.visibility="visible";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById('screen_folder').style.visibility="visible";
	document.getElementById('plus_button').style.visibility="visible";
	// document.getElementById('s4').style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById('arrow1').style="visibility:visible; left:367px; top:258px; position:absolute; height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById("round2").style.visibility="visible";
	document.getElementById("round2").onclick= function(){
		myStopFunction();
		document.getElementById("data2").style.visibility="visible";
		document.getElementById("round2").style.visibility="hidden";
	setTimeout(function(){
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:402px; top:377px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.transform="rotate(-90deg)";
		document.getElementById("round2a").style.visibility="visible";
		document.getElementById("round2a").onclick= function(){
	myStopFunction();
		document.getElementById("data2a").style.visibility="visible";
		document.getElementById("round2a").style.visibility="hidden";
		setTimeout(function(){
			myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:449px; top:303px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
		document.getElementById('arrow1').style.transform="rotate(-90deg)";
		document.getElementById("round2b").style.visibility="visible";
		document.getElementById("round2b").onclick= function(){
		myStopFunction();
		document.getElementById("data2b").style.visibility="visible";
		document.getElementById("round2b").style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="visible";
		}
		})
		
	}})}
}
else if(simsubscreennum==13){
	document.getElementById("data2b").style.visibility="hidden";
	document.getElementById('tab').style.visibility="hidden";
	// document.getElementById('1').style.visibility="hidden";
	document.getElementById('4-3').style.visibility="hidden";
	document.getElementById("ipad").style.visibility="hidden";	
	document.getElementById("round2").style.visibility="hidden";	
	document.getElementById("round2a").style.visibility="hidden";
	document.getElementById("data2").style.visibility="hidden";
	document.getElementById("data2a").style.visibility="hidden";	
	
	document.getElementById('screen_folder').style.visibility="hidden";
	document.getElementById('myVideo31a').style.visibility="hidden";
	document.getElementById('plus_button').style.visibility="hidden";
	document.getElementById('plus_button2').style.visibility="hidden";
	document.getElementById('plus_button3').style.visibility="hidden";
	// document.getElementById('nextButton').style.visibility="visible";

}



}
function information1(){
	document.getElementById('Text').style.visibility="visible";
}
function  information1a(){
	document.getElementById('Text').style.visibility="hidden";
}