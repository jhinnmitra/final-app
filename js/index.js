var imageBaseURL = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
var champions = [
  {
    name: "Ahri",
    quote: ["Should I make your pulse rise? Or . . . STOP!"],
    image: "Ahri_0",
    color: "color: white; text-shadow: 0 0 6px #005ce6",
    voice: ["http://vignette4.wikia.nocookie.net/leagueoflegends/images/a/ab/Ahri.taunt.ogg/revision/latest?cb=20120616024702"]
  }, {
    name: "Akali",
    quote: ["Hesitation is the seed of defeat"],
    image: "Akali_0",
    color: "color: white; text-shadow: 0 0 6px #4dffdb",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/3/38/Akali.move7.ogg/revision/latest?cb=20121126174604"]
  }, {
    name: "Amumu",
    quote: ["Let's be friends forever", "Let me give you a hug"],
    image: "Amumu_0",
    color: "color: white; text-shadow: 0 0 6px #166B09",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/e/ed/Amumu.joke.ogg/revision/latest?cb=20121127025808", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/3/31/Amumu.taunt.ogg/revision/latest?cb=20121127025808"]
  }, {
    name: "Annie",
    quote: ["Have you seen my bear Tibbers?"],
    image: "Annie_6",
    color: "color: white; text-shadow: 0 0 6px #FF0000",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/5/52/Annie.move1.ogg/revision/latest?cb=20130118045423"]
  }, {
    name: "Aurelion Sol",
    quote: ["Your survival is not impossible, only very. . . very. . . very unlikely"],
    image: "AurelionSol_0",
    color: "color: white; text-shadow: 0 0 6px #0C04F9",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/d/da/AurelionSol.taunt02.ogg/revision/latest?cb=20160309222531"]
}, {
    name: "Azir",
    quote: ["We are made by our choices"],
    image: "Azir_0",
    color: "color: white; text-shadow: 0 0 6px #ffd633",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/a/a0/Azir.move14.ogg/revision/latest?cb=20140827014724"]
  }, {
    name: "Blitzcrank",
    quote: ["The time of man has come to an end"],
    image: "Blitzcrank_0",
    color: "color: white; text-shadow: 0 0 6px #F5FF54",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/a/ae/Blitzcrank.taunt.ogg/revision/latest?cb=20121127005333"]
  }, {
    name: "Braum",
    quote: ["Today we fight each other" + "\n" + "Tomorrow, we may fight together"],
    image: "Braum_0",
    color: "color: white; text-shadow: 0 0 6px #3366ff",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/5/54/Braum.attack17.ogg/revision/latest?cb=20140423012202"]
  },  {
    name: "Cassiopeia",
    quote: ["Every problem is an opportunity"],
    image: "Cassiopeia_0",
    color: "color: white; text-shadow: 0 0 6px #ffff00",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/d/de/Cassiopeia.move16.ogg/revision/latest?cb=20140831181055"]
  }, {
    name: "Ekko",
    quote: ["I'd rather make mistakes than make nothing at all"],
    image: "Ekko_0",
    color: "color: white; text-shadow: 0 0 6px #00ffcc",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/8/80/Ekko.move21.ogg/revision/latest?cb=20150513224104"]
  }, {
    name: "Ezreal",
    quote: ["Scanning for real threats . . . none detected"],
    image: "Ezreal_5",
    color: "color: white; text-shadow: 0 0 6px #3366ff",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/a/ae/PulsefireEzreal.attack6.ogg/revision/latest?cb=20121126223646"]
  }, {
    name: "Fiddlesticks",
    quote: ["I haven't got a brain, and soon . . . neither will you!"],
    image: "FiddleSticks_0",
    color: "color: white; text-shadow: 0 0 6px #000000",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/6/64/Fiddlesticks.joke.ogg/revision/latest?cb=20121127045232"]
  }, {
    name: "Garen",
    quote: ["For Demacia", "Fear is the first of many foes"],
    image: "Garen_0",
    color: "color: white; text-shadow: 0 0 6px #3366ff",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/3/39/Garen.move02.ogg/revision/latest?cb=20130914213720", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/3/37/Garen.move13.ogg/revision/latest?cb=20130914214134"]
  }, {
    name: "Heimerdinger",
    quote: ["Why do chemists call helium, curium, and barium 'the medical elements'?" + "\n" + "Because, if you can't 'helium' or 'curium', you 'barium'! Hm hm!", "I prefer a battle of wits, but you're unarmed", "Why do people say 'you can't trust atoms'?" + "\n" + "Because they 'make up everything'! Hehe!"],
    image: "Heimerdinger_0",
    color: "color: white; text-shadow: 0 0 6px #B215E2",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/3/32/Heimerdinger.joke.ogg/revision/latest?cb=20121126234258", "http://vignette3.wikia.nocookie.net/leagueoflegends/images/5/5f/Heimerdinger.taunt01.ogg/revision/latest?cb=20140228032953", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/b/b2/Heimerdinger.joke02.ogg/revision/latest?cb=20140228032704"]
  }, {
    name: "Illaoi",
    quote: ["I value truth - and barbecue", "Bearded Lady, Nagakabouros, names don't matter! Action does"],
    image: "Illaoi_0",
    color: "color: white; text-shadow: 0 0 6px #00B756",
    voice: ["http://vignette4.wikia.nocookie.net/leagueoflegends/images/2/26/Illaoi.move33.ogg/revision/latest?cb=20151114232512", "http://vignette4.wikia.nocookie.net/leagueoflegends/images/1/18/Illaoi.move31.ogg/revision/latest?cb=20151114232438"]
  }, {
    name: "Karma",
    quote: ["I have seen two paths and made another between", "We have learned as much as we have suffered"],
    image: "Karma_0",
    color: "color: white; text-shadow: 0 0 6px #7300e6",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/9/96/Karma.move03.ogg/revision/latest?cb=20130320013145", "http://vignette3.wikia.nocookie.net/leagueoflegends/images/7/72/Karma.move10.ogg/revision/latest?cb=20130320013146"]
  }, {
    name: "Karthus",
    quote: ["You have been dying from your first breath"],
    image: "Karthus_0",
    color: "color: white; text-shadow: 0 0 6px #33cccc",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/e/e9/Karthus.move16.ogg/revision/latest?cb=20140522070300"]
  }, {
    name: "Kindred",
    quote: ["The only true death is to never live"],
    image: "Kindred_0",
    color: "color: white; text-shadow: 0 0 6px #1a75ff",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/f/f2/Kindred.move03.ogg/revision/latest?cb=20150916183033"]
  },  {
    name: "Kog'Maw",
    quote: ["Hunger never sleep", "Keep coming! Not full!"],
    image: "KogMaw_0",
    color: "color: white; text-shadow: 0 0 6px #FFBA7E",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/10/KogMaw.attack3.ogg/revision/latest?cb=20121126170002", "http://vignette3.wikia.nocookie.net/leagueoflegends/images/e/e3/KogMaw.taunt1.ogg/revision/latest?cb=20121126170107"]
  }, {
    name: "Leblanc",
    quote: ["Looks can be deceiving"],
    image: "Leblanc_0",
    color: "color: white; text-shadow: 0 0 6px #e066ff",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/1/1c/LeBlanc.move8.ogg/revision/latest?cb=20121120015614"]
  }, {
    name: "Malphite",
    quote: ["Caught between a rock . . . and a hard place"],
    image: "Malphite_0",
    color: "color: white; text-shadow: 0 0 6px #4d3319",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/1a/Malphite.joke.ogg/revision/latest?cb=20121127004336"]
  }, {
    name: "Master Yi",
    quote: ["A true master is an eternal student"],
    image: "MasterYi_0",
    color: "color: white; text-shadow: 0 0 6px #bfff80",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/5/57/MasterYi.move15.ogg/revision/latest?cb=20130713221433"]
  }, {
    name: "Mundo",
    quote: ["Mundo will go where he pleases", "Mundo say his own name a lot, or else he forget" + "\n" + "Has happened before"],
    image: "DrMundo_0",
    color: "color: white; text-shadow: 0 0 6px #9342D1",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/6/61/DrMundo.attack4.ogg/revision/latest?cb=20120615005340", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/e/e8/DrMundo.joke.ogg/revision/latest?cb=20120615005340"]
   }, {
    name: "Nasus",
    quote: ["No dawn comes without darkness"],
    image: "Nasus_0",
    color: "color: white; text-shadow: 0 0 6px #000000",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/5/55/Nasus.move12.ogg/revision/latest?cb=20131031232717"]
   }, {
    name: "Sejuani",
    quote: ["Deeds, not words"],
    image: "Sejuani_0",
    color: "color: white; text-shadow: 0 0 6px #008ae6",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/6/62/Sejuani.move03.ogg/revision/latest?cb=20130402233815"]
   }, {
    name: "Syndra",
    quote: ["People fear what they cannot understand"],
    image: "Syndra_0",
    color: "color: white; text-shadow: 0 0 6px #4d0099",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/0/08/Syndra.move7.ogg/revision/latest?cb=20121119071138"]
   }, {
    name: "Tahm Kench",
    quote: ["Every heart has its own hunger"],
    image: "TahmKench_0",
    color: "color: white; text-shadow: 0 0 6px #206040",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/a/a9/TahmKench.move07.ogg/revision/latest?cb=20150624150941"]
   }, {
    name: "Taliyah",
    quote: ["Hard work polishes the roughest stones", "No choice is written in stone"],
    image: "Taliyah_0",
    color: "color: white; text-shadow: 0 0 6px #ff9966",
    voice: ["http://vignette2.wikia.nocookie.net/leagueoflegends/images/5/5e/Taliyah.move06.ogg/revision/latest?cb=20160507153542", "http://vignette3.wikia.nocookie.net/leagueoflegends/images/d/d8/Taliyah.move35.ogg/revision/latest?cb=20160507153714"]
   }, {
    name: "Taric",
    quote: ["Gems are truly, truly, truly outrageous", "I've been to the top of the mountain . . . and the bottom of the gutter" + "\n" + "There's much to learn from both"],
    image: "Taric_0",
    color: "color: white; text-shadow: 0 0 6px #4d4dff",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/c/cf/Taric.joke10.ogg/revision/latest?cb=20160407223928", "http://vignette2.wikia.nocookie.net/leagueoflegends/images/2/2c/Taric.joke01.ogg/revision/latest?cb=20160407223856"]
  }, {
    name: "Teemo",
    quote: ["Hut, two, three, four", "Size doesn't mean everything"],
    image: "Teemo_0",
    color: "color: white; text-shadow: 0 0 6px #579837",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/3/3f/Teemo.attack1.ogg/revision/latest?cb=20120619062456", "http://vignette1.wikia.nocookie.net/leagueoflegends/images/f/f2/Teemo.joke.ogg/revision/latest?cb=20120619062518"]
  }, {
    name: "Vi",
    quote: ["If you hit a wall, hit it hard"],
    image: "Vi_0",
    color: "color: white; text-shadow: 0 0 6px #994d00",
    voice: ["http://vignette1.wikia.nocookie.net/leagueoflegends/images/6/60/Vi.move9.ogg/revision/latest?cb=20121208081826"]
  }, {
    name: "Volibear",
    quote: ["A fool and his head are easily parted"],
    image: "Volibear_0",
    color: "color: white; text-shadow: 0 0 6px #65D1FF",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/9/97/Volibear.taunt.ogg/revision/latest?cb=20121119194102"]
  }, {
    name: "Yasuo",
    quote: ["Honor is in the heart, not the name"],
    image: "Yasuo_0",
    color: "color: white; text-shadow: 0 0 6px #0073e6",
    voice: ["http://vignette3.wikia.nocookie.net/leagueoflegends/images/d/d5/Yasuo.move15.ogg/revision/latest?cb=20131123012852"]
  }];

var tweetQuote;

function generateQuote() {
  var randChamp = champions[Math.floor(Math.random() * champions.length)];
  var randQuote = Math.floor(Math.random() * randChamp.quote.length);
  tweetQuote = randChamp.quote[randQuote] + " -" + randChamp.name;
  var quoteText = document.getElementById('quote-text');
  var audioTag = document.getElementById('audio-tag');
  audioTag.volume = 0.3;
  
  quoteText.innerHTML = "<pre>" + randChamp.quote[randQuote] + "\n\n" + randChamp.name + "</pre>"; document.getElementById('background-image').src = imageBaseURL + randChamp.image + ".jpg";
  quoteText.style = randChamp.color;
  audioTag.src = randChamp.voice[randQuote];
  audioTag.play();
  
   $("#quote-text").animate({
       opacity: 0
     }, 100,
     function() {
       $(this).animate({
          opacity: 1
       }, 100);
    });

    $("#background-image").animate({
         opacity: 0
       }, 200,
       function() {
         $(this).animate({
            opacity: 1
         }, 200);
    });
}

$('#tweet').on('click', function () {
  $("pre").remove("#quote-text"); 
  window.open("https://twitter.com/intent/tweet?text="+tweetQuote, "MsgWindow", "width=600px, height=300px")
});

$(document).ready(function() {
   generateQuote();
});