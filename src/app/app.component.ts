import { Component, OnInit, VERSION } from "@angular/core";
import { of, from } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Welcome to RxJS";
  ngOnInit() {
    of(1, 3, 5, 7).subscribe(console.log);
    from([2, 4, 6, 8, 10]).subscribe(console.log);

    from(["Apple", 3, 5, 7, 9]).subscribe(
      item => console.log(`resutling item.... ${item}`),
      err => console.log(`error occurs.... ${err}`),
      () => console.log(`complete`)
    );

    of("Apple", 2, 4, 6, 8).subscribe(
      item => console.log(`resutling item.... ${item}`),
      err => console.log(`error occurs.... ${err}`),
      () => console.log(`complete`)
    );
  }
}
