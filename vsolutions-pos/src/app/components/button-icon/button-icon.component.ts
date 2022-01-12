import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-button-icon",
  templateUrl: "./button-icon.component.html",
  styleUrls: ["./button-icon.component.scss"],
})
export class ButtonIconComponent implements OnInit {
  @Input() text: string = "";
  @Input() icon: string = "";
  @Input() type: string = "";
  @Input() color: string = "primary";

  constructor() {}

  ngOnInit() {}
}
