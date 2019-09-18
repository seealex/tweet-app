import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout()
    .subscribe(
      data => {
          this.router.navigate(['/']);
      },
      error => {
      });
  }

}
