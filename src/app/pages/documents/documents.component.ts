import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoucmentService } from 'src/app/shared/doucment.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit, OnChanges {
  documentName: any = '';
  documentList: any;
  getParams: Number = 0;
  constructor(private documentService: DoucmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.documentService.getDocumentList()
      .subscribe((docList) => {
        this.documentList = docList;        
      })

    this.route.params.subscribe((dataParam: Params) => {
      const catId = Number(dataParam.id);
      console.log(dataParam, this.documentList);
      this.getParams = catId;
    })
  }

  ngOnChanges() {
    console.log(this.documentList);
  }

}
