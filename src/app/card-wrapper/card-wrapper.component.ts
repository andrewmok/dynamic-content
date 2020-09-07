import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from './ad.directive';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {
  @ViewChild(AdDirective) adHost: AdDirective;
  @Input() data;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  updateComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as any;

    instance.content = this.data.content;
  }

  ngOnInit(): void {
    this.updateComponent();
  }

}
