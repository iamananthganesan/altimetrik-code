import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'documentPipe'
})
export class DocumentPipePipe implements PipeTransform {
  constructor(private route: ActivatedRoute) { }

  //  this.route.params.subscribe((dataParam: Params) => {});

  transform(value: any, filterDocument: string, docCategory: Number) {
    return value.filter((document: any) => {
      if (document.categoryId !== 1 && docCategory === 1) {
        return true;
      }
      return document.categoryId == docCategory
    }).filter((doccat: any) => { return doccat.categoryCaption.toLowerCase().includes(filterDocument) })
  }
}
