import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
            private router: Router,
            private activeRoute: ActivatedRoute) { 

            }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {

    //Absolute Path
    //this.router.navigate(['/servers']);


    /*relative path

    ..this will still work unlike routerLink directive.
    ..router link directory does not work sine it knows where it seats currenlty 
    ..so try to append  relative path after current active path i.e "http://localhost:4200/servers/servers"

    navigate function does not know current active route

    */
    this.router.navigate(['servers']);



    /*
      Way to inform nvigate function to active route

      SO in this case it will not work since it try to appen servers after servers which is active route

    */

    //this.router.navigate(['servers'],{relativeTo: this.activeRoute});


  }

}
