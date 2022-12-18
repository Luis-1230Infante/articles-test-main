import { FILTER } from './../../helpers/filter';
import { Observable, of } from 'rxjs';
import { ArticlesService } from './../../services/articles/articles.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { ItemComponent } from './item/item.component';
import { IArticle } from 'src/app/services/interfaces/article.interface';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FiltersComponent, ItemComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit {
  list$!: Observable<IArticle[]>;
  constructor(private readonly service: ArticlesService) {}

  ngOnInit(): void {
    this.list$ = this.service.findAll();
  }
  filter(param: string) {
    this.list$ = of([]);
    console.log(param);
    if (param == FILTER.ALL) {
      this.list$ = this.service.findAll();
    } else {
      this.list$ = this.service.filter(param);
    }
  }
}
