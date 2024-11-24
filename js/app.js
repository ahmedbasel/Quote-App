var quotes=[
    {
        text:"“Be yourself; everyone else is already taken.”",
        author:"--Oscar Wilde"
    },
        {
        text:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"--Marilyn Monroe"
    },
    {
        text:"“So many books, so little time.”",
        author:"--Frank Zappa"
    },

    {
        text:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"--Albert Einstein"
    },

    {
        text:"“A room without books is like a body without a soul.”",
        author:"--Marcus Tullius Cicero"
    },
];

var lastQuote=-1;

function RandomQoute(){
    var randomQute=Math.floor(Math.random()*quotes.length); // 0----->5

    if (randomQute === lastQuote) { // if randomqote=lastoqute---> generate  new qoute
       
        randomQute=Math.floor(Math.random()*quotes.length); 
    }
    // if randomqote !=lastoqute---> هيكمل الكود بشكل طبيعي 
    var quote=quotes[randomQute];
    document.getElementById('quotes').innerHTML=quote.text;
    document.getElementById('Autor').innerHTML=quote.author;

    lastQuote = randomQuote;
}