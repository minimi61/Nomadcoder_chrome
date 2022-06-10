const quotes = [
    {
        quotes: "The road to success and the road to failure are almost exactly the same",
        author: "Colin R. Davis"
    },
    {
        quotes: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quotes: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quotes: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        quotes: "Success usually comes to those who are too busy to be looking for it.",
        author: "HHenry David Thoreau"
    },
    {
        quotes: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quotes: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quotes: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton"
    },
    {
        quotes: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis"
    },
    {
        quotes: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;