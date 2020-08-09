import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private route:ActivatedRoute, private urlService:UrlService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let slug = params.get('slug');
      this.urlService.getUrl(slug)
      .subscribe((sUrl)=>{
        if(!sUrl){
          this.router.navigateByUrl('/');
          return;
        }
        if(sUrl.url.match(/http:/g) || sUrl.url.match(/https:/g)){
          window.open(`${sUrl.url}`);
        }else{
          window.open(`http://${sUrl.url}`);
        }
        
        this.router.navigateByUrl('/');
      }, (err)=>{
        this.router.navigateByUrl('/');
      })
    })
  }

}
