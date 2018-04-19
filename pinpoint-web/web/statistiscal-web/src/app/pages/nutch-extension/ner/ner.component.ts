import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NerServiceService} from '../../../@core/data/ner-service.service';
import {BaseResult} from '../../../@core/data/base-result';
import {Relation} from '../../../@core/data/relation';
import {ModalComponent} from '../../ui-features/modals/modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ner',
  templateUrl: './ner.component.html',
  styleUrls: ['./ner.component.scss']
})
export class NerComponent implements OnInit {
  urls: any = {
    title: 'Bi-GRU',
    source: 'assets/images/Bi-GRU.jpg',
  };

  nerForm: FormGroup; //实体关系分析表单
  relation: Relation[]; // 关系
  isResponse: boolean;

  constructor(private nerService: NerServiceService,
              private modalService: NgbModal) { }

  ngOnInit() {
    // 初始化工作
    this.initComponent();
    // 初始化应答
    this.isResponse = false;
  }

  /*
      初始化表单组件
   */
  initComponent(): void {
    this.nerForm = new FormGroup({
      e1: new FormControl(),  // 实体1
      e2: new FormControl(),  // 实体2
      s: new FormControl(),   // 句子
    });
  }

  /*
      命名实体分析
   */
  nerAnalysis(): void {
    // 调试信息
    console.log(this.nerForm.value.e1,
      this.nerForm.value.e2, this.nerForm.value.s);
    // 判空检验
    if (this.nerForm.value.e1 === null || this.nerForm.value.e2 === null ||
      this.nerForm.value.s === null) {
      this.showModal();
      return;
    }
    this.nerService.getRelationFromEntity(this.nerForm.value.e1, this.nerForm.value.e2,
      this.nerForm.value.s)
      .subscribe(baseResult => {
        console.log(baseResult);
        this.relation = baseResult.data;
        if (baseResult.status) {
          this.isResponse = true;
        } else {
          console.log(baseResult.message);
        }
      })
  }

  showModal(): void {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Warning';
    activeModal.componentInstance.modalContent = `Please input parameters (entity1, entity2, sentence)`;
  }
}
