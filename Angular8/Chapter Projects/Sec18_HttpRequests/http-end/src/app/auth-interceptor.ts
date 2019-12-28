import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";

export class AuthInterCeptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xyz")
    });
    return next.handle(modifiedRequest);
  }
}
