import {ZodObject, ZodRawShape} from 'zod'

export function validateFormService<T>(
  schema: ZodObject<ZodRawShape>,
  entity: T
): ValidationError | undefined {
  const validatedFields = schema.safeParse(entity)

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }
  }
}

export interface ValidationError {
  message?: string
  errors?: {[p: string]: string[] | undefined}
}
