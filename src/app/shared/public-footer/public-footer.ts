import {
  Component
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMAGE_PATHS } from '../../constants/image-paths';
@Component({
  selector: 'app-public-footer',
  imports: [
    RouterModule],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.scss'
})
export class PublicFooter {
imagePaths = IMAGE_PATHS
}