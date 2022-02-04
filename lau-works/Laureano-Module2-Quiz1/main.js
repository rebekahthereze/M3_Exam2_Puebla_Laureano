let aristotle = document.getElementById('aristotle');
let plato = document.getElementById('plato');
let socrates = document.getElementById('socrates');
let pythagoras = document.getElementById('pythagoras');
let heraclitus = document.getElementById('heraclitus');

let getQuote = document.getElementById('getQuote');

let quote = document.getElementById('quote');
let select = [];

let aristotleQuote =
[
    '"Knowing yourself is the beginning of all wisdom." -Aristotle',
    '"It is the mark of an educated mind to be able to entertain a thought without accepting it." -Aristotle',
    '"Hope is a waking dream." -Aristotle',
    '"No great mind has ever existed without a touch of madness." -Aristotle',
    '"Happiness depends upon ourselves." -Aristotle'
]

let platoQuote =
[
    '"Be kind, for everyone you meet is fighting a harder battle." -Plato',
    '"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light." -Plato',
    '"Only the dead have seen the end of war." -Plato',
    '"Never discourage anyone...who continually makes progress, no matter how slow." -Plato',
    '"The price good men pay for indifference to public affairs is to be ruled by evil men." -Plato'
]

let socratesQuote =
[
    '"The only true wisdom is in knowing you know nothing." -Socrates',
    '"The unexamined life is not worth living." -Socrates',
    '"I cannot teach anybody anything. I can only make them think." -Socrates',
    '"There is only one good, knowledge, and one evil, ignorance." -Socrates',
    '"Be kind, for everyone you meet is fighting a hard battle." -Socrates'
]

let pythagorasQuote =
[
    '"No man is free who cannot control himself." -Pythagoras',
    '"Reason is immortal, all else mortal." -Pythagoras',
    '"Be a good son, just brother, spouse tender and good father." -Pythagoras',
    '"Thy foolish passions: learn thou to subdue them." -Pythagoras',
    '"Anger begins in folly, and ends in repentance." -Pythagoras'
]

let heraclitusQuote =
[
    '"Wisdom is the oneness of mind that guides and permeates all things." -Heraclitus',
    '"Time is a game played beautifully by children." -Heraclitus',
    '"Nothing endures but change." -Heraclitus',
    '"Much learning does not teach understanding." -Heraclitus',
    '"It is in changing that we find purpose." -Heraclitus'
]

aristotle.onclick = function() {
    document.getElementById("getQuote").style.visibility="visible";
    select = aristotleQuote;
}
plato.onclick = function() {
    document.getElementById("getQuote").style.visibility="visible";
    select = platoQuote;
}
socrates.onclick = function() {
    document.getElementById("getQuote").style.visibility="visible";
    select = socratesQuote;
}
pythagoras.onclick = function() {
    document.getElementById("getQuote").style.visibility="visible";
    select = pythagorasQuote;
}
heraclitus.onclick = function() {
    document.getElementById("getQuote").style.visibility="visible";
    select = heraclitusQuote;
}

getQuote.onclick = function() {
    document.getElementById("quote").style.visibility="visible";
    var randomQuote = select[Math.floor(Math.random() * select.length)]
    quote.innerHTML = randomQuote;
}

