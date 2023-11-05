/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/

const categories = {
    drama: "Drama",
    action: "Action",
    crime: "Crime",
    biography: "Biography",
    adventure: "Adventure",
    comedy: "Comedy",
  };
  
  const movies = [ {
      title: "Fight Club",
      director: "David Fincher",
      actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
      year: 1999,
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      category: "Drama",
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
      year: 2008,
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      category: "Action",
      rating: 9,
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      actors: "Samuel L. Jackson, Uma Thurman, Bruce Willis",
      year: 1994,
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      category: "Crime",
      rating: 8.9,
    },
    {
      title: "Schindler's List",
      director: "Steven Spielberg",
      actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
      year: 1993,
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      category: "Biography",
      rating: 8.9,
    },
    {
      title: "The Lord of theRing: The Return of the King",
      director: "Peter Jackson",
      actors: "Elijah Wood, Viggo Mortensen, Ian McKellen",
      year: 2003,
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      category: "Adventure",
      rating: 8.9,
    },
    {
      title: "The Social Network",
      director: "David Fincher",
      actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
      year: 2010,
      description:
        "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
      category: "Biography",
      rating: 7.7,
    },
    {
      title: "Goodfellas",
      director: "Martin Scorsese",
      actors: "Robert De Niro, Ray Liotta, Joe Pesci",
      year: 1990,
      description:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      category: "Biography",
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      year: 2010,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      category: "Action",
      rating: 8.8,
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
      year: 1994,
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      category: "Crime",
      rating: 8.9,
    },
    {
      title: "The Lord of theRing: The Fellowship of the Ring",
      director: "Peter Jackson",
      actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
      year: 2001,
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      category: "Adventure",
      rating: 8.8,
    },
    {
      title: "Se7en",
      director: "David Fincher",
      actors: "Morgan Freeman, Brad Pitt, Kevin Spacey",
      year: 1995,
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      category: "Crime",
      rating: 8.6,
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      actors: "Tom Hanks, Robin Wright, Gary Sinise",
      year: 1994,
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      category: "Drama",
      rating: 8.8,
    },
    {
      title: "Django Unchained",
      director: "Quentin Tarantino",
      actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
      year: 2012,
      description:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      category: "Drama",
      rating: 8.4,
    }, ];
  
  const moviesByCategory = movies.reduce((acc, movie) => {
    const category = movie.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      title: movie.title,
      description: movie.description,
    });
    return acc;
  }, {});
  
  console.log("Películas agrupadas por categoría:");
  console.log(moviesByCategory);