'use strict';

const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true,

      printBookInfo: function ({
        title = 'unknown',
        author = 'unknown',
        year = 'unknown'
      }) {
        console.log(`${title} by ${author}, ${year}, edition number ${this.edition}`);
      }
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];

//Assignment 1.1
const [firstBook, secondBook] = books;

//Assignment 1.2
const [ , ,thirdBook] = books;

//Assignment 1.3
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;

//Assignment 1.4
const ratingStars = [63405, 1808];
const [umaEstrela = 0, cincoEstrelas = 0, tresEstrelas = 0] = ratingStars;

//Assignment 2.1
const [{title, author, ISBN}] = books;
//console.log(title, author, ISBN);

//Assignemnt 2.2
const [{keywords: tags}] = books;
//console.log(tags);

//Assignment 2.3
const[ , , , , {language, programmingLanguage = 'unknown'}] = books;
//console.log(language, programmingLanguage);

//Assignment 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

[{title: bookTitle, author: bookAuthor}] = books;
//console.log(bookTitle, bookAuthor);

//Assignment 2.5
const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
//console.log(bookRating);

//Assignment 2.6
books[0].printBookInfo({
  title, author
});

//Assignement 4.1
const [mainKeyword, ...rest] = books[0].keywords;
//console.log(mainKeyword, rest);

//Assignment 4.2
const {publisher: bookPublisher, ...restOfTheBook} = books[1];
//console.log(bookPublisher, restOfTheBook);

//Assignment 4.3
const printBookAuthorsCount = function (title, ...authors) {
  //console.log(`The book ${title} has ${authors.length} authors`);
}

//printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//Assignement 5.1
const hasExamplesInJava = function (book) {
  //console.log(book.programmingLanguage === 'Java' || 'No data avalaible' );
}
//const chooseBook = Number(prompt('Digite o número do livro: '));
//hasExamplesInJava(books[chooseBook]);

//Assignement 5.2
for (let a = 0; a < books.length; a++) {
  //console.log(books[a].onlineContent &&  `${books[a].title} provides online content`);
}

//Assignement 6.1
for (let a = 0; a < books.length; a++) {
  //console.log(books[a].onlineContent ?? `${books[a].title} provides no data about its online content`);
}

//console.log('Jonas' && 'Marcelo');

//Assignment 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
//console.log(bookAuthors);

//Assignment 3.2
const spellWorld = function (palavra) {
  return [...palavra , ];
}

//const word = prompt('Digite uma palavra: ');
//const resultado = spellWorld (word);
//console.log(resultado);

//Assignment 8.1
let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}
//console.log(pageSum);

//Assignment 8.2
const allAuthors = [];

for (const item of books) {
  if (typeof item.author === "string") {
    allAuthors.push(item.author);
  } else {
    for (const autor of item.author) {
      allAuthors.push(autor)
    }
  }
}
//console.log(allAuthors);

//Assignment 8.3
for (const [index, book] of allAuthors.entries()) {
  //console.log(Author ${index + 1}: ${book});
}

//Assignment 9.1
const getFirstKeyword = function (book) {
  //console.log(book?.keywords[0]);
}
getFirstKeyword (books[0]);


//Assignment 11.1
const entries = [];
for (const book of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push(book);
};
//console.log(entries);

//Assignment 11.2
for (const [index, book] of Object.entries(books[0].thirdParty.goodreads).entries()) {
  entries.push(`Index ${index + 1}: ${book}`);
}
//console.log(entries);


//Assignment 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries)
console.log(entries2)