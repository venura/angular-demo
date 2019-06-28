import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe('A Test Receipe', 'This is simply a test', 'https://svgsilh.com/image/37807.html'),
    new Receipe('Another Test Receipe', 'This is another simply a test', 'https://svgsilh.com/image/37807.html')
  ];

  @Output() receipeWasSelected = new EventEmitter<Receipe>();
  constructor() { }

  ngOnInit() {
  }

  onReceipeSelected(receipe: Receipe){
    this.receipeWasSelected.emit(receipe);
  }

}
