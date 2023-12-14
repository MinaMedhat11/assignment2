var qoutes = [
    {
        Quote: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
        author: "― Martin Luther King"
    },
    {
        Quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky"
    }
    ,
    {
        Quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche"
    }
    ,
    {
        Quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author: "― Oscar Wilde"
    }
    ,
    {
        Quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author: "― Ralph Waldo Emerson"
    }
    ,
    {
        Quote: "“Insanity is doing the same thing, over and over again, but expecting different results.”",
        author: "― Narcotics Anonymous"
    }
    ,
    {
        Quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "― Andre Gide"
    }

]
function quotegenerate() {
   quotesIndex=(Math.round(Math.random() * quotes.length));

    document.getElementById("quote").innerHTML = quotes[quotesIndex].Quote;
    document.getElementById("author").innerHTML = quotes[quotesIndex].author;
}
