import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CanDeactivateGaurd } from './can-deactivate-guard.service';
import { Observable } from "rxjs";


@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit, CanDeactivateGaurd {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    //retrive query parameters and fragment

    //1st approach to retrive query parameters and fragment, this will load only when page load first time or refresh.
    console.log(this.activeRoute.snapshot.queryParams);
    console.log(this.activeRoute.snapshot.fragment);

    //2nd approach to etrive query parameters and fragment
    this.activeRoute.queryParams.subscribe((queryparams: Params) => {
      this.allowEdit = queryparams["allowEdit"] === "1" ? true : false;
    });

    this.activeRoute.fragment.subscribe((fragmentValue: String) => {
      console.log(fragmentValue);
    });

    const id = this.activeRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
  }

  canDeactivate()  : Observable<boolean> | Promise<boolean> | boolean {

    if (!this.allowEdit) {
      return true;
    }

    if (this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved) {
      
      return confirm("Do you want to discard changes?");
    }
    else {
      return false;
    }
  }
}
