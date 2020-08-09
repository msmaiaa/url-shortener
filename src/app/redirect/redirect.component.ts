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
    console.log("no componente redirect")
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let slug = params.get('slug');
      this.urlService.getUrl(slug)
      .subscribe((sUrl)=>{
        console.log(sUrl.url);
        window.open(`http://${sUrl.url}`);
        this.router.navigateByUrl('/');
      })
    })
  }

}
