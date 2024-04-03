import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'scully-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit {
  private readonly available$ = inject(ScullyRoutesService).available$;

  public posts$: Observable<ScullyRoute[]> | undefined

  ngOnInit(): void {
    this.posts$ = this.available$
      .pipe(map((posts: ScullyRoute[]) => posts.filter((post: ScullyRoute) => post.title)));
  }
}
