var qoutes = [
    {
        Qoute: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
        author: "― Martin Luther King"
    },
    {
        Qoute: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky"
    }
    ,
    {
        Qoute: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche"
    }
    ,
    {
        Qoute: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author: "― Oscar Wilde"
    }
    ,
    {
        Qoute: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author: "― Ralph Waldo Emerson"
    }
    ,
    {
        Qoute: "“Insanity is doing the same thing, over and over again, but expecting different results.”",
        author: "― Narcotics Anonymous"
    }
    ,
    {
        Qoute: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "― Andre Gide"
    }

]
function qoutegenerate() {
   qoutesIndex=(Math.round(Math.random() * qoutes.length));

    document.getElementById("qoute").innerHTML = qoutes[qoutesIndex].Qoute;
    document.getElementById("author").innerHTML = qoutes[qoutesIndex].author;
}