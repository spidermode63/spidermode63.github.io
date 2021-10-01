var el = document.getElementById('splash');

const Splashes = [
    "Nice day isn't it?",
    "Made with Github!",
    "End Homophobia!",
    "Climate Change is Real!",
    "Splash Text",
    "This Site is actually Windows powered but ignore that!",
    "Merry Christmas!",
    "End Racism!",
    "Cherry MX Blues!",
    "Try HTML5!",
    "!DOCTYPE html",
    "Splash Text 2, the cooler one",
    "Read the Newsletter!",
    "Clarinets are epic",
    "Site Online!",
    "Get off the site Mom, I'm Playing Minecraft!",
    "Best viewed in 1080p",
    "Best viewed with Firefox!",
    "I hope you're ready!",
    "There's a test today in Social Studies!",
    "How dare you!",
    "One small step for Man...",
    "Not all those who wander are lost",
    "One giant leap for Mankind.",
    "rock free!",
    "stop. just stop.",
    "This text has nothing to do with Minecraft",
    "What... Oh-",
    "This makes 29!",
    "And this makes 30!"
];

const random = Math.floor(Math.random() * Splashes.length);
txt = (random, Splashes[random])

el.innerHTML = txt;