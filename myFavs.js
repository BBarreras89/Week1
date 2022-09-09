const myFavBook = {
    title: `Ready Player One`,
    author: `Ernest Cline`,
    year: `2011`,
    genre: `Science Fiction`,
    description: `The story, set in a dystopia in 2045, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which would lead him to inherit the game creator's fortune.`,
}

const myFavMovie = {
    title: `A Walk To Remember`,
    director: `Adam Shankman`,
    year: `2002`,
    description: `A boy has to do extra curriculum work at the schools theater after an incedent. There he falls in love with his co star, but not everything is as happy as it seems.`,
    actors: [
        {
            actorName: "Mandy Moore",
            roleName: "Jamie Sullivan"
        },
        {
            actorName: "Shane West",
            roleName: "Landon Carter"
        },
        {
            actorName: "Peter Coyote",
            roleName: "Reverend Sullivan"
        },
        {
            actorName: "Daryl Hannah",
            roleName: "Cynthia Carter"
        },
        {
            actorName: "Lauren German",
            roleName: "Belinda"
        },
        {
            actorName: "Al Thompson",
            roleName: "Eric"
        },
       
    ]
};

const myFavSeries ={
    title: `Scrubs`,
    director: `Bill Lawrence`,
    year: `2001 - 2010`,
    description: `In this series we follow JD as he starts his journey from a fresh medicine college alumni in to becoming a doctor. During this adventure he encounters a lot of ups and downs.`,
    seasons: [
        {
            episodes: 24,
            startYear: `02.10.2001`,
            endYear: `21.05.2002`
        },
        {
            episodes: 22,
            startYear: `26.09.2002`,
            endYear: `17.04.2003`
        },
        {
            episodes: 22,
            startYear: `03.10.2003`,
            endYear: `04.05.2004`
        },
        {
            episodes: 25,
            startYear: `31.08.2004`,
            endYear: `10.05.2005`
        },
        {
            episodes: 24,
            startYear: `03.01.2006`,
            endYear: `16.05.2006`
        },
        {
            episodes: 22,
            startYear: `30.11.2006`,
            endYear: `17.05.2007`
        },
        {
            episodes: 11,
            startYear: `25.10.2007`,
            endYear: `08.05.2008`
        },
        {
            episodes: 19,
            startYear: `06.01.2009`,
            endYear: `06.05.2009`
        },
        {
            episodes: 13,
            startYear: `01.12.2010`,
            endYear: `17.03.2010`
        },
    ],
    actors: [
        {
            actorName: "Zach Braff",
            roleName: "Dr. John Michael Dorian aka J.D"
        },
        {
            actorName: "Sarah Chalke",
            roleName: "Dr. Elliot Reid"
        },
        {
            actorName: "Donald Faison",
            roleName: "Dr. Christopher Duncan Turk aka Turk"
        },
        {
            actorName: "Judy Reyes",
            roleName: "Carla Espinosa"
        },
        {
            actorName: "John C. McGinley",
            roleName: "Dr. Percival Ulysses Cox aka Cox or Perry"
        },
        {
            actorName: "Ken Jenkins",
            roleName: "Dr. Robert Kelso aka Bob or Kelso"
        },
    ]
}

const myFavs = {
   book: myFavBook,
     movie: myFavMovie,
     series: myFavSeries,
}

console.log(myFavs.book.author);
console.log(myFavs.movie.actors[0].roleName);
console.log(myFavs.series.seasons[8].endYear);
console.log(myFavSeries.seasons[3].episodes)

for (i=1; i<=13; i++){
    console.log(i);
}