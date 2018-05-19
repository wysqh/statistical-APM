import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalComponent} from '../../ui-features/modals/modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NerServiceService} from '../../../@core/data/ner-service.service';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import {UserInfoService} from '../../../@core/data/user-info.service';

@Component({
  selector: 'app-crawl',
  templateUrl: './crawl.component.html',
  styleUrls: ['./crawl.component.scss'],
})
export class CrawlComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private nerService: NerServiceService,
              private toastService: ToasterService,
              private userInfoService: UserInfoService) { }


  crawlForm: FormGroup; // 爬虫信息流表单
  urls: string[];
  notices: string;
  relations: string;
  config: ToasterConfig;
  infoCounter: any;
  relaCounter: any;

  types: string[] = ['default', 'info', 'success', 'warning', 'error'];

  ngOnInit() {
    // 初始化工作
    this.initComponent();
    // 初始化变量
    this.urls = [];
    this.notices = '\n';
    this.relations = '\n';
  }

  /*
    初始化表单组件
   */
  initComponent(): void {
    this.crawlForm = new FormGroup({
      entity: new FormControl('', [Validators.required,
        Validators.minLength(1)]),  // 实体
      theme: new FormControl('', [Validators.required,
        Validators.minLength(1)]), // 主题
      features: new FormControl(),  // 特征
      seeds: new FormControl('', [Validators.required]),   // url 种子
      injection: new FormControl(),
    });
  }

  /*
    注入外部urls
   */
  injectUrls($event): void {
    console.log($event.returnValue);
    const isChecked = $event.returnValue;
    if (isChecked) {
      this.showModal();
      this.nerService.getUrlSeedsFromInjection(this.crawlForm.value.entity,
        this.crawlForm.value.theme, this.crawlForm.value.feature)
        .subscribe(baseResult => {
          this.urls = baseResult.data;
          this.crawlForm.patchValue({
            injection: this.prettyString(this.urls),
          });
          console.log(this.urls);
          if (!baseResult.status) {
            console.log(baseResult.message);
          }
      })
    } else {
      this.crawlForm.patchValue( {
        injection: '',
      });
    }
  }

  /*
    格式转化，逗号变成换行
   */
  prettyString(strs: string[]): string {
    let pretty: string = '';
    for (let i = 0; i < strs.length; i++) {
      pretty += ((i + 1) + ':' + strs[i] + '\r\n');
    }

    return pretty;
  }

  /*
      获取关键字并爬取
   */
  crawl(): void {
    // Logging Start ------------>
    console.log(this.crawlForm.value.entity);
    console.log(this.crawlForm.value.theme);
    console.log(this.crawlForm.value.features);
    console.log(this.crawlForm.value.seeds);
    // Logging End <----------------

    const entity = this.crawlForm.value.entity, theme = this.crawlForm.value.theme,
      seeds = this.crawlForm.value.seeds;
    if (entity === '' || theme === '' || seeds === '') {
      this.showToast('fade', 'Error', 'Information is not complete.');
      return;
    }
    const user = this.userInfoService.getUserInfo()
    if (user === '' || user === undefined) { // 检测登入信息
      this.showToast('fade', 'Error', 'We cannot get your login information');
      return;
    }
    // 订阅Kafka消息流
    this.infoCounter = setInterval(() => {
      this.update()
    }, 1000);

    // 提交记录
    this.addRecord(this.crawlForm.value.entity, this.crawlForm.value.theme,
      this.crawlForm.value.features, this.crawlForm.value.seeds)
  }

  /*
      提交爬虫提交记录
   */
  addRecord(entity: string, theme: string, features: string, urls: string) {
    this.nerService.inserCrawlRecord(this.userInfoService.getUserInfo(), entity, theme, features, urls)
      .subscribe(base => {
        if (!base.status) {
          this.showToast('fade', 'Warnning', base.message);
        }
      });
  }

  update(): void {
    this.nerService.getNotifications()
      .subscribe(base => {
        if (base.data.indexOf('^C^Dquit') >= 0) {
          window.clearInterval(this.infoCounter);
          this.relaCounter = setInterval(() => {
            this.fetchRelation()
          }, 1000); // 开启抓取关系线程
        }
        this.notices += base.data;
        console.log(base.data);
      })
  }

  fetchRelation(): void {
    this.nerService.getCorrelations()
      .subscribe(base => {
        if (base.data.indexOf('^C^Dquit') >= 0) {
          window.clearInterval(this.relaCounter);
        }
        this.relations += base.data;
        console.log(base.data);
      })
  }

  showModal(): void {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Fetching';
    activeModal.componentInstance.modalContent = `Please waiting for some time...`;
  }

  /*
      展示Toast
   */
  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 10,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    }

    this.toastService.popAsync(toast);
  }
}
