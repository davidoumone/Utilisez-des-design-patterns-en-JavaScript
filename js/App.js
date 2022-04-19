/* La classe App est la classe principale qui sera utilisée pour créer les cartes vidéo. */
class App {
  /**
   * La fonction constructeur est une méthode spéciale
   * pour créer et initialiser un objet créé dans une classe.
   */
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.moviesApi = new MovieApi("/data/movie-data.json");
  }

  /**
   * La fonction main() est une fonction asynchrone qui appelle la fonction getMovies() de la classe moviesApi,
   * puis parcourt le tableau de films et crée un nouvel objet MovieCard pour chaque film du tableau,
   * puis ajoute la carte de film au DOM.
   */
  async main() {
    const movies = await this.moviesApi.getMovies();

    movies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
