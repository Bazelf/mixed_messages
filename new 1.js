// Generates a random quote from a famous general //

var general = ['Sun Tzu', 'Napoleon Bonaparte', 'Leonidas', 'Erwin Rommel', 'Douglas McArthur', 'Georgy Zhukov', 'George Patton', 'Alexander the Great']

// array with quote start
var quoteStart = ['Bombs', 'A general', 'Soldiers', 'The enemy', 'In war', 'For Motherland', 'Never retreat,', 'Surrender']

// array with mid secction of the quote
var quoteMid = ['shows no mercy', 'with a rifle in hand', 'will always obey', 'shoot to kill', 'in face of adversity', 'is prepared to die', 'can single handed', 'rains artillery fire']

// array of verbs
var verbs = ['will kill', 'must destroy', ' will punish', 'can attack', 'must raise', 'embrace', 'surround', 'surrender']

// array with end of the quote
var quoteEnd = ['upon your enemies.', 'over civilians.', 'his superiors orders.', 'or accept defeat.', 'even agains an entire army.', 'to end war.', 'the damned Nazis.', 'the damned Commies.']


// functionn to determine which element will be randomly picked
function randomPick(array) {
	      return Math.floor(Math.random() * array.length);
        }

let generalQuote = general[randomPick(general)]
let quote1 = quoteStart[randomPick(quoteStart)]
let quote2 = quoteMid[randomPick(quoteMid)]
let quote3 = quoteEnd[randomPick(quoteEnd)]
let verb = verbs[randomPick(verbs)]

var fullQuote = `${quote1} ${quote2} ${verb} ${quote3} ${generalQuote}`
    

console.log(fullQuote)

