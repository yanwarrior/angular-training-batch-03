import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const AuthGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);
  if (userService.isAuthenticated) {
    return true;
  }

  router.navigate(['/sales'])
  return false;
}