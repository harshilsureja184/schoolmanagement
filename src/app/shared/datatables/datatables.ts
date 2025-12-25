import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-datatables',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './datatables.html',
  styleUrl: './datatables.css',
})
export class Datatables {

  @Input() data: any[] = [];

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  edititem(index: number) {
    this.edit.emit(index);
  }

  deleteitem(index: number) {
    this.delete.emit(index);
  }
}
