'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <>{children}</>
	}

	return <ThemeProvider>{children}</ThemeProvider>
}
