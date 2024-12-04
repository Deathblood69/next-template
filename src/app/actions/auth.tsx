import {FormState, SignupFormSchema} from '@/app/lib/definitions'
import {hashSync} from "bcrypt-ts";

export async function signup(state: FormState, formData: FormData) {
    // 1. Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // 2. Prepare data for insertion into database
    const {name, email, password} = validatedFields.data
    // e.g. Hash the user's password before storing it
    const hashedPassword = hashSync(password, 10)

    console.log(name, email, hashedPassword)

    const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password: hashedPassword,
        }),
    })

    if (!response.ok) {
        return {
            message: 'An error occurred while creating your account.',
        }
    }

    // TODO:
    // 4. Create user session
    // 5. Redirect user
}