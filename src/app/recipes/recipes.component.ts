import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedReceipe: Receipe;
  constructor() { }

  ngOnInit() {
  }

}
