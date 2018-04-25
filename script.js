
var navigatorMessageMap = {
	'mac': 'macos',
  'iphone': 'macos',
  'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
  
  if (platform.indexOf(key) >= 0){
    let message = document.querySelector(`[data-version = ${version}]`);
    message.style.display = "block";
	}
}

