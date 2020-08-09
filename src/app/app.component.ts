import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UrlService } from './url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  created = false;
  createdUrl = null;

  urlForm = this.fb.group({
    'url': ['', [Validators.required, Validators.maxLength(250), Validators.pattern(this.reg)]],
    'slug': ['', [Validators.required, Validators.maxLength(50)]],
  })

  constructor(private fb:FormBuilder, private urlService:UrlService){

  }
  
  
  onSubmit(){
    this.urlService.addUrl(this.urlForm.value)
    .subscribe((note)=>{
      this.created = true;
      this.createdUrl = 'http://localhost:4200/' + note.slug;
      console.log(note)
    })
  }
}
