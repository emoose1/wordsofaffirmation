var affirmation = ""
var affirmations = []
var randomAffirmation = ""
var emoji = ""
var emojis = ['😊','😇','⭐️ ','✨','🎈','🌝','🌞','🙌🏽',' 👏🏽']
$.getJSON("affirmations.json", function(json) {
    console.log(json);
    affirmations = json;

});

function getAffirmation() {
    randomAffirmation = affirmations[Math.round((Math.random() * (affirmations.length - 1)))].A
    emoji = emojis[Math.round((Math.random() * (emojis.length - 1)))]
    affirmation = randomAffirmation + " " + emoji

    return document.getElementById('affirmation').innerHTML = affirmation;
}

function showDiv() {
    getAffirmation()
    document.getElementById('affirmation').style.display = "block";
}
