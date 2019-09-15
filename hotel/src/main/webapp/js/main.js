$(document).ready(function() {
	$.ajax({
 		url:"/hotel/main1",
 		type:"post",
 		success:function(data){
 			if(data == ""){
 				window.location.href="login.html";
 			} else {
 				var json=eval(data);
 				$("#user").html(json[0].empName);
 				$('.empGoUpdate').attr('id',json[0].empType);
 				$('.empGoAddHouse').attr('id',json[0].empType + '1');
 				$('.empGoshowHouse').attr('id',json[0].empType + '1');
 				$('.empGoUpdateHouse').attr('id',json[0].empType + '1');
 				$('.empGoAddOrder').attr('id',json[0].empType + '2');
 				$('.empGoChangeOrder').attr('id',json[0].empType + '2');
 				$('.empGoShowOrder').attr('id',json[0].empType + '2');
 				$('.empGoshowHouseState').attr('id',json[0].empType + '2');
 				$('.empGoShowResrve').attr('id',json[0].empType + '2');
 				$('.empGoShowUser').attr('id',json[0].empType + '2');
 				$("#empName").val(json[0].empName);
 				display();
 			}
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
});
empdowmLine = function(){	
 	$.ajax({
 		url:"/hotel/empdowmLine",
 		type:"get",
 		success:function(data){
 			if(data == "success"){
 				window.location.href="login.html";
 			}
 		},error:function(error){
 			window.location.href="main.html";
 		}
 	})
}
empGoUpdate = function(){	
	display();
	$("#emp").css("display","block");
	$("#tips").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoUpdate",
 		type:"get",
 		success:function(data){
 			var json = eval(data);
 			var str = "<table border='1'>";
 			for(var i = 0; i < json.length; i++){
 				if(i == 0){
 					str = str + "<tr><td>员工编号</td><td>员工姓名</td><td>员工职位</td><td>员工状态</td></tr>";
 				}
 				str = str + "<tr>";
 				str = str + "<td>" + json[i].empId + "</td>";
 				str = str + "<td>" + json[i].empName + "</td>";
 				str = str + "<td>" + json[i].empType + "</td>";
 				str = str + "<td>" + json[i].empState + "</td>";
 				str = str + "</tr>";
 			}
 			str + "</table>";
 			$("#tips").html(str);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
empDelete = function(){	
 	$.ajax({
 		url:"/hotel/empDelete",
 		type:"post",
 		data: $("#emp").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info").html("员工删除成功");
 				empGoUpdate();
 			} else {
 				$("#info").html("员工删除失败");
 			}
 		},error:function(error){
 			$("#info").html("员工删除操作失败");
 		}
 	})
}
empUpdate = function(){	
 	$.ajax({
 		url:"/hotel/empUpdate",
 		type:"post",
 		data: $("#emp").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info").html("员工权限激活成功");
 				empGoUpdate();
 			} else {
 				$("#info").html("员工权限激活失败");
 			}
 		},error:function(error){
 			$("#info").html("员工权限激活操作失败");
 		}
 	})
}
empUpdateJob = function(){	
 	$.ajax({
 		url:"/hotel/empUpdateJob",
 		type:"post",
 		data: $("#emp").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info").html("员工职位修改成功");
 				empGoUpdate();
 			}
 		},error:function(error){
 			$("#info").html("员工职位修改失败");
 		}
 	})
}
empGoUpdateOwn = function(){
	display();
	$("#empUpdateOwn").css("display","block");
	$("#tips").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoUpdateOwn",
 		type:"post",
 		data: $("#empGoUpdateOwn").serialize(),
 		success:function(data){
 			var json = eval(data);
 			var str = "<h2>修改前</h2><table border='1'>";
 			str = str + "<tr><td>编号</td><td>姓名</td><td>密码</td><td>工作</td>"
 					  +"<td>创建ID</td><td>创建时间</td><td>修改ID</td><td>修改时间</td></tr>";
			str = str + "<tr><td>" + json.empId + "</td>";
			str = str + "<td>" + json.empName + "</td>";
			str = str + "<td>" + json.empPass + "</td>";
			str = str + "<td>" + json.empType + "</td>";
			str = str + "<td>" + json.createId + "</td>";
			str = str + "<td>" + json.createTime + "</td>";
			str = str + "<td>" + json.updateId + "</td>";
			str = str + "<td>" + json.updateTime + "</td></tr></table><h2>修改后</h2>";
 			$("#tips").html(str);
 			$("#empUpdateOwnId").val(json.empId);
 			$("#empUpdateOwnName").val(json.empName);
 			$("#empUpdateOwnPass").val(json.empPass);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
empUpdateOwn = function(){	
 	$.ajax({
 		url:"/hotel/empUpdateOwn",
 		type:"post",
 		data: $("#empUpdateOwn").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info1").html("个人信息修改成功");
 				empGoUpdateOwn();
 			} else if(data == "false1"){
 				$("#info1").html("个人信息修改失败,用户名已存在");
 			} else {
 				$("#info1").html("个人信息修改失败");
 			}
 		},error:function(error){
 			$("#info1").html("个人信息修改失败");
 		}
 	})
}
houseAdd = function(){	
 	$.ajax({
 		url:"/hotel/houseAdd",
 		type:"post",
 		data: $("#houseAdd").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info2").html("房间添加成功");
 			} else {
 				$("#info2").html("房间添加失败");
 			} 
 		},error:function(error){
 			$("#info2").html("房间添加失败");
 		}
 	})
}
empGoAddHouse = function(){
	display();
	$("#houseAdd").css("display","block");
}
function display() {
	$("#tips").css("display","none");
	$("#info3").css("display","none");
	$("#info6").css("display","none");
	$("#houseAdd").css("display","none");
	$("#empUpdateOwn").css("display","none");
	$("#emp").css("display","none");
	$("#updateHouse").css("display","none");
	$("#info8").css("display","none");
	$("#reserveAdd").css("display","none");
	$("#updateOrder").css("display","none");
}
function showH(data){
	display();
	$("#empGoshowHouse").css("display","block");
	$("#tips").css("display","block");
	$("#info3").css("display","block");
	var json = eval(data);
	var str = "<table border='1'>";
	for(var i = 0; i < json.length; i++){
		if(i == 0){
			str = str + "<tr><td>房间编号</td><td>房间位置</td><td>房间类型</td><td>房间价格</td>"
			+"<td>房间物品</td><td>房间状态</td><td>创建ID</td><td>创建时间</td>"
			+"<td>修改ID</td><td>修改时间</td></tr>";
		}
		str = str + "<tr class="+json[i].houseType+"11><td>" + json[i].houseId + "</td>";
		str = str + "<td>" + json[i].houseLoc + "</td>";
		str = str + "<td>" + json[i].houseType + "</td>";
		str = str + "<td>" + json[i].housePrice + "</td>";
		str = str + "<td>" + json[i].houseArt + "</td>";
		str = str + "<td>" + json[i].houseState + "</td>";
		str = str + "<td>" + json[i].createId + "</td>";
		str = str + "<td>" + json[i].createTime + "</td>";
		str = str + "<td>" + json[i].updateId + "</td>";
		str = str + "<td>" + json[i].updateTime + "</td></tr>";
	}
	str + "</table>";
	$("#tips").html(str);
}
empGoshowHouse = function(){
 	$.ajax({
 		url:"/hotel/empGoshowHouse",
 		type:"get",
 		success:function(data){
 			showH(data);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
houseStateA = function(){
 	$.ajax({
 		url:"/hotel/houseStateA",
 		type:"get",
 		success:function(data){
 			showH(data);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
houseStateB = function(){
 	$.ajax({
 		url:"/hotel/houseStateB",
 		type:"get",
 		success:function(data){
 			showH(data);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
houseStateC = function(){
 	$.ajax({
 		url:"/hotel/houseStateC",
 		type:"get",
 		success:function(data){
 			showH(data);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
empGoUpdateHouse = function(){
	display();
	$("#updateHouse").css("display","block");
}
houseDelete = function(){	
 	$.ajax({
 		url:"/hotel/houseDelete",
 		type:"post",
 		data: $("#updateHouse").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info5").html("房间删除成功");
 			} else {
 				$("#info5").html("房间删除失败");
 			} 
 		},error:function(error){
 			$("#info5").html("房间删除失败");
 		}
 	})
}
houseUpdate = function(){	
 	$.ajax({
 		url:"/hotel/houseUpdate",
 		type:"post",
 		data: $("#updateHouse").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info5").html("修改房间价格成功");
 			} else {
 				$("#info5").html("修改房间价格失败");
 			} 
 		},error:function(error){
 			$("#info5").html("修改房间价格操作失败");
 		}
 	})
}
houseUpdate1 = function(){	
 	$.ajax({
 		url:"/hotel/houseUpdate1",
 		type:"post",
 		data: $("#updateHouse").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info5").html("房间网费修改成功");
 			} else {
 				$("#info5").html("房间网费修改失败");
 			} 
 		},error:function(error){
 			$("#info5").html("房间网费修改操作失败");
 		}
 	})
}
empGoShowOrder = function(){	
	display();
	$("#tips").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoShowOrder",
 		type:"get",
 		success:function(data){
 			var json = eval(data);
 			var str = "<table border='1'>";
 			for(var i = 0; i < json.length; i++){
 				if(i == 0){
 					str = str + "<tr><td>预定编号</td><td>预定日期</td><td>房间编号</td><td>客户姓名</td></tr>";
 				}
 				str = str + "<tr><td>" + json[i].orderId + "</td>";
 				str = str + "<td>" + json[i].orderDate + "</td>";
 				str = str + "<td>" + json[i].houseId + "</td>";
 				str = str + "<td>" + json[i].userName + "</td></tr>";
 			}
 			str + "</table>";
 			$("#tips").html(str);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
empGoshowHouseState = function(){	
	display();
	$("#tips").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoshowHouseState",
 		type:"get",
 		success:function(data){
 			var json = eval(data);
 			var str = "<table border='1' id='houseTable'><tr>";
 			for(var i = 0; i < json.length; i++){
 				if(json[i].houseType == "E"){
 					str = str +"<td colspan='3' class="+json[i].houseState+"22>" + json[i].houseId + "</td>";
 				}
 			}
 			str = str +"</tr>";
 			for(var i = 0; i < json.length; i++){
 				if(json[i].houseType == "D"){
 					str = str +"<td colspan='2' class="+json[i].houseState+"22>" + json[i].houseId + "</td>";
 				}
 			}
 			str = str +"</tr>";
 			for(var i = 0; i < json.length; i++){
 				if(json[i].houseType == "C"){
 					str = str +"<td colspan='2' class="+json[i].houseState+"22>" + json[i].houseId + "</td>";
 				}
 			}
 			str = str +"</tr>";
 			for(var i = 0; i < json.length; i++){
 				if(json[i].houseType == "B"){
 					str = str +"<td class="+json[i].houseState+"22>" + json[i].houseId + "</td>";
 				}
 			}
 			str = str +"</tr>";
 			for(var i = 0; i < json.length; i++){
 				if(json[i].houseType == "A"){
 					if(i >= 10){
 						str = str +"<td class="+json[i].houseState+"22>" + json[i].houseId + "</td>";
 					}
 				}
 			}
 			str = str +"</tr>";
 			for(var i = 0; i < json.length; i++){
 				if(json[i].houseType == "A"){
 					if(i < 10){
 						str = str +"<td class="+json[i].houseState+"22>" + json[i].houseId + "</td>";
 					}
 				}
 			}
 			str = str +"</tr></table>";
 			$("#tips").html(str);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
empGoAddOrder = function(){	
	display();
 	$.ajax({
 		url:"/hotel/empGoAddOrder",
 		type:"get",
 		success:function(data){
 			showEmptyHouse(data);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
function showEmptyHouse(data){
	display();
	$("#tips").css("display","block");
	$("#info6").css("display","block");
	$("#info8").css("display","block");
	var json = eval(data);
	var str = "<table border='1'>";
	for(var i = 0; i < json.length; i++){
		if(i == 0){
			str = str + "<tr><td>房间编号</td><td>房间位置</td><td>房间类型</td><td>房间价格</td>"
			+"<td>房间押金</td><td>房间物品</td></tr>";
		}
		str = str + "<tr><td>" + json[i].houseId + "</td>";
		str = str + "<td>" + json[i].houseLoc + "</td>";
		str = str + "<td>" + json[i].houseType + "</td>";
		str = str + "<td>" + json[i].housePrice + "</td>";
		str = str + "<td>" + json[i].houseDep + "</td>";
		str = str + "<td>" + json[i].houseArt + "</td></tr>";
	}
	str + "</table>";
	$("#tips").html(str);
}
houseType = function(type){	
 	$.ajax({
 		url:"/hotel/houseType",
 		type:"post",
 		data:{type:type},
 		success:function(data){
 			showEmptyHouse(data);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
}
addOrder = function(){	
 	$.ajax({
 		url:"/hotel/addOrder",
 		type:"post",
 		data: $("#changeHouseS").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info7").html("房间预定成功");
 			} else {
 				$("#info7").html("房间预定失败");
 			} 
 		},error:function(error){
 			$("#info7").html("房间预定操作失败");
 		}
 	})
}
changeReciver = function() {
	$("#reserveAdd").css("display","block");
	$("#nupdateId").val($("#bhouseId").val());
	$("#nhouseDep").val($("#bhouseDep").val());
	$("#nuserName").val($("#bhouseLoc").val());
	$("#info6").css("display","none");
	$("#info8").css("display","none");
	$("#tips").css("display","none");
}
reserveAdd = function(){	
 	$.ajax({
 		url:"/hotel/reserveAdd",
 		type:"post",
 		data: $("#reserveAdd").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info9").html("房间入住成功");
 			} else {
 				$("#info9").html("房间入住失败");
 			} 
 		},error:function(error){
 			$("#info9").html("房间入住操作失败");
 		}
 	})
}
empGoChangeOrder = function(){	
	display();
	$("#tips").css("display","block");
	$("#updateOrder").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoChangeOrder",
 		type:"get",
 		success:function(data){
 			var json = eval(data);
 			var str = "<table border='1'>";
 			for(var i = 0; i < json.length; i++){
 				if(i == 0){
 					str = str + "<tr><td>房间编号</td><td>房间位置</td><td>房间类型</td><td>房间价格</td>"
 					+"<td>房间押金</td><td>房间物品</td><td>房间状态</td><td>订房日期</td><td>客户姓名</td></tr>";
 				}
 				str = str + "<tr><td>" + json[i].houseId + "</td>";
 				str = str + "<td>" + json[i].houseLoc + "</td>";
 				str = str + "<td>" + json[i].houseType + "</td>";
 				str = str + "<td>" + json[i].housePrice + "</td>";
 				str = str + "<td>" + json[i].houseDep + "</td>";
 				str = str + "<td>" + json[i].houseArt + "</td>";
 				str = str + "<td>" + json[i].houseState + "</td>";
 				str = str + "<td>" + json[i].createTime + "</td>";
 				str = str + "<td>" + json[i].updateTime + "</td></tr>";
 			}
 			str + "</table>";
 			$("#tips").html(str);
 		},error:function(error){
 			window.location.href="login.html";
 		}
 	})
} 
changeOrderA = function(){	
 	$.ajax({
 		url:"/hotel/changeOrderA",
 		type:"post",
 		data: $("#updateOrder").serialize(),
 		success:function(data){
 			if(data == "success"){
 				$("#info10").html("房间取消预订成功");
 				empGoChangeOrder();
 			} else {
 				$("#info10").html("房间取消预订失败");
 			} 
 		},error:function(error){
 			$("#info10").html("房间取消预订操作成功");
 		}
 	})
}
changeReciver = function(){	
	display();
	$("#reserveAdd").css("display","block");
 	$.ajax({
 		url:"/hotel/changeReciver",
 		type:"post",
 		data: $("#updateOrder").serialize(),
 		success:function(data){
 			var json = eval(data);
			$("#nupdateId").val(json[0].houseId);
			$("#nhouseDep").val(json[0].houseDep);
			$("#nuserName").val(json[0].updateTime);
 			
 		},error:function(error){
 			$("#info9").html("转到订房界面操作成功");
 		}
 	})
}
empGoShowResrve = function(){	
	display();
	$("#tips").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoShowResrve",
 		type:"get",
 		success:function(data){
 			var json = eval(data);
 			var str = "<table border='1'>";
 			for(var i = 0; i < json.length; i++){
 				if(i == 0){
 					str = str + "<tr><td>入住编号</td><td>入住时间</td><td>房间编号</td><td>客户姓名</td>"
 					+"<td>客户电话</td></tr>";
 				}
 				str = str + "<tr><td>" + json[i].resId + "</td>";
 				str = str + "<td>" + json[i].houseIn + "</td>";
 				str = str + "<td>" + json[i].houseId + "</td>";
 				str = str + "<td>" + json[i].userName + "</td>";
 				str = str + "<td>" + json[i].userPhone + "</td>></tr>";
 			}
 			str + "</table>";
 			$("#tips").html(str);
 		},error:function(error){
 			$("#info9").html("显示入住信息操作成功");
 		}
 	})
}
empGoShowUser = function(){	
	display();
	$("#tips").css("display","block");
 	$.ajax({
 		url:"/hotel/empGoShowUser",
 		type:"get",
 		success:function(data){
 			var json = eval(data);
 			var str = "<table border='1'>";
 			for(var i = 0; i < json.length; i++){
 				if(i == 0){
 					str = str + "<tr><td>用户编号</td><td>用户姓名</td><td>用户性别</td><td>身份证号</td><td>家庭住址</td>"
 					+"<td>用户电话</td></tr>";
 				}
 				str = str + "<tr><td>" + json[i].userId + "</td>";
 				str = str + "<td>" + json[i].userName + "</td>";
 				str = str + "<td>" + json[i].userSex + "</td>";
 				str = str + "<td>" + json[i].userCard + "</td>";
 				str = str + "<td>" + json[i].userAddress + "</td>";
 				str = str + "<td>" + json[i].userPhone + "</td>></tr>";
 			}
 			str + "</table>";
 			$("#tips").html(str);
 		},error:function(error){
 			$("#info9").html("显示入住信息操作成功");
 		}
 	})
}


















