import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() id: string;
  @Input() recipeName: string;
  @Input() sourceDisplayName: string;
  @Input() imageUrl: string;
  @Input() totalTimeInSeconds: number; // The prep time plus cook time for this recipe in seconds

  constructor() { }

  ngOnInit() {
  }

}
