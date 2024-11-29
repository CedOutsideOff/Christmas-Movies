
//films

const movies = [
    "Home Alone",
    "Home Alone 2: Lost in New York",
    "Elf",
    "The Polar Express",
    "How the Grinch Stole Christmas",
    "The Santa Clause",
    "The Santa Clause 2",
    "The Santa Clause 3: The Escape Clause",
    "A Christmas Carol",
    "Love Actually",
    "It's a Wonderful Life",
    "Miracle on 34th Street",
    "The Nightmare Before Christmas",
    "Jingle All the Way",
    "White Christmas",
    "The Holiday",
    "A Charlie Brown Christmas",
    "Scrooged",
    "Christmas with the Kranks",
    "Arthur Christmas",
    "Four Christmases",
    "The Christmas Chronicles",
    "The Christmas Chronicles: Part Two",
    "Deck the Halls",
    "Fred Claus",
    "National Lampoon's Christmas Vacation",
    "Bad Santa",
    "Bad Santa 2",
    "A Very Harold & Kumar Christmas",
    "Klaus",
    "Noelle",
    "The Princess Switch",
    "The Princess Switch: Switched Again",
    "The Princess Switch 3: Romancing the Star",
    "Holidate",
    "A Christmas Prince",
    "A Christmas Prince: The Royal Wedding",
    "A Christmas Prince: The Royal Baby",
    "Office Christmas Party",
    "The Man Who Invented Christmas",
    "Last Christmas",
    "A Boy Called Christmas",
    "The Family Stone",
    "The Preacher's Wife",
    "Prancer",
    "Jack Frost",
    "Eight Crazy Nights",
    "While You Were Sleeping",
    "The Star",
    "Rise of the Guardians",
    "Shrek the Halls",
    "The Muppet Christmas Carol",
    "Rudolph the Red-Nosed Reindeer",
    "Frosty the Snowman",
    "The Year Without a Santa Claus",
    "Santa Claus Is Comin' to Town",
    "Nestor, the Long-Eared Christmas Donkey",
    "Olive, the Other Reindeer",
    "A Christmas Story",
    "A Christmas Story 2",
    "Christmas in Connecticut",
    "Meet Me in St. Louis",
    "Holiday Inn",
    "Babes in Toyland",
    "I'll Be Home for Christmas",
    "One Magic Christmas",
    "Christmas Eve",
    "Call Me Claus",
    "Snow Day",
    "The Polar Bear King",
    "Christmas in the Smokies",
    "The Christmas Candle",
    "The Nativity Story",
    "Eloise at Christmastime",
    "Angels in the Snow",
    "The Snowman",
    "Mr. Magoo's Christmas Carol",
    "Journey Back to Christmas",
    "The Spirit of Christmas",
    "Midnight at the Magnolia",
    "12 Dates of Christmas",
    "Christmas Wonderland",
    "Christmas at the Plaza",
    "The Perfect Holiday",
    "The Twelve Days of Christmas Eve",
    "The Best Man Holiday",
    "Holiday Rush",
    "Almost Christmas",
    "My Christmas Inn",
    "Christmas Under Wraps",
    "Christmas in the Wild",
    "A California Christmas",
    "A California Christmas: City Lights",
    "Jingle Jangle: A Christmas Journey",
    "A Snow Globe Christmas",
    "Snowbound for Christmas",
    "Christmas Belle",
    "The Night Before",
    "An Ice Wine Christmas"
];



//constances

const bouton = document.getElementById('bouton');
const quoteElement = document.getElementById('movie');


//bouton et fonctions

function getmovies() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const newQuote = movies[randomIndex];

    quoteElement.textContent = newQuote;

}

bouton.addEventListener('click', getmovies);








document.getElementById('bouton')