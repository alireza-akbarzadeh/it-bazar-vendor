import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md',
  {
    variants: {
      variant: {
        primary: 'bg-primary-main text-primary-lighter hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground ',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        info: 'bg-sky-500/100 text-primary-foreground hover:bg-sky-600',
        ghost: 'bg-transparent',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        xs: 'h-6  px-2',
        sm: 'h-9  px-3',
        md: 'h-11  px-5',
        lg: 'h-13  px-7',
        xl: 'h-15 px-9',
      },
      rounded: {
        default: 'rounded-md',
        xs: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
      roundedFull: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      rounded: 'lg',
      size: 'default',
      fullWidth: false,
      roundedFull: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      fullWidth,
      variant,
      size,
      rounded = 'lg',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, fullWidth, rounded })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
Button.defaultProps = { asChild: false };

export { Button, buttonVariants };
