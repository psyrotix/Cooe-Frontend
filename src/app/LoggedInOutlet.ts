import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';

@Directive({
  selector: 'router-awesome'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_viewContainerRef: ViewContainerRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_viewContainerRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    // The Boolean following each route below
    // denotes whether the route requires authentication to view
    this.publicRoutes = {
      'login'  : true,
      'signup' : true,
      'forgot' : true,
      'home'   : true,
      //to be removed from publics
      'teeups' : false,
      'teeup'  : false,
      'create-teeup' : false,
      'test'   : true
    };
  }

  activate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    console.log(url);
    if (!this.publicRoutes[url] && !localStorage.getItem('userName')) {
      // todo: redirect to Login, may be there a better way?
      this.parentRouter.navigateByUrl('/login');
    }
    return super.activate(instruction);
  }
}
