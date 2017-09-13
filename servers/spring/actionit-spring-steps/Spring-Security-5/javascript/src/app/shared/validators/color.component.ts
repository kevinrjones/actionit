import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core'

@Directive({
    selector: "[rskHighlight]"
})
export class ColorDirective implements OnInit { 

    @Input('rskHighlight') highlightColor: string;
    @Input() defaultColor: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = this.highlightColor || this.defaultColor || "yellow";
    }

    @HostListener('mouseenter') onmouseenter() {
        console.log("Mouse enter");
    }

}
