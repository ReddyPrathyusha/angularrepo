import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  @Input() data = [];
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectedUser(user) {
    this.selected.emit(user);
  }
}
