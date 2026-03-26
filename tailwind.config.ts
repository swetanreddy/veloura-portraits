import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			display: [
  				'Syne',
  				'sans-serif'
  			],
  			body: [
  				'Outfit',
  				'sans-serif'
  			],
  			sans: [
  				'Outfit',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'Noto Sans',
  				'sans-serif'
  			],
  			serif: [
  				'Lora',
  				'ui-serif',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			mono: [
  				'Space Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'Liberation Mono',
  				'Courier New',
  				'monospace'
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			gold: {
  				DEFAULT: 'hsl(var(--gold))',
  				light: 'hsl(var(--gold-light))',
  				dark: 'hsl(var(--gold-dark))',
  				muted: 'hsl(var(--gold-muted))'
  			},
  			charcoal: 'hsl(var(--charcoal))',
  			navy: {
  				DEFAULT: 'hsl(var(--navy))',
  				light: 'hsl(var(--navy-light))',
  				deep: 'hsl(var(--navy-deep))'
  			},
  			slate: {
  				DEFAULT: 'hsl(var(--slate))',
  				warm: 'hsl(var(--slate-warm))'
  			},
  			cream: {
  				DEFAULT: 'hsl(var(--cream))',
  				dark: 'hsl(var(--cream-dark))'
  			},
  			ivory: 'hsl(var(--ivory))',
  			terracotta: 'hsl(var(--terracotta))',
  			sage: 'hsl(var(--sage))',
  			copper: 'hsl(var(--copper))',
  			platinum: 'hsl(var(--platinum))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': '1rem',
  			'3xl': '1.5rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-up': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(24px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			shimmer: {
  				'0%, 100%': {
  					backgroundPosition: '200% 0'
  				},
  				'50%': {
  					backgroundPosition: '-200% 0'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'glow-pulse': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px -5px hsl(45 85% 55% / 0.4)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px -5px hsl(45 85% 55% / 0.6)'
  				}
  			},
  			'quantum-pulse': {
  				'0%, 100%': {
  					boxShadow: '0 0 30px -5px hsl(45 85% 55% / 0.45), 0 0 60px -10px hsl(42 80% 45% / 0.25)'
  				},
  				'50%': {
  					boxShadow: '0 0 50px -5px hsl(45 85% 55% / 0.65), 0 0 80px -10px hsl(42 80% 45% / 0.35)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			shimmer: 'shimmer 3s ease-in-out infinite',
  			float: 'float 6s ease-in-out infinite',
  			'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
  			'quantum-pulse': 'quantum-pulse 4s ease-in-out infinite'
  		},
  		boxShadow: {
  			subtle: '0 1px 2px 0 rgb(0 0 0 / 0.4)',
  			card: '0 4px 20px -4px rgb(0 0 0 / 0.6), 0 2px 8px -2px rgb(0 0 0 / 0.5)',
  			elevated: '0 20px 60px -15px rgb(0 0 0 / 0.7), 0 8px 24px -8px hsl(45 85% 55% / 0.15)',
  			gold: '0 12px 40px -10px hsl(45 85% 55% / 0.4), 0 4px 16px -4px hsl(45 85% 55% / 0.25)',
  			'gold-glow': '0 0 60px -12px hsl(45 85% 55% / 0.5)',
  			premium: '0 25px 80px -20px rgb(0 0 0 / 0.8)',
  			'inner-gold': 'inset 0 1px 0 0 hsl(48 90% 65% / 0.25)',
  			quantum: '0 0 100px -25px hsl(45 85% 55% / 0.4), 0 0 50px -15px hsl(42 80% 45% / 0.25)',
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		backgroundImage: {
  			'0': 0,
  			'400': 400,
  			'gradient-gold': 'linear-gradient(135deg, hsl(42 80% 45%), hsl(45 85% 55%), hsl(48 90% 65%))',
  			'gradient-gold-horizontal': 'linear-gradient(90deg, hsl(48 90% 65%), hsl(45 85% 55%), hsl(42 80% 45%))',
  			'gradient-navy': 'linear-gradient(180deg, hsl(40 10% 6%), hsl(40 15% 3%))',
  			'gradient-navy-radial': 'radial-gradient(ellipse at 50% 0%, hsl(40 10% 12%) 0%, hsl(40 15% 3%) 70%)',
  			'gradient-warm': 'linear-gradient(180deg, hsl(40 10% 5%), hsl(40 10% 7%))',
  			'gradient-radial-gold': 'radial-gradient(ellipse at top, hsl(45 85% 55% / 0.2), transparent 50%)',
  			'gradient-radial-center': 'radial-gradient(ellipse at center, hsl(45 85% 55% / 0.15), transparent 60%)',
  			'gradient-quantum': 'linear-gradient(135deg, hsl(45 85% 55%), hsl(42 80% 45%), hsl(48 90% 65%))',
  			'gradient-aurora': 'linear-gradient(180deg, hsl(45 85% 55% / 0.25), hsl(42 80% 45% / 0.15), transparent)',
  			noise: 'url(\\\\"data:image/svg+xml,%3Csvg viewBox=',
  			' xmlns=': 'http'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
