// Defines the structure of a Studio Ghibli film object
export interface Film {
  id: string;                         // Unique identifier for the film
  title: string;                      // English title
  original_title: string;             // Japanese title
  original_title_romanised: string;   // Romanized Japanese title
  description: string;                // Short plot summary
  director: string;                   // Film director
  producer: string;                   // Film producer
  release_date: string;               // Year the film was released
  running_time: string;               // Length of the film in minutes
  rt_score: string;                   // Rotten Tomatoes rating
  image: string;                      // Poster or thumbnail image
  movie_banner: string;               // Large banner image for the film
}
