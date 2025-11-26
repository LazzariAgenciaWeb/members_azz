'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const email = formData.get('email') as string

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Login attempt for:', email)

    // Determine role based on email (Mock Logic)
    let role = 'client';
    if (email.includes('admin')) role = 'admin';
    else if (email.includes('staff') || email.includes('colab')) role = 'staff';

    // Set mock session cookie
    const cookieStore = await cookies()
    const sessionData = JSON.stringify({ email, role });

    cookieStore.set('session', sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    })

    redirect('/dashboard')
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/login')
}
