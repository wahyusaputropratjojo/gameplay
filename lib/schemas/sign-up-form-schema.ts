import { z } from 'zod';

export const fullNameSchema = z
  .string()
  .min(1, {
    error: 'Full Name is required.',
  })
  .min(2, {
    error: 'Full Name must be at least 2 characters long.',
  })
  .regex(/^[A-Za-z\s]+$/, {
    error:
      'Full Name can only contain letters and spaces, no symbols or numbers allowed.',
  });

export const displayNameSchema = z
  .string()
  .min(1, {
    error: 'Display Name is required.',
  })
  .min(3, {
    error: 'Display Name must be at least 3 characters long.',
  })
  .max(20, {
    error: 'Display Name must be less than 20 characters.',
  })
  .regex(/^[a-z0-9_]+$/, {
    message:
      'Display Name can only contain lowercase letters, numbers, and underscores.',
  })
  .toLowerCase();

export const emailSchema = z
  .string()
  .min(1, {
    error: 'Email is required.',
  })
  .regex(
    /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
    {
      error: 'Please enter a valid email address.',
    }
  );

export const passwordSchema = z
  .string()
  .min(1, {
    error: 'Password is required.',
  })
  .min(8, {
    error: 'Password must be at least 8 characters.',
  });
