import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-asyncawait-promises-2';

  @Output() addToCart = new EventEmitter<product>();
  products:product[] = [
    {
      title: 'product 1',
      category: 'category 1',
      description: 'description 1',
      discount: true,
      id: 'cic-001',
      image: 'src/cic1.png',
      price: 123,
      rating: 4
    },
    {
      title: 'product 2',
      category: 'category 2',
      description: 'description 2',
      discount: true,
      id: 'cic-002',
      image: 'src/cic2.png',
      price: 1234,
      rating: 5
    },
    {
      title: 'product 3',
      category: 'category 3',
      description: 'description 3',
      discount: true,
      id: 'cic-003',
      image: 'src/cic3.png',
      price: 12345,
      rating: 4.5
    }
  ]

  onAddToCart(){

  }
}
