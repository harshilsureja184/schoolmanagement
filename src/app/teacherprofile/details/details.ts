import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serviceteacher } from '../../service/teacherservice/serviceteacher';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  email!: string;
  private route = inject(ActivatedRoute);
  private teacherService = inject(Serviceteacher);

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
    console.log('Email from route params:', this.email);
  }

  get teacherDetails() {
    return this.teacherService.getTeacherByEmail(this.email);
  }

}
