import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studservice {
  // delete(index: number) {
  //   throw new Error('Method not implemented.');
  // }
  // update(selectedIndex: number, contact: any) {
  //   throw new Error('Method not implemented.');
  // }
  // add(contact: any) {
  //   throw new Error('Method not implemented.');
  // }

  selectedIndex: number | null = null;

  stud: any[] = [
    {
      name: 'hemal',
      phone: '9876500210',
      email: 'hemal@gmail.com',
      address: '123 Main St',
      gender: 'male'
    },
    {
      name: 'jignesh',
      phone: '9876500211',
      email: 'jignesh@gmail.com',
      address: '456 Oak St',
      gender: 'male'
    }
  ];



  getdata() {
    return this.stud;
  }



  onStudentAdded(contact: any) {
    this.stud.push(contact);
    console.log('Student added:', contact);
  }

  setEditStudent(index: number | null) {
    this.selectedIndex = index;
    return this.stud[index!];
  }

  updateStudent(index: number, contact: any) {
    this.stud[index] = contact;
  }

  getStudentCount() {
    return this.stud.length;
  }

  // updateStudent(index: number, contact: any) {
  //   if (index !== null) {
  //     this.stud[this.selectedIndex!] = contact;
  //     // this.selectedIndex = null;
  //   }
  // }

  // openAdd() {
  //   this.selectedIndex = null;
  // }

  // openEdit(index: number) {
  //   this.selectedIndex = index;
  // }

  // saveContact(contact: any) {
  //   if (this.selectedIndex === null) {
  //     this.stud.push({ ...contact });
  //   } else {
  //     this.stud[this.selectedIndex] = { ...contact };
  //   }
  // }
  

  deleteStudent(index: number) {
    this.stud.splice(index, 1);
  }

  getStudentByEmail(email: string) {
    return this.stud.find(stud => stud.email === email);
  }
}

