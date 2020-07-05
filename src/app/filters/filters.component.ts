import {Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  selectedCourse = '';
  courses = [
    {name: 'All', value: ''},
    {name: 'Appetizers', value: 'appetizer'},
    {name: 'Main-Dishes', value: 'main course'},
    {name: 'Breakfast', value: 'breakfast'},
    {name: 'Desserts', value: 'dessert'},
  ];
  allergens = [
    {name: 'Dairy-Free', value: 'dairy'},
    {name: 'Egg-Free', value: 'egg'},
    {name: 'Gluten-Free', value: 'gluten'},
    {name: 'Peanut-Free', value: 'peanut'},
    {name: 'Seafood-Free', value: 'seafood'},
    {name: 'Shellfish-Free', value: 'shellfish'},
    {name: 'Sesame-Free', value: 'sesame'},
    {name: 'Soy-Free', value: 'soy'},
    {name: 'Sulfite-Free', value: 'sulfite'},
    {name: 'Tree Nut-Free', value: 'tree nut'},
    {name: 'Wheat-Free', value: 'wheat'},
    {name: 'Grain-Free', value: 'grain'}
  ];
  diets = [
    {name: 'Ketogenic', value: 'ketogenic'},
    {name: 'Lacto vegetarian', value: 'lacto-vegetarian'},
    {name: 'Ovo vegetarian', value: 'ovo-vegetarian'},
    {name: 'Pescetarian', value: 'pescetarian'},
    {name: 'Vegan', value: 'vegan'},
    {name: 'Primal', value: 'primal'},
    {name: 'Paleo', value: 'paleo'}
  ];
  @Output() changed = new EventEmitter();

  constructor() { }
}
