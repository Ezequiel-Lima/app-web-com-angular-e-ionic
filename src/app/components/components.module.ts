import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent
  ]
})
export class ComponentsModule { }
