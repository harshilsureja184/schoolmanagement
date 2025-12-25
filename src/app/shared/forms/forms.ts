import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms implements OnChanges {

  @Input() editData: any = null;

  @Output() adds = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() clear = new EventEmitter<any>();

  buttonText = 'Add Details';

  formContact = signal({
    name: '',
    phone: '?',
    email: '',
    address: '',
    gender: ''
  });
  Added: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editData'] && changes['editData'].currentValue) {
      this.formContact = { ...changes['editData'].currentValue };
      this.buttonText = 'Update Details';
    } else {
      this.reset();
    }
  }
  reset() {
    throw new Error('Method not implemented.');
  }

  addData() {
    if (this.editData) {
      this.adds.emit({ ...this.formContact() });
    }
    else {
      this.adds.emit({ ...this.formContact() });
    }

    // updateData() {
    //   this.update.emit({ ...this.formContact() });
    //   this.resetForm();
    // }
    // this.resetForm() {
    //   throw new Error('Method not implemented.');

    // }
  }
  resetFormState() {
  this.formContact.set({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: ''
  });
  this.editData = null;
  this.clear.emit(); // optional, if parent listens to reset
}

}

// } resetForm() {
//   throw new Error('Method not implemented.');
// }
// onreset() {
//   throw new Error('Method not implemented.');
// }

// function updateData() {
//   throw new Error('Function not implemented.');
// }

// function resetFormState() {
//   throw new Error('Function not implemented.');
// }

// function resetForm() {
//   throw new Error('Function not implemented.');
// }

