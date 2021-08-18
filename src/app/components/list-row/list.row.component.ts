import { Component, Input } from "@angular/core";

@Component({
    selector: 'list-row',
    templateUrl: './list.row.component.html',
    styleUrls: ['./list.row.component.css']
})

export class ListRowComponent {

    @Input() category: any;

    scrollX: number = -400;

    handleLeftArrow = () => {

        let x = this.scrollX + Math.round(window.innerWidth / 2);

        if (x > 0) {
            x = 0;
        }

        this.scrollX = x;
    }

    handleRightArrow = () => {
        let x = this.scrollX + Math.round(window.innerWidth / 2);
        let listWidth = this.category.items.results.length * 150;

        if ((window.innerWidth - listWidth) < x) {
            x = (window.innerWidth - listWidth) - 60;
        }

        this.scrollX = x;
    }
}