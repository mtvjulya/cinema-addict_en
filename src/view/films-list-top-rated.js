import AbstractView from "./abstract-view";

const createTopRatedFilmsList = ()=>{
  return `
  <section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  </section>
  `;
};

export default class TopRatedFilmsList extends AbstractView{
  getTemplate(){
    return createTopRatedFilmsList(this._topRatedList);
  }
}