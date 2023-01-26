import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'saw-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {
  tickValue = 0;
  timer$ : Observable<number>;
  timerSansUnsubscribeDansComponent$ : Observable<number>;
  private tockenInterval: any;
  private maitreSubscription = new Subscription();

  constructor() {
    let tick = 0;

    // this.timer$ = new Observable<number>(subscriber => {
    //   this.tockenInterval = setInterval(() => {
    //     subscriber.next(tick);
    //     tick ++;
    //   }, 1000);
    // });
    this.timer$ = interval(1000); // un service qui return l'observable, sans le subscribe
    this.timerSansUnsubscribeDansComponent$ = interval(1000);
  }

  ngOnDestroy(): void {
    this.maitreSubscription.unsubscribe();
  }

  stop(): void {
    // if (typeof(this.tockenInterval) !== 'undefined') {
    //   clearInterval(this.tockenInterval);
    // }

    // aller voir le takeUntil
    this.tickValue = 0;
  }

  start(): void {
    const callback = (item: number) => this.tickValue = item;
    const subscription = this.timer$.subscribe(callback);
    this.maitreSubscription.add(subscription);
  }
}
