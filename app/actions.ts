'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const email = formData.get('email') as string

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Login attempt for:', email)

    // Set mock session cookie
    const cookieStore = await cookies()
    cookieStore.set('session', 'mock-session-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    })

    redirect('/dashboard')
}
