import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Forms } from '../shared/forms/forms';
import { Datatables } from '../shared/datatables/datatables';
import { Serviceteacher } from '../service/teacherservice/serviceteacher';

@Component({
  selector: 'app-teacherprofile',
  standalone: true,
  imports: [Forms, Datatables],
  templateUrl: './teacherprofile.html',
  styleUrl: './teacherprofile.css',
})
export class Teacherprofile implements OnInit {

  protected readonly router = inject(Router);
  private teacherService = inject(Serviceteacher);

  teacherList: any[] = [];
  editTeacher : any = null;
  formsComp: any;

  ngOnInit(): void {
    this.teacherList = this.teacherService.getdata1();
  }

  onTeacherAdded(teacherData: any) {
  this.teacherService.OnTeacherAdded(teacherData); 
  this.teacherList = this.teacherService.getdata1(); 
}
  // onEditRequest(index: number) {
  //   this.editTeacher = this.teacherService.setEditTeacher(index);
    
  // }

  openAddModal() {
    this.editTeacher = null;
    this.formsComp.openModal();
  }

  onEditRequest(index: number) {
    this.editTeacher = this.teacherList[index];
    this.formsComp.openModal();
  }

  onTeacherUpdated(teacherData: any) {
    this.teacherService.updateTeacher(teacherData);
    this.teacherList = this.teacherService.getdata1();
    this.editTeacher = null;

  }
  onDelete(index: number) {
    this.teacherService.deleteteacher(index);
    console.log('Delete teacher at index:', index);
  }

  clear()
  {
    this.editTeacher = null;
  }

 
}
