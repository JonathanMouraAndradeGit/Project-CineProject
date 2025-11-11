import { AfterViewInit, Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calendar01',
  standalone:false,
  templateUrl: './calendar01.component.html',
  styleUrl: './calendar01.component.css'
})
export class Calendar01Component implements AfterViewInit {

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  dt = new Date();
  arrDays: any[] = [];
  DaysCon: HTMLElement | null = null;
  MonthCon: HTMLElement | null = null;
  YearCon: HTMLElement | null = null;

  @Output() ev =  new EventEmitter<any>()

  constructor(private el: ElementRef, private rand: Renderer2) {}

  ngAfterViewInit(): void {
    console.log('ok');
    this.loadWeekDaysName();
    this.loadVals();
    this.loadData();
  }

  loadWeekDaysName(): void {
    const wdn = this.el.nativeElement.querySelector('.weekDaysName') as HTMLElement;
    if (!wdn) return;

    this.weekDays.forEach((day: string) => {
      const doc = this.rand.createElement('div');
      this.rand.addClass(doc, 'ItemWDN');
      this.rand.setProperty(doc, 'textContent', day);
      this.rand.appendChild(wdn, doc);
    });
  }

  switchYear(n: number): void {
    this.dt.setFullYear(this.dt.getFullYear() + n);
    this.loadData();
  }

  switchMonth(n: number): void {
    this.dt.setMonth(this.dt.getMonth() + n);
    this.loadData();
  }

  loadData(): void {
    this.arrDays = [];
    const currentDateBegin = new Date(this.dt);
    currentDateBegin.setDate(1);

    const dtBefore = new Date(this.dt);
    dtBefore.setMonth(this.dt.getMonth() - 1);
    dtBefore.setDate(1);

    const lastDayPrevMonth = new Date(this.dt);
    lastDayPrevMonth.setDate(0); // último dia do mês anterior

    const nextMonth = new Date(this.dt);
    nextMonth.setMonth(this.dt.getMonth() + 1);
    nextMonth.setDate(0); // último dia do mês atual

    // Preencher dias anteriores (se o mês não começar em domingo)
    const firstDayWeek = currentDateBegin.getDay();
    if (firstDayWeek > 0) {
      const totalPrevDays = lastDayPrevMonth.getDate();
      for (let i = firstDayWeek - 1; i >= 0; i--) {
        this.arrDays.push({ day: totalPrevDays - i, class: 'prev' });
      }
    }

    // Dias do mês atual
    const totalDays = nextMonth.getDate();
    for (let i = 1; i <= totalDays; i++) {
      this.arrDays.push({ day: i, class: 'current' });
    }

    // Completar até 42 dias (6 semanas)
    let inc = 1;
    while (this.arrDays.length < 42) {
      this.arrDays.push({ day: inc++, class: 'next' });
    }

    this.loadElements();
  }

  loadVals(): void {
    this.DaysCon = this.el.nativeElement.querySelector('.DaysCon');
    this.MonthCon = this.el.nativeElement.querySelector('.MonthCon');
    this.YearCon = this.el.nativeElement.querySelector('.YearData');

    console.log(this.DaysCon);
  }

  clearElmts(): void {
    if (!this.DaysCon) return;
    while (this.DaysCon.firstChild) {
      this.rand.removeChild(this.DaysCon, this.DaysCon.firstChild);
    }
  }

  loadElements(): void {
    if (!this.MonthCon || !this.YearCon || !this.DaysCon) return;

    const monthLabel = this.MonthCon.querySelector('p');
    if (monthLabel) {
      this.rand.setProperty(monthLabel, 'textContent', this.months[this.dt.getMonth()]);
    }

    this.rand.setProperty(this.YearCon, 'textContent', `${this.dt.getFullYear()}`);
    this.clearElmts();

    this.arrDays.forEach((el: any) => {
      const doc = this.rand.createElement('div');
      this.rand.addClass(doc, 'Item');
      this.rand.addClass(doc, el.class);
      this.rand.setProperty(doc, 'textContent', el.day);

      this.rand.listen(doc, 'click', () => {
        const itemdt = new Date(this.dt);
        if (el.class === 'next') itemdt.setMonth(this.dt.getMonth() + 1);
        if (el.class === 'prev') itemdt.setMonth(this.dt.getMonth() - 1);
        itemdt.setDate(el.day);
        console.log(itemdt);
        let vl = this.yearDiff(itemdt);
        this.ev.emit(vl)
      });

      this.rand.appendChild(this.DaysCon!, doc);
    });
  }

  yearDiff(date: Date) {
    const today = new Date();
    let diff = today.getFullYear() - date.getFullYear();

    if (
      today.getMonth() < date.getMonth() ||
      (today.getMonth() === date.getMonth() && today.getDate() < date.getDate())
    ) {
      diff--;
    }
    //console.log(diff);
    return diff
  }
}