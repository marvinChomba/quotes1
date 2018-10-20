import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { DateDiffPipe } from './date-diff.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    QuoteInfoComponent,
    DateDiffPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
