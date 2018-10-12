import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.css']
})

export class PageIndicatorComponent implements OnInit, OnChanges {

  @Input()
  totalCount: number;

  @Output()
  pageSelected: EventEmitter<number> = new EventEmitter<number>();

  indicators: Indicator[] = [];

  lastIndicator: Indicator;

  constructor() {
  }

  ngOnInit() {
    this.initIndicators();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initIndicators();
  }

  private initIndicators() {
    this.indicators.splice(0);
    for (let i = 0; i < this.totalCount; i++) {
      let indicator;
      if (!i) {
        indicator = new Indicator(true, i + 1);
      } else {
        indicator = new Indicator(false, i + 1);
      }
      this.indicators.push(indicator);
    }
    this.lastIndicator = this.indicators[0];
  }

  onIndicatorClick(indicator: Indicator) {
    this.lastIndicator.isSelected = false;
    indicator.isSelected = true;
    this.lastIndicator = indicator;
    this.postCurrentIndicator();
  }

  onPrePage() {
    this.lastIndicator.isSelected = false;
    if (this.lastIndicator.pageIndex <= 1) {
      this.indicators[0].isSelected = true;
      this.lastIndicator = this.indicators[0];
    } else {
      const tempIndicator = this.indicators[this.lastIndicator.pageIndex - 2];
      tempIndicator.isSelected = true;
      this.lastIndicator = tempIndicator;
      this.postCurrentIndicator();
    }
  }

  onNextPage() {
    this.lastIndicator.isSelected = false;
    if (this.lastIndicator.pageIndex >= this.totalCount) {
      this.indicators[this.totalCount - 1].isSelected = true;
      this.lastIndicator = this.indicators[this.totalCount - 1];
    } else {
      const tempIndicator = this.indicators[this.lastIndicator.pageIndex];
      tempIndicator.isSelected = true;
      this.lastIndicator = tempIndicator;
      this.postCurrentIndicator();
    }
  }

  postCurrentIndicator() {
    this.pageSelected.emit(this.lastIndicator.pageIndex);
  }
}

class Indicator {
  constructor(public isSelected: boolean, public pageIndex: number) {
  }
}
