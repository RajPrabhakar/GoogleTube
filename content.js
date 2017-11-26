var v_div = document.getElementsByClassName("_ELb")[0];
var v_div_a = v_div.getElementsByTagName('a')[0];
var old_video = v_div_a.getAttribute('href');

// get video id as video
var video = old_video.replace("https://www.youtube.com/watch?v=","");

// template for embedding video
var video_temp = '<iframe width="632" height="312" src="https://www.youtube.com/embed/xLsgOBwzkXE" frameborder="0" allowfullscreen></iframe>'

// replace video id
var new_video = video_temp.replace("xLsgOBwzkXE",video);

// remove previous video
v_div.removeChild(v_div.childNodes[0]);

// embed new video
v_div.innerHTML = new_video;
