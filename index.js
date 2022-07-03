let html = document.querySelector("#html");
let style =document.querySelector('#style')

let string = `
/*
    你好，我叫阿良
    我是web前端开发
    接下来，我要展示如何制作一个太极图
    首先我要准备一个div
*/
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
#div1{
    border :1px solid red;
    width:200px;
    height:200px;
    position:fixed;
    left:50%;
    top:50px;
    transform:translateX(-50%);
}
/*
先适配一下手机
*/
@media (max-width:500px){
    #html{
        height:50vh;
        overflow:auto;
    }
    #div1Wrapper{
        height:50vh;
        
    }
    #div1{
        position:relative;
        top:25%;
        left:50%;
    }
}
/*
    接下来我要把div变成一个八卦图
    首先，把它变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
    八卦图是阴阳形成的
    一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
*{
    ::after{
        box-sizing:border-box;
    }
    ::before{
        box-sizing:border-box;
    }
}
#div1::before{
    content:'';
    display:block;
    border:1px solid red;
    position:absolute;
}
#div1::after{
    content:'';
    display:block;
    border:1px solid red;
    position:absolute;
}
/*加一对阴阳鱼*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%); 
    border-style:none;
    background: #000;
    border-radius:50%;   
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%); 
    border-style:none;
    background: #fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(244,244,244,1) 25%, rgba(255,255,255,1) 100%);   
}
/*
    代码优化，
    自动折行
*/
#html{
    word-break:break-all;
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += `<br>`;//如果遇到回车加br
    } else if(string[n]===" "){
        string2+="&nbsp"

    }
    else{
      string2 += string[n];//否则继续拼接
    }
    // string2 += string[n] === "\n" ? "<br>" : string[n];

    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,9999);//设置窗口滚动条一直使劲拖到最下面，简单粗暴
    html.scrollTo(0,9999);
    
    n = n + 1;
    if (n < string.length) {
      step();
    }
  },10);
};



step();//执行开关




// string = string.replace(/\n/g,"<br>")

// demo.innerHTML = string.substring(0, n);
//截取（提取）子字符串方法

// 新手写法
// setInterval(() => {
//     n =n + 1
//     demo.innerHTML =n;
// },1000);

// 老手写法
