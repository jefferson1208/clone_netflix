import { Component, Input } from "@angular/core";

@Component({
    selector: 'loading-sc',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent {

    @Input() show: boolean = false;
}