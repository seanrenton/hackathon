var imdb = require('imdb-api');
var mongoose = require('mongoose');
var MovieApp = require('../models/model.movies');


var movieArray = [
  {
  title: 'Friday the 13th',
  _year_data: '1980',
  year: 1980,
  rated: 'R',
  released : '1980-05-09T04:00:00.000Z',
  runtime : '95 min',
  genres : 'Horror, Mystery, Thriller',
  director: 'Sean S. Cunningham',
  writer: 'Victor Miller, Sean S. Cunningham (story), Victor Miller (story)',
  actors: 'Betsy Palmer, Adrienne King, Jeannine Taylor, Robbi Morgan',
  plot: 'One summer at Camp Crystal Lake, a group of young counselors begin to get ready to lead campers. Unfortunately for the former, someone isn\'t happy about what\'s going on in the camp and enjoys playing kill the counselor. As bodies fall to the ground in the camp, no one is safe.',
  languages: 'English',
  country: 'USA',
  awards: '5 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: '35',
  rating: '6.5',
  votes: '85,666',
  imdbid: 'tt0080761',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0080761' },
  
  
  {
  title: 'Friday the 13th Part 2',
  _year_data: '1981',
  year: 1981,
  rated: 'R',
  released: '1981-05-01T04:00:00.000Z',
  runtime : '87 min',
  genres : 'Horror, Mystery, Thriller',
  director: 'Steve Miner',
  writer: 'Ron Kurz, Victor Miller (characters)',
  actors: 'Amy Steel, John Furey, Adrienne King, Kirsten Baker',
  plot: 'After killing Mrs. Voorhees, who was avenging her son Jason\'s death, Alice Hardy can finally sigh with relief. But there is just one problem. Jason never drowned at Camp Crystal Lake and lived in the nearby woods as a hermit all this time. The day that Alice beheaded his mother, Jason saw everything and his heart filled with thirst for revenge. Two months later, Alice gets stabbed by an ice pick in the temple and disappears. Is Jason behind this? Five years later, a camp next do to Camp Crystal Lake is built and the counselors start snooping around the old, abandoned camp ruins. This makes Jason very upset, since his shack is next to the remains of Camp Crystal Lake and what is inside the shack shall be kept secret forever, even if it means killing nine people!',
  languages: 'English',
  country: 'USA',
  awards: '3 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2MwZWJjNDEtN2FmYy00YjdhLWFjZTEtNTA3ZjVkZDJjNjYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '6.1',
  votes: '41,279',
  imdbid: 'tt0082418',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0082418' },
  
  
  {
  title: 'Friday the 13th Part III',
  _year_data: '1982',
  year: 1982,
  rated: 'R',
  released: '1982-08-13T04:00:00.000Z',
  runtime: '95 min',
  genres: 'Horror, Thriller',
  director: 'Steve Miner',
  writer: 'Martin Kitrosser (screenplay), Carol Watson (screenplay), Victor Miller (character creator), Ron Kurz (character creator)',
  actors: 'Terry Ballard, Richard Brooker, Gloria Charles, Anne Gaybis',  plot: 'Jason Voorhees, having barely survived a wound to his shoulder from his own machete, is back to revenge on all that visit "his" woods. A new group of friends come over to party at an area close to the campsite. This time, Jason will be stronger than ever, and getting a hockey mask from one of those friends.',
  languages: 'English',
  country: 'USA',
  awards: '2 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjRiMTdlY2QtZGE3YS00YjQzLTk5MmUtNjVjMjUzYWRiMWNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '5.7',
  votes: '33,263',
  imdbid: 'tt0083972',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0083972' },
  
  
  {
  title: 'Friday the 13th: The Final Chapter',
  _year_data: '1984',
  year: 1984,
  rated: 'R',
  released: '1984-04-13T05:00:00.000Z',
  runtime: '91 min',
  genres: 'Horror, Thriller',
  director: 'Joseph Zito',
  writer: 'Victor Miller (character creator), Ron Kurz (character creator), Martin Kitrosser (character creator), Carol Watson (character creator), Barney Cohen (screenplay), Bruce Hidemi Sakow (story)',
  actors: 'Erich Anderson, Judie Aronson, Peter Barton, Kimberly Beck',
  plot: 'After being mortally wounded and taken to the morgue, murderer Jason Voorhees spontaneously revives and embarks on a killing spree as he makes his way back to his home at Camp Crystal Lake.',
  languages: 'English',
  country: 'USA',
  awards: '2 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWE5YzI0YWItMzkyMi00ODgzLThjNTAtYzVlMmZjZDA2ZWFjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '5.9',
  votes: '30,476',
  imdbid: 'tt0087298',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0087298' },
  
  
  {
  title: 'Friday the 13th: A New Beginning',
  _year_data: '1985',
  year: 1985,
  rated: 'R',
  released: '1985-03-22T05:00:00.000Z',
  runtime: '92 min',
  genres: 'Horror, Mystery, Thriller',
  director: 'Danny Steinmann',
  writer: 'Martin Kitrosser (story), David Cohen (story), Martin Kitrosser (screenplay), David Cohen (screenplay), Danny Steinmann (screenplay)',
  actors: 'Anthony Barrile, Suzanne Bateman, Dominick Brascia, Todd Bryant',
  plot: 'Five years after killing the goalie hockey-masked killer Jason Voorhees, Tommy Jarvis has grown up in various mental hospitals unable to get over the nightmares about Jason\'s return. When Tommy is sent to a rural halfway house in New Jersey for mentally disturbed teenagers, a series of grisly murders begin anew as another hockey-masked killer begins killing off all people at and around the residence. Has Jason returned from the dead to re-start his killing spree? Has Tommy decided to take over the reign of Jason, or has someone else?',
  languages: 'English',
  country: 'USA',
  awards: '2 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMmI5ZDRmOTMtNmJjNy00YWRkLTgwN2MtYzY5OTkzY2M5NjYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '4.7',
  votes: '23,339',
  imdbid: 'tt0089173',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0089173' },
  
  
  {
  title: 'Jason Lives: Friday the 13th Part VI',
  _year_data: '1986',
  year: 1986,
  rated: 'R',
  released: '1986-08-01T04:00:00.000Z',
  runtime: '86 min',
  genres: 'Horror, Thriller',
  director: 'Tom McLoughlin',
  writer: 'Tom McLoughlin',
  actors: 'Thom Mathews, Jennifer Cooke, David Kagen, Kerry Noonan',
  plot: 'Tommy Jarvis returns to the graveyard to make sure Jason Voorhees is dead and accidentally brings him back to life. Now it\'s up to Tommy to stop Jason\'s mindless killing and put him back where he belongs.',             
  languages: 'English',
  country: 'USA',
  awards: '2 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjM3ZjhjNzgtMjg2OC00MmI5LWIyZGItOTUxZTVlZjdjNTNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '5.9',
  votes: '26,255',
  imdbid: 'tt0091080',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0091080' },
  
  
  {
  title: 'Friday the 13th Part VII: The New Blood',
  _year_data: '1988',
  year: 1988,
  rated: 'R',
  released: '1988-05-13T04:00:00.000Z',
  runtime: '88 min',
  genres: 'Horror',
  director: 'John Carl Buechler',
  writer: 'Daryl Haney, Manuel Fidello',
  actors: 'Jennifer Banko, John Otrin, Susan Blu, Lar Park-Lincoln',
  plot: 'Lying dormant at the bottom of Camp Crystal Lake, Jason Voorhees is released from his watery grave by a telekinetic girl. And so the killing begins again. Can she use her powers to stop Jason, or is he back for good?',   
  languages: 'English',
  country: 'USA',
  awards: '4 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzRhMzA5ZGItODMxMy00YTRiLTg3MjUtMmRjMzliZDkxOWI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '5.3',
  votes: '22,215',
  imdbid: 'tt0095179',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0095179' },
  
  
  {
  title: 'Friday the 13th Part VIII: Jason Takes Manhattan',
  _year_data: '1989',
  year: 1989,
  rated: 'R',
  released: '1989-07-28T04:00:00.000Z',
  runtime: '100 min',
  genres: 'Adventure, Horror',
  director: 'Rob Hedden',
  writer: 'Rob Hedden, Victor Miller (characters)',
  actors: 'Todd Caldecott, Tiffany Paulsen, Tim Mirkovich, Kane Hodder',
  plot: 'The graduating class of the local high school is going on a luxury cruise with Jason Voorhees as a stowaway. The heroine Rennie Wickham believes she was almost drowned by Jason as a child. Jason eventually sinks the boat and kills many of the students on it, but many of them escape to Manhattan. A long battle with Jason ensues until Jason is washed away in the New York sewers by a midnight flooding of toxic waste.',
  languages: 'English',
  country: 'USA, Canada',
  awards: '2 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDUyMGIxZDctNDVlMy00ZmVlLWIzZGUtMzQ2NWVhNTgwMjIzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '4.6',
  votes: '23,844',
  imdbid: 'tt0097388',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0097388' },
  
  
  {                                                                                                            
  title: 'Jason Goes to Hell: The Final Friday',
  _year_data: '1993',
  year: 1993,
  rated: 'R',
  released: '1993-08-13T04:00:00.000Z',
  runtime: '87 min',
  genres: 'Fantasy, Horror, Thriller',
  director: 'Adam Marcus',
  writer: 'Jay Huguely (story), Adam Marcus (story), Dean Lorey (screenplay), Jay Huguely (screenplay)',           
  actors: 'John D. LeMay, Kari Keegan, Kane Hodder, Steven Williams',
  plot: 'The secret of Jason\'s evil is revealed. It is up to the last remaining descendant of the Voorhees family to stop Jason before he becomes immortal and unstoppable. This is the final (?) battle to end Jason\'s reign of terror forever.',
  languages: 'English',
  country: 'USA',
  awards: '3 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMGUxZGViMDktOWM5OS00MTlmLTkzZTYtZWJmZGEzNjg1M2ZlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '4.3',
  votes: '19,945',
  imdbid: 'tt0107254',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0107254' },
  
  
  {
  title: 'Jason X',
  _year_data: '2001',
  year: 2001,
  rated: 'R',
  released: '2002-04-26T04:00:00.000Z',
  runtime: '91 min',
  genres: 'Action, Horror, Sci-Fi',
  director: 'James Isaac',
  writer: 'Victor Miller (characters), Todd Farmer',
  actors: 'Kane Hodder, Jeff Geddis, Lexa Doig, David Cronenberg',
  plot: 'Set way in the future, Earth is no longer inhabitable, so humans have colonized in outer space. One colony receives two cryogenically frozen bodies, and when they defrost them, one of the bodies turns out to be.....who else? Jason Voorhees. No longer in the forest or Camp Crystal Lake, Jason stalks the colonists in a whole new environment.',
  languages: 'English',
  country: 'USA, Canada',
  awards: '1 nomination.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzc0MDllYjktYzFjZi00OTgwLWJmZWMtODlmMTVlODQyZTgwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  metascore: '25',
  rating: '4.4',
  votes: '39,854',
  imdbid: 'tt0211443',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0211443' },
  
  
  {
  title: 'Freddy vs. Jason',
  _year_data: '2003',
  year: 2003,
  rated: 'R',
  released: '2003-08-15T04:00:00.000Z',
  runtime: '97 min',
  genres: 'Action, Horror, Thriller',
  director: 'Ronny Yu',
  writer: 'Wes Craven (characters), Victor Miller (characters), Damian Shannon, Mark Swift',
  actors: 'Robert Englund, Ken Kirzinger, Monica Keena, Jason Ritter',
  plot: 'Freddy Krueger and Jason Voorhees return to terrorize the teenage population. Except this time, they\'re out to get each other, too.',
  languages: 'English',
  country: 'USA, Canada, Italy',
  awards: '2 wins & 7 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODNlNWVjOTMtZjVjYy00MzRjLTg2MmQtNTM3MWVmZjFjYzgwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg',
  metascore: '37',
  rating: '5.8',
  votes: '91,423',
  imdbid: 'tt0329101',
  type: 'movie',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0329101' }
];

movieArray.forEach((movieObj)=>{
  
  var moobie = new MovieApp(movieObj);
  
  moobie.save((err, doc)=>{
    console.log(err)
  });
  
});

// imdb.getReq({name : "Friday the 13th"}).then(console.log));

// imdb.getReq({name : "Friday the 13th Part 2"}).then(console.log);

// imdb.getReq({name : "Friday the 13th Part III"}).then(console.log);

// imdb.getReq({name : "Friday the 13th: The Final Chapter"}).then(console.log);

// imdb.getReq({name : "Friday the 13th: A New Beginning"}).then(console.log);

// imdb.getReq({name : "Friday the 13th Part VI"}).then(console.log);

// imdb.getReq({name : "Friday the 13th Part VII: The New Blood"}).then(console.log);

// imdb.getReq({name : "Friday the 13th Part VIII: Jason Takes Manhattan"}).then(console.log);

// imdb.getReq({name : "Jason Goes to Hell: The Final Friday"}).then(console.log);

// imdb.getReq({name : "Jason X"}).then(console.log);

// imdb.getReq({name : "Freddy vs. Jason"}).then(console.log);
