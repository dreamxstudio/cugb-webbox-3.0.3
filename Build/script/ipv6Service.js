ie = new ActiveXObject("InternetExplorer.Application");
ie.visible = true;
ie.navigate("http://[2001:da8:214:102:d6be:d9ff:feaa:422a]:8800/services.php");
while(ie.busy){WScript.sleep(100);}
var document = ie.document;
var window = document.parentWindow;
var form = document.forms[0];
if(form)
{
	form.user_login_name.value = "1004101215";
	form.user_password.value   = "0823446688shijie";
	form.target = "_self";
	form.submit();
}