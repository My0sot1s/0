//初始化
const PLAYER = 'O';
const AIPLAYER = 'X';
const cells=document.querySelectorAll(".cell");
var GAMEOVER=0;
var r = Array.from(cells);
var GAMEOVER = 0;
var arr= new Array(18);
arr[0]=114514;
arr[7]=1919810;    //用于确定平局
arr[8]=1919810;
arr[9]=1919810;
var x=4;    
var y=9;
var YourScore=0;
var ComputerScore=0;
var repeat=0;
console.log(arr);


//计分板
document.querySelector("#title1").innerHTML="您得分:"+YourScore;
document.querySelector("#title2").innerHTML="电脑得分:"+ComputerScore;


//玩家落子
var count1=0;
var arr1= new Array(9);
var exit= false;
arr1[3]=114514;    //用于确定平局
arr1[4]=114514;
arr1[5]=114514;
function getEventTrigger(event){
	console.log(arr);
	var A=event.target.id;
	A=parseInt(A);
	if(GAMEOVER==0){    //游戏结束之后无法落子
	arr[17]=1919810;  //防止array some()方法不检测空数组而报错
		console.log("A="+A);
		console.log(arr);
	for(var i=0;i<19;i++){
	if (arr[i]==A){
			alert("请勿重复落子！");
			return;}}
	cells[A].innerText=PLAYER; 
	r[A]=1;
	console.log(arr1);
	arr1[count1]=A;
	count1++;
	checkWin();
	console.log(arr1);
	console.log("exit"+exit);
	console.log(arr1[x]);
	if(exit==false&&arr1[x]==114514){    //防止游戏结束后AI继续落子,arr长度为8时不执行AI函数（*1）
	ai(arr1)
	}
}

}
//人工智障
var count2=0;
var index=0;
var arr2= new Array(9);
var B;
function ai(arr1){
	if(GAMEOVER==0){
	do{
		B=0;
        B=Math.floor(Math.random()*9);
		arr[index]=arr1[count2];
	}while(arr.some(function(element,index,array){    //实现在棋盘空白处落子;当arr长度为8时死循环,利用(*1)跳出
		if (element==B){
			return true;
		}
		return false;
	}))
	cells[B].innerText=AIPLAYER;    
	r[B]=2;
	arr2[count2]=B;
	arr[index+1]=arr2[count2];
	count2++;
	index=index+2;
	console.log(arr);
	console.log(arr1);
	checkWin();
}
}

//赢法 简单粗暴
function checkWin(){
	if(r[0]==r[1]&&r[1]==r[2]&&r[2]==1||
	   r[3]==r[4]&&r[4]==r[5]&&r[5]==1||
	   r[6]==r[7]&&r[7]==r[8]&&r[8]==1||
	   r[0]==r[3]&&r[3]==r[6]&&r[6]==1||
	   r[1]==r[4]&&r[4]==r[7]&&r[7]==1||
	   r[2]==r[5]&&r[5]==r[8]&&r[8]==1||
	   r[0]==r[4]&&r[4]==r[8]&&r[8]==1||
	   r[2]==r[4]&&r[4]==r[6]&&r[6]==1)
		{
			GAMEOVER=1;
			exit=true;
			YourScore++;
			window.setTimeout("alert('你赢了!')",1);	//先显示落子，再弹窗
			document.querySelector("#title1").innerHTML="您得分:"+YourScore;
            document.querySelector("#title2").innerHTML="电脑得分:"+ComputerScore;
		}
	else if(arr[y]==1919810&&
       r[0]==r[1]&&r[1]==r[2]&&r[2]==2||
	   r[3]==r[4]&&r[4]==r[5]&&r[5]==2||
	   r[6]==r[7]&&r[7]==r[8]&&r[8]==2||
	   r[0]==r[3]&&r[3]==r[6]&&r[6]==2||
	   r[1]==r[4]&&r[4]==r[7]&&r[7]==2||
	   r[2]==r[5]&&r[5]==r[8]&&r[8]==2||
	   r[0]==r[4]&&r[4]==r[8]&&r[8]==2||
	   r[2]==r[4]&&r[4]==r[6]&&r[6]==2)
		{
			GAMEOVER=1;
			exit=true;
			ComputerScore++;
			window.setTimeout("alert('你输了!')",1);//先显示落子，再弹窗
			document.querySelector("#title1").innerHTML="您得分:"+YourScore;
            document.querySelector("#title2").innerHTML="电脑得分:"+ComputerScore;
		}
	else if(
	   arr[y]!=1919810){
	   GAMEOVER=1;
	   exit=true;
	   if(repeat==0){
		   cells[B].innerText='O';
	   }
	   window.setTimeout("alert('平局')",1);
	}
	else{
		arr1[4]=114514;	
	}
}

//重新开始
function reStart(){
	for(i=0;i<9;i++){
		cells[i].innerText=""; 
		r[i]=0;
	}
	    arr=new Array(18);
	    arr[0]=114514;
	    arr[7]=1919810;
	    arr[8]=1919810;
	    arr[9]=1919810;
		exit=false;
		arr1=new Array(9);
	    arr1[4]=114514;
	    arr1[5]=114514;
		arr2= new Array(9);
		count1=0;
		count2=0;
	    index=0;
		B=0;
	    x=4;
	    y=9;
	    GAMEOVER=0;
	    repeat=0;
		console.log(arr1);
}

//人机先手
function aiFirst(){
	console.log(arr[1]);
	if(GAMEOVER==0){
		if(arr[0]==114514){		//防止在游戏中执行
			if(repeat==1){
			alert("人机不想再先手了，因为它已经先手了，但它还是重新先手了一次");
			reStart();
	}
	if(GAMEOVER==0){
	var C=Math.floor(Math.random()*9);
	cells[C].innerText=AIPLAYER; 
	r[C]=2;
	x=5;          //改变平局条件
	y=7;
	arr2[0]=C;
	arr[16]=C;    //让array some()方法实现
	repeat=1;
	}
}
}
}