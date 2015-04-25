var gui = require("nw.gui"); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();

if (process.platform === "darwin")
{
	var nativeMenuBar = new gui.Menu(
	{
		type: "menubar"
	});
	nativeMenuBar.createMacBuiltin("TiddlyPad");
	win.menu = nativeMenuBar;
}

var wiki = gui.Window.open("assets/wikis/scratch.html", { "toolbar": false, "width": 1000, "height": 600});
wiki.focus();