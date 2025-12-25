import { Component, inject } from '@angular/core';
import { Studservice } from '../../service/studentservice/studservice';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {

  email!: string;
  private route = inject(ActivatedRoute);
  private studentService = inject(Studservice);

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
    console.log('Email from route params:', this.email);
  }

  get studentDetails() {
    return this.studentService.getStudentByEmail(this.email);
  }
}