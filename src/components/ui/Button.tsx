import React from 'react';
import { motion } from 'motion/react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '../../lib/utils';
import Magnetic from '../Magnetic';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  isMagnetic?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonBaseProps & 
  (React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }) |
  (LinkProps & { to: string; href?: never }) |
  (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: never });

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isMagnetic = true, children, className, ...props }, ref) => {
    const variants = {
      primary: 'bg-stone-900 text-white hover:bg-stone-800 shadow-lg shadow-stone-900/10',
      secondary: 'border border-primary text-primary hover:bg-primary/5',
      tertiary: 'text-primary underline underline-offset-8 decoration-primary/30 hover:decoration-primary bg-transparent p-0 h-auto inline-flex',
      gold: 'bg-gold-gradient text-white hover:brightness-110 shadow-xl shadow-amber-900/20',
    };

    const sizes = {
      sm: 'px-6 py-3 text-[10px]',
      md: 'px-10 py-4 text-xs',
      lg: 'px-12 py-5 text-sm',
    };

    const commonClasses = cn(
      'font-label uppercase tracking-[0.2rem] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      variant !== 'tertiary' && 'rounded-none',
      variants[variant],
      variant !== 'tertiary' && sizes[size],
      className
    );

    const motionProps = {
      whileHover: variant !== 'tertiary' ? { scale: 1.02 } : { x: 5 },
      whileTap: { scale: 0.98 },
    };

    let buttonElement: React.ReactElement;

    if ('to' in props) {
      buttonElement = (
        <Link 
          {...(props as LinkProps)} 
          className={commonClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          <motion.div {...motionProps} className="flex items-center gap-3 w-full justify-center">
            {children}
          </motion.div>
        </Link>
      );
    } else if ('href' in props) {
      buttonElement = (
        <motion.a
          {...motionProps}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={commonClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </motion.a>
      );
    } else {
      buttonElement = (
        <motion.button
          {...motionProps}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
          className={commonClasses}
          ref={ref as React.Ref<HTMLButtonElement>}
        >
          {children}
        </motion.button>
      );
    }

    if (isMagnetic && variant !== 'tertiary') {
      return <Magnetic>{buttonElement}</Magnetic>;
    }

    return buttonElement;
  }
);

Button.displayName = 'Button';

export default Button;
