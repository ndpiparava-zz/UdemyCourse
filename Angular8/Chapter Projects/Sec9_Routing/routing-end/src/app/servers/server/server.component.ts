import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this.server = this.serversService.getServer(2);

    // this.activeRoute.params.subscribe((params: Params) => {
    //   //+ is convert string into number
    //   const serverID = +params["id"];
    //   this.server = this.serversService.getServer(serverID);
    // });



  }

  onEdit() {
    //this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
    //this.router.navigate(['/editServer', this.server.id, this.server.name]);
    this.router.navigate(["edit"], {
      relativeTo: this.activeRoute,
      queryParamsHandling: "preserve"
    });
  }
}
