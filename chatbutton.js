(function() {
	var chatReferrer = window.location.host;
	var li = document.createElement('li');
	li.id = 'library-chat';
	li.className = 'library-chat';
	var libChatDiv = document.createElement('a');
	libChatDiv.appendChild(document.createTextNode('Ask a Question'));
	libChatDiv.className = 'btn btn-default';
	li.appendChild(libChatDiv);
	document.getElementById('cms-navigation').getElementsByTagName('ul')[0].appendChild(li);
	/*
	var chatWindow = function() {
		window.open('https://prod.library.gvsu.edu/labs/chat/?' + chatReferrer, 'Ask a Question', 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,left=20,top=20,width=460,height=460');
	}
	*/
	var chatWindow = function() {
		window.open('https://v2.libanswers.com/widget_chat.php?hash=6290b3d40228a9e708fa7066d01f56bf', 'Ask a Question', 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,left=20,top=20,width=460,height=460');
	}
	if (libChatDiv.addEventListener) {
		libChatDiv.addEventListener('click', chatWindow, false);
	} else {
		libChatDiv.attachEvent('onclick', chatWindow);
	}
})();