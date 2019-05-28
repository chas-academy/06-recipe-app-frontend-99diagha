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
    {name: 'Appetizers', value: 'course^course-Appetizers'},
    {name: 'Main-Dishes', value: 'course^course-Main Dishes'},
    {name: 'Desserts', value: 'course^course-Desserts'},
  ];
  allergens = [
    {name: 'Dairy-Free', value: '396^Dairy-Free'},
    {name: 'Egg-Free', value: '397^Egg-Free'},
    {name: 'Gluten-Free', value: '393^Gluten-Free'},
    {name: 'Peanut-Free', value: '394^Peanut-Free'},
    {name: 'Seafood-Free', value: '398^Seafood-Free'},
    {name: 'Sesame-Free', value: '399^Sesame-Free'},
    {name: 'Soy-Free', value: '400^Soy-Free'},
    {name: 'Sulfite-Free', value: '401^Sulfite-Free'},
    {name: 'Tree Nut-Free', value: '395^Tree Nut-Free'},
    {name: 'Wheat-Free', value: '392^Wheat-Free'}
  ];
  diets = [
    {name: 'Ketogenic', value: '406^Ketogenic'},
    {name: 'Lacto vegetarian', value: '388^Lacto vegetarian'},
    {name: 'Ovo vegetarian', value: '389^Ovo vegetarian'},
    {name: 'Pescetarian', value: '390^Pescetarian'},
    {name: 'Vegan', value: '386^Vegan'},
    {name: 'Low FODMAP', value: '408^Low FODMAP'},
    {name: 'Lacto-ovo vegetarian', value: '387^Lacto-ovo vegetarian'},
    {name: 'Paleo', value: '403^Paleo'}
  ];
  @Output() changed = new EventEmitter();

  constructor() { }
}
