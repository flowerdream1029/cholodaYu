/**
 * 分页函数
 * pno--页数
 * psize--每页显示记录数
 * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数
 * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能
 **/
// function goPage(pno,psize){
//     var table = document.getElementsByTagName("table")[0];
//     var num = table.rows.length;//表格所有行数(所有记录数)
//     console.log(num);
//     var totalPage = 0;//总页数
//     var pageSize = psize;//每页显示行数
//     //总共分几页 
//     console.log("pageSize="+num/pageSize); //3.33333333335，是浮点数
//     console.log("整数是:"+parseInt(num/pageSize));Math.ceil()
//     if(num/pageSize > parseInt(num/pageSize)){   
//             totalPage=parseInt(num/pageSize)+1;   
//        }else{   
//            totalPage=parseInt(num/pageSize);   
//        }   
//     var currentPage = pno;//当前页数
//     var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
//        var endRow = currentPage * pageSize;//结束显示的行   40
//        endRow = (endRow > num)? num : endRow;    40
//        console.log(endRow);
//        //遍历显示数据实现分页
//     for(var i=1;i<(num+1);i++){    
//         var irow = table.rows[i-1];
//         if(i>=startRow && i<=endRow){
//             irow.style.display = "block";    
//         }else{
//             irow.style.display = "none";
//         }
//     }
//     var pageEnd = document.getElementById("pageEnd");
//     var tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";
//     if(currentPage>1){
//         tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
//         tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>"
//     }else{
//         tempStr += "首页";
//         tempStr += "<上一页";    
//     }

//     if(currentPage<totalPage){
//         tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
//         tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
//     }else{
//         tempStr += "下一页>";
//         tempStr += "尾页";    
//     }

//     var str = "跳至" + "<select id=\"pageSelect\">";
    
//     while(count <= totalPage){
//     	str+="<option>"+count+"</option>";
//     	count++;
//     }
//     str+="</select>"+"页"+"<button onclick=\"jumpToPage("+psize+")\">跳转</button>";
//     tempStr+=str;
//     document.getElementById("barcon").innerHTML = tempStr;   
// }

// var jumpToPage = function(p_size) {
// 	var pageSelect = document.getElementById("pageSelect");
// 	var value = pageSelect.value;
// 	goPage(value,p_size);
// };

// //排序身高那一列
// var sortHeight = function(){
// 	//获取表格对象
//     var table = document.getElementsByTagName("table")[0];
//     var trNodes = table.rows;

//     // console.log(typeof trNodes[1]); //Object
//     var topHeight = new Array();
//     for(var i = 1; i < trNodes.length; i++){
//     	topHeight[i-1] = parseInt(trNodes[i].children[2].innerHTML);
//     }
//     // console.log(topHeight);
//     //测试数据类型
//     // var id = trNodes[1].children[2].innerHTML;
//     // console.log(typeof id);//string
//     // console.log(parseInt(id));
//     // console.log(typeof parseInt(id));//number
// 	var myselect = document.getElementById('myselect');
// 	var value = myselect.value;
// 	if( value == "升序" ){
//         //将数组按从小到大排序
// 		topHeight.sort(function(a,b){
// 			return a-b;
// 		});
// 		//console.log(topHeight);
// 		var len = topHeight.length;
// 		var temp = new Object();
// 		// for(var j = 1; j <= len; j++) {
// 		// 	//index是数组的序号，所以需要+1才可以
// 		// 	var index = topHeight.findIndex( (value) => {
// 		// 		return value == parseInt(trNodes[j].children[2].innerHTML);
// 		// 	});
// 		// 	// temp = trNodes[index+1].cloneNode(true);
//   //  //          table.appendChild(temp);
// 		// 	console.log(index);
// 		// }

// 		//直接的方法，先找到180的那条，再直接添加在后面
// 		for(var i = 0; i< len ;i ++) {
// 			for(var j = 1;j<len+1;j++){
// 				if(topHeight[i] == parseInt( trNodes[j].children[2].innerHTML) ) {
// 					temp = trNodes[j].cloneNode(true);
//                     table.appendChild(temp);
// 				}
// 			}
// 		}
// 		console.log('删除前：',trNodes);
//         //删除原始的那些项
//         /*var count = 1;
//         while(count < 9) {
//         	//删除某个节点的常用用法，这样可以不用知道它的父节点是谁
//             trNodes[1].parentNode.removeChild(trNodes[1]);
//             count++;
//         };*/
//         table.removeChild(table.children[1]);
//         console.log('删除后：',trNodes);

// 	}else if( value == "降序" ){
// 		//将数组按从大到小进行排序
// 		topHeight.sort(function(a,b){
// 			return b-a;
// 		});

// 		var len = topHeight.length;
// 		var temp = new Object();
        
//         //直接的方法，先找到180的那条，再直接添加在后面
// 		for(var i = 0; i< len ;i ++) {
// 			for(var j = 1;j<len+1;j++){
// 				if(topHeight[i] == parseInt( trNodes[j].children[2].innerHTML) ) {
// 					temp = trNodes[j].cloneNode(true);
//                     table.appendChild(temp);
// 				}
// 			}
// 		}
//         //删除原始的那些项
//        /* var count = 1;
//         while(count < 9) {
//         	//删除某个节点的常用用法，这样可以不用知道它的父节点是谁
//             trNodes[1].parentNode.removeChild(trNodes[1]);
//             count++;
//         };*/
//         table.removeChild(table.children[1]);

// 	}
// };