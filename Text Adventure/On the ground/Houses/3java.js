var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["blood", "clock", "boy", "key", "girl", "dog", "earth", "mars", "United Nations", "computer"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "golden", "terrifying", "horryfying", "dumb", "rough", "rude", "old", "creepy", "hidden"];
adverbs = ["slowly", "horrifically", "precisely", "quickly", "sadly", "humbly", "grotesqueley", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();