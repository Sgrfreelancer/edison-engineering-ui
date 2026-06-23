import {
  Component
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ContactPopupService } from '../../../../../core/services/contact-popup-service';
@Component({
  selector: 'app-solar-cta',
  imports:[RouterModule],
  templateUrl: './solar-cta.html',
  styleUrl: './solar-cta.scss'
})
export class SolarCta {
constructor(private router: Router,private popup: ContactPopupService,) {}
  openContactModal(): void {

    this.router.navigate(['/contact-us']).then(() => {

      this.popup.open();

    });

  }
}