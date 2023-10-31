import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  navbarIsVisibleEvents = new BehaviorSubject<boolean>(true);
  navbarIsMenuVisibleEvents = new BehaviorSubject<boolean>(true);
}
