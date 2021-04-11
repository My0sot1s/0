//初始化
const PLAYER = 'O';
const AIPLAYER = 'X';
const cells=document.querySelectorAll(".cell");
var r = Array.from(cells);
var GAMEOVER = 0;
var arr= new Array(18);
var x=4;
var YourScore=0;
var ComputerScore=0;
console.log(arr);

//计分板
document.querySelector("#title1").innerHTML="您得分"+YourScore;
document.querySelector("#title2").innerHTML="电脑得分"+ComputerScore;

//玩家落子
var count1=0;
var arr1= new Array(9);
var exit= false;
arr1[3]=114514;
arr1[4]=114514;
function getEventTrigger(event){
	const A=event.target.id;
	if(GAMEOVER==0){    //游戏结束之后无法落子
	arr[17]=1919810;  //防止array some()方法不检测空数组而报错
		console.log(A);
		console.log(arr);
	if(arr.some(function(element,index,array){    //避免在同一位置落子
		if (element==A){
			return false;
		}
		return true;
	}))
	{cells[A].innerText=PLAYER;    
	r[A]=1;
	console.log(arr1);
	arr1[count1]=A;
	count1++;
	console.log('count1='+count1);
	checkWin();
	
	console.log(arr1[4]);
	if(exit==false&&arr1[x]==114514){    //防止游戏结束后AI继续落子,arr长度为8时不执行AI函数（*1）
	ai(arr1)
	}
}
}
}
//人工智障
var count2=0;
var index=0;
var arr2= new Array(9);
function ai(arr1){
	do{
		var B=0;
	    var B=Math.floor(Math.random()*9);
		console.log(arr1);
		console.log('B='+B);
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
	arr[index+1]=arr2[count2]
	count2++;
	index=index+2;
	console.log('count2='+count2);
	console.log(arr);
	checkWin();
	
}

console.log(r);

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
			document.querySelector("#title1").innerHTML="您得分"+YourScore;
            document.querySelector("#title2").innerHTML="电脑得分"+ComputerScore;
		}
	else if(
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
			document.querySelector("#title1").innerHTML="您得分"+YourScore;
            document.querySelector("#title2").innerHTML="电脑得分"+ComputerScore;
		}
	else if(
	   arr1[4]!=114514){
	   GAMEOVER=1;
	   exit=true;
	   window.setTimeout("alert('平局')",1);
	}
	else{
		arr1[4]=114514;	//
	}
}

//重新开始
function reStart(){
	for(i=0;i<9;i++){
		cells[i].innerText=""; 
		r[i]=0;
	}
	    arr=new Array(18);
		exit=false;
		arr1= new Array(9);
	    arr1[4]=114514;
		arr2= new Array(9);
		count1=0;
		count2=0;
		B=0;
	    GAMEOVER=0;
		console.log(arr1);
}
