import { Component, inject, OnInit } from '@angular/core';
import { Forms } from '../shared/forms/forms';
import { Datatables } from '../shared/datatables/datatables';
import { Studservice } from '../service/studentservice/studservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentprofile',
  standalone: true,
  imports: [Forms, Datatables],
  templateUrl: './studentprofile.html',
  styleUrl: './studentprofile.css',
})
export class Studentprofile implements OnInit {

  
  protected readonly router = inject(Router);
  private studService = inject(Studservice);
  studentList: any[] = [];
  editStudent: number | null = null;
  formcomp1: any;

  ngOnInit(): void {
    this.studentList = this.studService.getdata();
  }

  onStudentAdded(studentData: any) {
    this.studService.onStudentAdded(studentData);
    this.studentList = this.studService.getdata();
  }

  onEditRequest(index: number) {
    this.editStudent = index;
    this.formcomp1 = { ...this.studentList[index] };
  }

  // onStudentUpdated(studentData: any) {
  //   if (this.editIndex === null) return;

  //   this.studService.updateStudent(this.editIndex, this.studentList);
  //   this.studentList = this.studService.getdata();

  //   this.editIndex = null;
  //   this.editData = null;
  // }

  onStudentUpdated(studentData: any) {
    if (this.editStudent === null) return;

    this.studService.updateStudent(this.editStudent, studentData);
    this.studentList = this.studService.getdata();

    this.editStudent = null;
  }

  onDelete(index: number) {
    this.studService.deleteStudent(index);
    console.log('Delete student at index:', index);
  }

}