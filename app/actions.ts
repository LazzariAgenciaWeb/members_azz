'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const email = formData.get('email') as string

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Login attempt for:', email)

    // Determine role based on email (Mock Logic)
    let role: 'admin' | 'staff' | 'client' = 'client';
    let department: 'administrative' | 'production' | undefined = undefined;

    if (email.includes('admin')) {
        role = 'admin';
    } else if (email.includes('staff')) {
        role = 'staff';
        if (email.includes('adm')) department = 'administrative';
        if (email.includes('prod')) department = 'production';
    }

    // Set mock session cookie
    const cookieStore = await cookies()
    const sessionData = JSON.stringify({ email, role, department });

    cookieStore.set('session', sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    })

    if (role === 'admin') {
        redirect('/admin')
    } else if (role === 'staff') {
        redirect('/staff')
    } else {
        redirect('/dashboard')
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/login')
}
