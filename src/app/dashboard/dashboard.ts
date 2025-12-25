import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Studservice } from '../service/studentservice/studservice';
import { Serviceteacher } from '../service/teacherservice/serviceteacher';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  studLength = inject(Studservice).getStudentCount();
  teacherLength = inject(Serviceteacher).getTeacherCount();

  ngOnInit(): void {
    console.log('Number of students:', this.studLength);
    console.log('Number of teachers:', this.teacherLength);
  }

}
