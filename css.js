const string = `
/*
你好，我叫阿良
我是web前端开发
接下来，我要展示如何制作皮卡丘
*/
.skin * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.skin *::before,
.skin *::before {
  box-sizing: border-box;
}

body {
  background: #ffe500;
}

.skin {
  min-height: 50hv;
  position: relative;
}
.nose {
  position: absolute;
  border: 10px solid black;
  border-color: black transparent transparent transparent;
  border-radius: 10px;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(8deg);
  }
  66% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: shake 250ms infinite linear;
}
.eye {
  border: 4px solid #000;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
}
.eye::before {
  content: '';
  display: block;
  border: 2px solid #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #fff;
  position: relative;
  left: 8px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  position: relative;
  position: absolute;
  border: 4px solid black;
  height: 30px;
  width: 100px;
  background: #ffe500;
  border-top-color: transparent;
  border-right-color: transparent;
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before {
  position: absolute;
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  bottom: 0;
  background: #ffe500;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right::before {
  left: -6px;
}
.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .yuan1 {
  position: absolute;
  border: 4px solid black;
  width: 160px;
  height: 1000px;
  bottom: 0;
  left: 50%;
  margin-left: -80px;
  border-radius: 80px/400px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  position: absolute;
  background: #ff4760;
  width: 180px;
  height: 300px;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -90px;
  border-radius: 100px;
}
.face {
  position: absolute;
  left: 50%;
  border: 4px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  background: #ff0000;
  border-radius: 50%;
  z-index: 2;
}
.face.left {
  transform: translateX(-180px);
}
.face.right {
  transform: translateX(180px);
}`

export default string