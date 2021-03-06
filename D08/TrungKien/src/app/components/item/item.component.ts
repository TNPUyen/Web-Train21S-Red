import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() public item: Item;

  ngOnInit(): void {
  }

}
