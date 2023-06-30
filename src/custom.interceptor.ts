import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log({ context });

    /* NOTE: THIS IS INTERCEPTING THE REQUEST */

    return handler.handle().pipe(
      map((data) => {
        /* NOTE: THIS IS INTERCEPTING THE RESPONSE */
        const response = {
          ...data,
          createdAt: data.created_at,
        };
        delete response.created_at;
        delete response.updated_at;

        return response;
      }),
    );
  }
}
