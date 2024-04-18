import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductsComponent {}
