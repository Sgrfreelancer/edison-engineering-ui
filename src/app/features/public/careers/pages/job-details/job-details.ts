import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JOB_PAGE_DATA } from '../../data/job.data';
@Component({
  selector: 'app-job-details',
  imports: [RouterLink],
  templateUrl: './job-details.html',
  styleUrl: './job-details.scss',
})

export class JobDetails {
jobData = JOB_PAGE_DATA;
  
}