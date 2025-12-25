import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serviceteacher {
  private selectedIndex: number | null = null;

  private teacher: any[] = [
    {
      name: 'Binal',
      phone: '9876500210',
      email: 'binal@gmail.com',
      address: '123 Main St',
      gender: 'Female',
    },
    {
      name: 'Mukesh',
      phone: '9876500211',
      email: 'mukesh@gmail.com',
      address: '456 Oak St',
      gender: 'Male',
    },
  ];

  getdata1() {
    return this.teacher; // return a copy to prevent direct mutation
  }

  OnTeacherAdded(teachers: any) {
    this.teacher.push(teachers  );
    console.log('Teacher added:', teachers);
  }

  setEditTeacher(index: number | null) {
    this.selectedIndex = index;
    return this.teacher[index!]; // return a copy for editing
  }

  updateTeacher(teachers: any) {
    this.teacher[this.selectedIndex!] = teachers;
  }

  deleteteacher(index: number) {
    this.teacher.splice(index, 1);
  }

  getTeacherCount() {
    return this.teacher.length;
  }

  getTeacherByEmail(email: string) {
    return this.teacher.find(teacher => teacher.email === email);
  }
}