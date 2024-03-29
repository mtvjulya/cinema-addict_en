import { createElement } from "../utils/render";

export default class AbstractView{
  constructor(){
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate Abstract class, only concrete one.');
    }
    this._element = null;
    this._callback = {};
  }
  getTemplate(){
    throw new Error('you can\'t initiate Abstract.getTemplate');
  }
  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate())
    }
    return this._element;
  }
  removeElement(){
    this._element = null;
  }
}
