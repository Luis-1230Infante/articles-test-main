import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FILTER } from 'src/app/helpers/filter';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  item = FILTER;
  @Output() propagate = new EventEmitter<string>();
  filter(param: string) {
    this.propagate.emit(param);
  }
}
