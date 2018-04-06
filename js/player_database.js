// MP3播放器及歌曲库js


	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
     [
		 { title: "由零开始", artist: "张国荣", mp3:"mp3/ylks.mp3  ", poster: "images/zgl.jpg"},
		 { title: "离人", artist: "张学友", mp3:"mp3/离人.mp3 ", poster: "images/zxy.jpg"},
		 { title: "夜未央", artist: "谭咏麟", mp3:"mp3/夜未央.mp3", poster: "tyl.jpg"}
	 ], 
		 		    
		{playlistOptions:{enableRemoveControls: true},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
	//lbt
	var lbt=[
		{title:"由零开始",artist:"张国荣",mp3:"mp3/由零开始.mp3",poster:"images/zgl.jpg"},
		{title:"Shape Of My Heart",artist:"sting",mp3:"mp3/Shape Of My Heart.mp3",poster:"images/Take Me to Your Heart.jpg"},
		{title:"夜未央",artist:"谭咏麟",mp3:"mp3/夜未央.mp3",poster:"images/tyl.jpg"},
		{title:"Five Hundred miles",artist:"Justin Timberlake",mp3:"mp3/.Five Hundred milesmp3",poster:"images/five.jpg"},
		{title:"总有你鼓励",artist:"李国祥",mp3:"mp3/.总有你鼓励mp3",poster:"images/李国祥.jpg"}
	];

	//past
	var latest=[
		{ title: "总有你鼓励", artist: "李国祥/伦永亮", mp3: "mp3/总有你鼓励.mp3", poster:"images/李国祥.jpg"},
		{ title: "谁可改变", artist: "谭咏麟", mp3: "mp3/谁可改变.mp3" , poster:"images/tyl.jpg"},
		{ title: "随缘", artist: "温兆伦", mp3: "mp3/随缘.mp3", poster:"images/温兆伦.jpg"},
		{ title: "心跳呼吸正常", artist: "张国荣", mp3: "mp3/心跳呼吸正常.mp3", poster:"images/zgl.jpg"},
		{ title: "等", artist: " 陈百强", mp3: "mp3/等.mp3", poster:"images/陈百强.jpg"},
		{ title: "春秋", artist: "张敬轩", mp3: "mp3/春秋.mp3", poster:"images/张敬轩.jpg"},
		{ title: "一生不变", artist: "李克勤", mp3: "mp3/一生不变.mp3", poster:"images/李克勤.jpg"},
		{ title: "再见二丁目", artist: "杨千嬅", mp3: "mp3/再见二丁目.mp3", poster:"images/杨千嬅.jpg"},
		{ title: "墨尔本的翡翠", artist: "林颐", mp3: "mp3/墨尔本的翡翠.mp3", poster:"images/林颐.jpg"}
	];

	//now
	var popular=[
		{ title: "有心人", artist: "张国荣", mp3: "mp3/有心人.mp3", poster:"images/zgl.jpg"},
		{ title: "尘埃落定", artist: "张敬轩", mp3: "mp3/尘埃落定.mp3", poster:"images/张敬轩.jpg"},
		{ title: "倾城", artist: "许美静", mp3: "mp3/倾城.mp3", poster:"images/许美静.jpg"},
		{ title: "暧昧", artist: "王菲", mp3: "mp3/暧昧.mp3", poster: "images/王菲.jpg"},
		{ title: "还是觉得你最好", artist: "张学友", mp3: "mp3/还是觉得你最好.mp3", poster:"images/zxy.jpg"},
		{ title: "一生何求", artist: "陈百强", mp3: "mp3/一生何求.mp3", poster:"images/陈百强.jpg"},
		{ title: "爱的故事(上)", artist: "孙耀威", mp3: "mp3/爱的故事(上).mp3", poster:"images/孙耀威.jpg"},
		{ title: "那有一天不想你", artist: "黎明", mp3: "mp3/那有一天不想你.mp3", poster:"images/黎明.jpg"},
		{ title: "传闻", artist: "周柏豪", mp3: "mp3/传闻.mp3", poster:"images/周柏豪.jpg"}
	];

	//future
	var rank=[
		{ title: "伤感的恋人", artist: "黄凯芹", mp3: "mp3/伤感的恋人.mp3", poster:"images/黄凯芹.jpg"},
		{ title: "最后一班渡轮", artist: "蔡国权", mp3: "mp3/最后一班渡轮.mp3", poster:"images/蔡国权.jpg"},
		{ title: "今生今世", artist: "张国荣", mp3: "mp3/今生今世.mp3", poster:"images/zgl.jpg"},
		{ title: "不吐不快 ", artist: "张敬轩", mp3: "mp3/不吐不快.mp3", poster:"images/张敬轩.jpg"},
		{ title: "唉声叹气", artist: "郑秀文", mp3: "mp3/唉声叹气.mp3", poster:"images/郑秀文.jpg"},
		{ title: "天意人心", artist: "蔡国权", mp3: "mp3/天意人心.mp3", poster:"images/蔡国权.jpg"},
		{ title: "雨夜的浪漫", artist: "张学友", mp3: "mp3/雨夜的浪漫.mp3", poster:"images/zxy.jpg"},
		{ title: "涟漪", artist: "陈百强", mp3: "mp3/涟漪.mp3", poster:"images/陈百强.jpg"},
		{ title: "七夕", artist: "邓丽欣", mp3: "mp3/七夕.mp3", poster:"images/邓丽欣.jpg"}
	];

   // oline song/dream/
   var main =[
	   { title: "Five Hundred Miles", artist: "Justin Timberlake", mp3: "mp3/Five Hundred Miles.mp3 ", poster: "images/five.jpg" },
	   { title: "Free Loop", artist: "Daniel Powter", mp3: "mp3/Free Loop.mp3", poster: "images/free loop.jpg" },
	   { title: "Hotel California", artist: "Eagles", mp3: "mp3/Hotel California.mp3", poster: "images/Hotel California.jpg" },
	   { title: "Take Me to Your Heart", artist: "Mickael Learns To Rock", mp3: "mp3/Take Me to Your Heart.mp3", poster: "images/Take Me to Your Heart.jpg" },
	   { title: "Right Here Waiting", artist: "Richard Marx", mp3: "mp3/Right Here Waiting.mp3", poster: "images/Right Here Waiting.jpg" },
	   { title: "Shape Of My Heart", artist: "sting", mp3: "mp3/Shape Of My Heart.mp3", poster: "images/Shape Of My Heart.jpg" },
	   { title: "Traveling Light", artist: "joel hanson", mp3: "mp3/Traveling Light.mp3", poster: "images/Traveling Light.jpg" },
	   { title: "Better Than A Hallelujah", artist: "Amy Grant", mp3: "mp3/Better Than A Hallelujah.mp3", poster: "images/Better Than A Hallelujah.jpg" },
	   { title: "Glad You Came", artist: "The Wanted", mp3: "mp3/Glad You Came.mp3", poster: "images/Glad You Came.jpg" },
	   { title: "The truth that you leave", artist: "高志豪", mp3: "mp3/The truth that you leave.mp3", poster: "images/The truth that you leave.jpg" }
	   ];
   var spirit =[
	   { title: "M19+20", artist: "梶浦由記", mp3: "mp3/.mp3 ", poster: "http://p1.music.126.net/lW4YKD6cMgm32nI66CzWVg==/5702067301704441.jpg?param=130y130" },
	   { title: "Sis puella magica!", artist: "梶浦由記", mp3: "mp3/.mp3", poster: "http://p1.music.126.net/tFTRt1H87rReNTyO1K9IDQ==/18498183627713149.jpg?param=130y130" },
	   { title: "月は优しく (月)", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=590623.mp3", poster: "http://p1.music.126.net/7xaV2qB-T1d9m8b1XZC6tQ==/725677674344222.jpg?param=130y130" },
	   { title: "Euterpe エウテルペ ", artist: "染音若蔡", mp3: "http://music.163.com/song/media/outer/url?id=452654214.mp3", poster: "http://p1.music.126.net/Iqckrd2sOB1ztqrSOw4XzA==/109951162841140691.jpg?param=130y130" },
	   { title: "幻光", artist: "杨秉音", mp3: "http://music.163.com/song/media/outer/url?id=526989692.mp3", poster: "http://p1.music.126.net/4xHOkSVWH-n6p5pB3Jf0yQ==/109951162922204274.jpg" },
	   { title: "世界の約束", artist: "神罗Shinra", mp3: "http://music.163.com/song/media/outer/url?id=429460870.mp3", poster: "http://p1.music.126.net/rkJSVKRZkfLXOoVwXtiB4w==/18283778858733705.jpg?param=130y130" },
	   { title: "Cave OF Mind", artist: "久石譲", mp3: "http://music.163.com/song/media/outer/url?id=28457572.mp3", poster: "http://p1.music.126.net/HdmtedPRZEEBduHcmUnk3w==/853221023209311.jpg?param=130y130" },
	   { title: "幽灵公主", artist: "K. Williams", mp3: "http://qzone.haoduoge.com/music3/2015-01-26/1422203098.mp3", poster: "http://p1.music.126.net/GNKtRK8w7edPw3jAsavL2A==/5980243743832365.jpg?param=130y130" },
	   { title: "心之逆鳞", artist: "魏小涵", mp3: "http://music.163.com/song/media/outer/url?id=408280658.mp3", poster: "http://p1.music.126.net/k_WRxDY1qQ4ztB5uFFrvoA==/17907745881679448.jpg?param=130y130" },
	   { title: "愛を教えてくれた君へ", artist: "Qaijff", mp3: "http://music.163.com/song/media/outer/url?id=521416051.mp3", poster: "http://p1.music.126.net/-c3qURPNRNLe-YJMbiZoKA==/109951163072509863.jpg?param=130y130" }
	   ];
   var magic =[
	   { title: "群雄疾走", artist: "川井憲次", mp3: "http://music.163.com/song/media/outer/url?id=448153.mp3", poster: "http://p1.music.126.net/r4TK33y6f8cwlntVidXZbQ==/931286348726555.jpg?param=130y130" },
	   { title: "Ghost of a smile", artist: "EGOIST", mp3: "http://music.163.com/song/media/outer/url?id=35955908.mp3", poster: "http://p1.music.126.net/ivONokvElv9ZCzyrZp84FQ==/3297435373557125.jpg?param=130y130" },
	   { title: "樱子小姐的脚下埋着尸体", artist: "大竹佑季", mp3: "http://music.163.com/song/media/outer/url?id=36271375.mp3", poster:"http://p1.music.126.net/Q4Dg5QXwft213TBKMv26_A==/3276544653004159.jpg?param=130y130" },
	   { title: "非科学的表裏一体", artist: "豚乙女", mp3: "http://music.163.com/song/media/outer/url?id=30870899.mp3", poster: "http://p1.music.126.net/84dpde0vkfsDAVsNNjulXg==/7906588115750467.jpg?param=130y130" },
	   { title: "You're the Shine", artist: "：FELT", mp3: "http://music.163.com/song/media/outer/url?id=26260757.mp3", poster: "http://p1.music.126.net/b04i7LFbHLJkmkzwhwRLMA==/2343059278838229.jpg?param=130y130" },
	   { title: "旅の途中", artist: "清浦夏実", mp3: "http://music.163.com/song/media/outer/url?id=26220167.mp3", poster: "http://p1.music.126.net/4BgAnUbCDFex3m4z-hWULA==/2509085534622060.jpg?param=130y130" },
	   { title: "夏祭り", artist: "東山奈央", mp3: "http://music.163.com/song/media/outer/url?id=488388729.mp3", poster: "http://p1.music.126.net/3eyBH8RjxjXG-EqWShU1wg==/18887410742154555.jpg?param=130y130" },
	   { title: "Sway", artist: "Nevve", mp3: "http://music.163.com/song/media/outer/url?id=475073464.mp3", poster: "http://p1.music.126.net/KmPcFcxxg61d15R8yu5x_A==/18681802069425034.jpg?param=130y130" },
	   { title: "Vanish", artist: " Breathe Carolina", mp3: "http://music.163.com/song/media/outer/url?id=427542077.mp3", poster: "http://p1.music.126.net/xaX_RkkW0cT4f38k62N8yg==/3413983630702236.jpg?param=130y130" },
	   { title: "It's Over", artist: "MEIDEN", mp3: "http://music.163.com/song/media/outer/url?id=477933011.mp3", poster: "http://p1.music.126.net/foJM2P9nq8pXHnCZjcf75w==/19047939439716625.jpg?param=130y130" }
	   ];

	//添加播放歌曲

	$(".main_banner_box li").find("img").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:lbt[k].title, artist:lbt[k].artist,
			//free:true,
			mp3:lbt[k].mp3,
			//oga:"",
			poster:lbt[k].poster
		});
		myPlaylist.play(-1);
	});
	$("#latest li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:latest[k].title, artist:latest[k].artist,
			//free:true,
			mp3:latest[k].mp3,
			//oga:"",
			poster:latest[k].poster
		});
		myPlaylist.play(-1);
	});
	$("#popular li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:popular[k].title, artist:popular[k].artist,
			//free:true,
			mp3:popular[k].mp3,
			//oga:"",698 
			poster:popular[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#rank li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:rank[k].title, artist:rank[k].artist,
			//free:true,
			mp3:rank[k].mp3,
			//oga:"",
			poster:rank[k].poster
		});
		myPlaylist.play(-1);
	});
	
$("#main li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: main[k].title, artist: main[k].artist,
		//free:true,
		mp3: main[k].mp3,
		//oga:"",
		poster: main[k].poster
	});
	myPlaylist.play(-1);
});
	
$("#spirit li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: spirit[k].title,
		artist: spirit[k].artist,
		//free:true,
		mp3: spirit[k].mp3,
		//oga:"",
		poster: spirit[k].poster
	});
	myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function () {
	var m = $(this).parent("li").index();
	myPlaylist.add({
		title: magic[m].title,
		artist: magic[m].artist,
		//free:true,
		mp3: magic[m].mp3,
		//oga:"",
		poster: magic[m].poster
	});
	myPlaylist.play(-1);
});
	//添加歌曲结束


	//移除
	$("#playlist-remove").click(function() {
		myPlaylist.remove();		//（0 1 2 ... -2 -1）
	});
	
	$("#listRemove").click(function() {
		myPlaylist.remove();
	});

	// 上一曲、下一曲

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// 播放
	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// 暂停

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});



	//是否自动播放

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});




	//播放器列表滚动条js------------------------------------------------------------------------------------------------
	var $bar=$(".bar");
	var $scrollBar=$(".scrollBar");
	var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
	var $ul=$(".jp-playlist ul");
	var $li=$(".jp-playlist ul li");
	var disY=0; 
	var iScale=0;
	var iSpeed = 0;
	
	$ul.height(1000);		//设置ul的高度
	
	$bar.mousedown(function (event){
		var event = event || window.event;
		disY = event.clientY - $(this).position().top;                
		$(document).bind("mousemove",function (event){
				var event = event || window.event;
				var iH = event.clientY - disY;                        
				iH <= 0 && (iH = 0);
				iH >= $maxH && (iH = $maxH);
				$bar.css({top : iH + "px"});
				iScale = - iH/$maxH;
				$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});	
				return false;
		});                
		$(document).bind("mouseup",function (){		
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
		});
		return false;
	});
	
	 //当鼠标移入，监听事件
	$(".jp-playlist-box").mouseover(function(){
			//鼠标滚轮
			addHandler(this, "mousewheel", mouseWheel);//IE
			addHandler(this, "DOMMouseScroll", mouseWheel);//标准
			return false;			
	});
	//绑定事件重写兼容
	 function addHandler(element, type, handler){
			return element.addEventListener ? element.addEventListener(type, handler, false) :
			element.attachEvent("on" + type, handler, false)
	}
	 //鼠标滚轮事件
	function mouseWheel(event){
		var event = event || window.event;
		if(event.wheelDelta) {//IE
				iSpeed = event.wheelDelta > 0 ? -3 : 3;
		}else if(event.detail) {//火孤
				iSpeed = event.detail < 0 ? -3 : 3;
		}
		move();
		
		//FF,绑定事件，阻止默认事件  
		if (event.preventDefault) {  
			event.preventDefault();  
		} 	
	} ;
	//滚轮 要执行的
	function move(){
		var iH=$bar.position().top;
		iH=iH+iSpeed;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({top:iH+"px"});
		iScale = - iH/$maxH;
		$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});
		return false;
	};
	//播放器列表滚动条js 结束------------------------------------------------
	
	
	
	//音乐播放器 收缩、展开----------------------------------------------
	var fold=true;//标识
	
	//页面加载时，播放器运动出来，延迟3秒，运动回去
	$(".jp-video").animate({left:0},"slow",function(){
		slideOut($(this));		
	 })//.delay(3000).animate({left:"-480px"},350,function(){
	// 	slideIn($(this));	
	//});
	
	//点击按钮运动出来，或运动回去
	$("#btnfold").click(function(){
		if(fold){
			$(".jp-video").animate({left:"-480px"},350,function(){	
				slideIn($(this));
			});	
		}else{
			$(".jp-video").animate({left:0},350,function(){
				slideOut($(this));
			});	
		}
	});
	//封装按钮背景切换1
	function slideOut(obj){
		$("#btnfold").attr({"title":"点击收缩"});
		obj.find("span").css({"transform":"rotate(180deg)"});
		obj.find("span").css({"MozTransform":"rotate(180deg) translateX(2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(180deg)"});
		fold=true;		
	};
	//封装按钮背景切换2
	function slideIn(obj){
		$("#btnfold").attr({"title":"点击展开"});	
		obj.find("span").css({"transform":"rotate(0deg)"});
		obj.find("span").css({"MozTransform":"rotate(0deg) translateX(-2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(0deg)"});
		fold=false;	
	};
	
	//歌曲列表展开、收缩---------------------------------------------------
	var iOpen=false;
	$("#listClose").click(function(){
		if(iOpen){
			$(".jp-playlist-box").animate({height:0},100);
			$("#btnfold").css({top:"5px"});
			$("#listRemove").css({display:"none"});
			$(".scrollBar").css({display:"none"});
			$(".jp-video").animate({height:"94px",bottom:"20px"},100);
			iOpen=false;
		}else{
			$(".jp-playlist-box").animate({height:"80px"},100);
			$("#btnfold").css({top:"52px"});
			$("#listRemove").css({display:"block"});
			$(".scrollBar").css({display:"block"});
			$(".jp-video").animate({height:"175px",bottom:"20px"},100);
			iOpen=true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
