import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { LogService } from 'src/app/shared/log/log.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() receipeSelected = new EventEmitter<void>();
  @Input() receipe: Receipe;

  constructor(private logeService: LogService) { }

  ngOnInit() {
  }

  onSelected(){
    this.logeService.log("recipe selected");
    this.receipeSelected.emit();
  }
}
