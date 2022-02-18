
// VoiceRSS Javascript SDK
// const VoiceRSS={speech:function(e){this._validate(e),this._request(e)},_validate:function(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){var a=!1;switch(e.c.toLowerCase()){case"mp3":a=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":a=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":a=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":a=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":a=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!a)throw"The browser does not support the audio codec "+e.c}},_request:function(e){var a=this._buildRequest(e),t=this._getXHR();t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){if(0==t.responseText.indexOf("ERROR"))throw t.responseText;audioElement.src=t.responseText,audioElement.play()}},t.open("POST","https://api.voicerss.org/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(a)},_buildRequest:function(e){var a=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return"key="+(e.key||"")+"&src="+(e.src||"")+"&hl="+(e.hl||"")+"&r="+(e.r||"")+"&c="+(a||"")+"&f="+(e.f||"")+"&ssml="+(e.ssml||"")+"&b64=true"},_detectCodec:function(){var e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR:function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};

//Voice Rss sdk 
const VoiceRSS = {
    speech: function (e) {
        this._validate(e), this._request(e);
    },
    _validate: function (e) {
        if (!e) throw "The settings are undefined";
        if (!e.key) throw "The API key is undefined";
        if (!e.src) throw "The text is undefined";
        if (!e.hl) throw "The language is undefined";
        if (e.c && "auto" != e.c.toLowerCase()) {
            var a = !1;
            switch (e.c.toLowerCase()) {
                case "mp3":
                    a = new Audio().canPlayType("audio/mpeg").replace("no", "");
                    break;
                case "wav":
                    a = new Audio().canPlayType("audio/wav").replace("no", "");
                    break;
                case "aac":
                    a = new Audio().canPlayType("audio/aac").replace("no", "");
                    break;
                case "ogg":
                    a = new Audio().canPlayType("audio/ogg").replace("no", "");
                    break;
                case "caf":
                    a = new Audio().canPlayType("audio/x-caf").replace("no", "");
            }
            if (!a) throw "The browser does not support the audio codec " + e.c;
        }
    },
    _request: function (e) {
        var a = this._buildRequest(e),
            t = this._getXHR();
        (t.onreadystatechange = function () {
            if (4 == t.readyState && 200 == t.status) {
                if (0 == t.responseText.indexOf("ERROR")) throw t.responseText;
                (audioElement.src = t.responseText), audioElement.play();
            }
        }),
            t.open("POST", "https://api.voicerss.org/", !0),
            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
            t.send(a);
    },
    _buildRequest: function (e) {
        var a = e.c && "auto" != e.c.toLowerCase() ? e.c : this._detectCodec();
        return "key=" + (e.key || "") + "&src=" + (e.src || "") + "&hl=" + (e.hl || "") + "&r=" + (e.r || "") + "&c=" + (a || "") + "&f=" + (e.f || "") + "&ssml=" + (e.ssml || "") + "&b64=true";
    },
    _detectCodec: function () {
        var e = new Audio();
        return e.canPlayType("audio/mpeg").replace("no", "")
            ? "mp3"
            : e.canPlayType("audio/wav").replace("no", "")
            ? "wav"
            : e.canPlayType("audio/aac").replace("no", "")
            ? "aac"
            : e.canPlayType("audio/ogg").replace("no", "")
            ? "ogg"
            : e.canPlayType("audio/x-caf").replace("no", "")
            ? "caf"
            : "";
    },
    _getXHR: function () {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml3.XMLHTTP");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
        throw "The browser does not support HTTP request";
    },
};

//url fr fetching joke
const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

//tellJoke button
const tellJokeBtn =  document.getElementById('jokeBtn');

//audio element
const audioElement = document.getElementById('audio');

//Bubble
const bubble = document.querySelector('.bubble');

//variable that contains fetched joke
let joke = '';

//function to disable and enable button
function toggle(){
    // .diabled return true/false 
    //if it return true button is disabled then !.disabled will enable it
    //and vice versa
    tellJokeBtn.disabled=!tellJokeBtn.disabled;
}


// tell joke function accepts joke string as parameter and calls Voice RSS's speech method and passes joke as source
function tellMeJoke(joke){
    VoiceRSS.speech({
        key: '9f8ce55541e9424fa998b3472e121e46',
        src: `${joke}`,
        hl: 'en-us',
        v: 'Linda',
        r: 1, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


function fillBubble(joke){
    console.log(bubble);
    bubble.hidden=false;
    bubble.innerText=joke;
}

//function to fetch joke
async function getJoke(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        //if joke is two part joke it has setup and delivery
        //if there is a setup then make joke string by concatinating setup and delivery part
        if(data.setup){
            joke=`${data.setup} ${data.delivery}`;
        }
        else{
        //if setup is not there then direct initialise joke string with data.joke    
            joke=data.joke;
        }
        //once tellMeJoke button is pressed then getJoke gets invoked
        //it fetches joke and call tellMeJoke function while joke is speaking disable the button using toggle
        toggle();
        fillBubble(joke);
        //function call for tellMeJoke function
        tellMeJoke(joke);
    
        
        
        // console.log(joke);
    }
    catch(error){
        console.log(error);
    }
}

//invokes getJoke when user clicks tellJoke button
tellJokeBtn.addEventListener('click',()=>{
    getJoke();
});

//enables the button again when joke is ended
audioElement.addEventListener('ended',()=>{
    toggle();
    bubble.innerText='';
    bubble.hidden=true;
});


















