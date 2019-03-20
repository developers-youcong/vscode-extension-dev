import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("Login.start", () => {
      const panel = vscode.window.createWebviewPanel(
        "登陆界面",
        "登陆界面",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登陆界面</title>
</head>
<body>
<form id="login">
<p>用户名:<input type="text" id="userName" style="color:black;"/></p>
<p>密&nbsp;&nbsp;码&nbsp;&nbsp;:<input type="password" id="password" style="color:black;"/></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="color:black;" value="提交" onclick="test()"/>
<span id="test"></span>
</form>

    <script>
    function test(){
      var xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = function () {
      
      if (xhr.readyState == 4) {
      
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      
        console.log(xhr.responseText);

         document.getElementById("test").innerHTML="success";
 
      } else {
     
        console.log(xhr.responseText);

        document.getElementById("test").innerHTML="error";
      
      }
      }
      };
      xhr.open("GET", "http://localhost:8081/hello", true);
      xhr.send(null);            
  } 
  
    </script>
</body>
</html>`;
}
