var curryQuotes=[
    'Success is not an accident, success is actually a choice.',
    'Be the best version of yourself in anything you do. You don’t have to live anybody else’s story. ',
    "I've never been afraid of big moments. I get butterflies. I get nervous and anxious, but I think those are all good signs that I'm ready for the moment.",
    "Every time I rise up, I have confidence that I'm going to make it.",
    'Play like you’re in first. Train like you’re in second.'
];

var jordanQuotes=[
    "The key to success is failure.",
    "Failure makes me work even harder.",
    "I've never been afraid to fail.",
    "If you do the work, you get rewarded. There are no shortcuts in life.",
    "Heart is what separates the good from the great.",
];
var durantQuotes=[
    "Hard work beats talent when talent fails to work hard.",
    "It’s hard to play well, but it’s easy to work hard.",
    "Work harder than your opponent",
    "I know that hard work got me here. And the day I stop working hard, this can all go away.",
    "When you got people behind you, you can do whatever.",
];
var bryantQuotes=[
    "Dedication makes dreams come true.",
    "Once you know what failure feels like, determination chases success.",
    "May you always remember to enjoy the road, especially when it’s a hard one.",
    "If you’re afraid to fail, then you’re probably going to fail.",
    "These young guys are playing checkers. I’m out there playing chess.",
];
var jamesQuotes=[
    "Nothing is given. Everything is earned.",
    "I think team first. It allows me to succeed, it allows my team to succeed.",
    "You can’t be afraid to fail. It’s the only way you succeed. You’re not gonna succeed all the time and I know that.",
    "I like criticism. It makes you strong.",
    "You have to be able to accept failure to get better."
];


var quoteMessage=document.getElementById('quote-message');

var quotePerson=document.getElementById('quote-person');

var curryButton=document.getElementById('curry-quote');
var jordanButton=document.getElementById('jordan-quote');
var durantButton=document.getElementById('durant-quote');
var kobeButton=document.getElementById('kobe-quote');
var lebronButton=document.getElementById('lebron-quote');

var curry_index=0;
curryButton.onclick=function(){
    document.getElementById('curry-img').classList.add('addImgColor');


    if (curry_index<5){
        for(var curryItem of curryQuotes){
            if(curryItem==curryQuotes[curry_index]){
                quoteMessage.innerHTML=curryItem;
                quotePerson.innerHTML='Stephen Curry';
                break;

            }else{
                console.log('Error! Wrong Quote')
            }
        }
        curry_index+=1;
    }else{
        curry_index=0;

    } 
}


var jordan_index=0;
jordanButton.onclick=function(){
    document.getElementById('jordan-img').classList.add('addImgColor');
    if (jordan_index<5){
        for(var jordanItem of jordanQuotes){
            if(jordanItem==jordanQuotes[jordan_index]){
                quoteMessage.innerHTML=jordanItem;
                quotePerson.innerHTML='Michael Jordan';
                break;

            }else{
                console.log('Error! Wrong Quote')
            }
        }
        jordan_index+=1;
    }else{
        jordan_index=0;

    } 
}

var durant_index=0;
durantButton.onclick=function(){
    document.getElementById('durant-img').classList.add('addImgColor');
    if (durant_index<5){
        for(var durantItem of durantQuotes){
            if(durantItem==durantQuotes[durant_index]){
                quoteMessage.innerHTML=durantItem;
                quotePerson.innerHTML='Kevin Durant';
                break;

            }else{
                console.log('Error! Wrong Quote')
            }
        }
        durant_index+=1;
    }else{
        durant_index=0;

    } 
}

var kobe_index=0;
kobeButton.onclick=function(){
    
    document.getElementById('kobe-img').classList.add('addImgColor');

    if (kobe_index<5){
        for(var kobeItem of bryantQuotes){
            if(kobeItem==bryantQuotes[kobe_index]){
                quoteMessage.innerHTML=kobeItem;
                quotePerson.innerHTML='Kobe Bryant';
                break;

            }else{
                console.log('Error! Wrong Quote')
            }
        }
        kobe_index+=1;
    }else{
        kobe_index=0;

    } 
}


var james_index=0;
lebronButton.onclick=function(){

    document.getElementById('lebron-img').classList.add('addImgColor');
    if (james_index<5){
        for(var jamesItem of jamesQuotes){
            if(jamesItem==jamesQuotes[james_index]){
                quoteMessage.innerHTML=jamesItem;
                quotePerson.innerHTML='Lebron James';
                break;

            }else{
                console.log('Error! Wrong Quote')
            }
        }
        james_index+=1;
    }else{
        james_index=0;

    } 
}


//change picture to colored if user clicks quote

// Get all buttons with the name 'all' and store in a NodeList called 'buttons'
var buttons = document.getElementsByClassName('all');

// Loop through NodeList and call the click() function on each button
for(var i = 0; i <= buttons.length; i++)  
    buttons[i].click();