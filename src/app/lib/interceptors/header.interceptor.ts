import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const headers: HttpHeaders = new HttpHeaders({ authorId: 499 });
  const reqClone = req.clone({ headers });

  return next(reqClone);
};
