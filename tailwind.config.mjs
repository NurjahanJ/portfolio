/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Lora', 'serif'],
    },
    extend: {
      colors: {
        // Explorer Brand Colors
        primary: {
          DEFAULT: '#2f4f4f', // Forest Green
          50: '#e6eded',
          100: '#cddcdc',
          200: '#9bb9b9',
          300: '#689696',
          400: '#367373',
          500: '#2f4f4f',
          600: '#263f3f',
          700: '#1c2f2f',
          800: '#132020',
          900: '#091010',
        },
        secondary: {
          DEFAULT: '#87ceeb', // Sky Blue
          50: '#f0f9fd',
          100: '#e1f3fb',
          200: '#c3e7f7',
          300: '#a5dbf3',
          400: '#87ceeb',
          500: '#6ca5bc',
          600: '#517c8d',
          700: '#3d5d69',
          800: '#283e46',
          900: '#141f23',
        },
        accent: {
          DEFAULT: '#c2b280', // Sandstone
          50: '#faf7f0',
          100: '#f5efe1',
          200: '#ebdfc3',
          300: '#e2d0a5',
          400: '#d8c087',
          500: '#c2b280',
          600: '#9b8e66',
          700: '#746a4d',
          800: '#4d4733',
          900: '#26231a',
        },
        background: {
          DEFAULT: '#f9f9f7', // Off-white
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfc',
          300: '#fbfbfa',
          400: '#fafaf8',
          500: '#f9f9f7',
          600: '#c7c7c6',
          700: '#959594',
          800: '#646463',
          900: '#323231',
          dark: '#1e1e1c', // Dark background for dark mode
        },
        text: {
          dark: '#1a1a1a', // Charcoal
          light: '#f9f9f7', // Off-white for dark mode
          muted: '#6b7280', // Muted text color
        },
        // Keep neutral for compatibility
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Semantic Colors
        success: {
          light: '#dcfce7',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        error: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        // System Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
}