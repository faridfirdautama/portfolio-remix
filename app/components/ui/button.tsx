import React from 'react'
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const buttonStyle = tv({
  base: 'flex justify-center items-center gap-2 border font-medium transition duration-200',
  variants: {
    variant: {
      primary: 'text-white border-primary-500 bg-primary-500 hover:bg-primary-400 active:bg-primary-600',
      primaryGr: 'text-white border-teal-500 bg-teal-500 hover:bg-teal-400 active:bg-teal-600',
      secondary: 'bg-secondary-50/50 border-secondary-50/50 text-black hover:bg-secondary-200 active:bg-secondary-300',
      outline: 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600',
      outlineGr: 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white active:bg-teal-700',
    },
    size: {
      sm: 'text-sm px-2 py-1 rounded-md',
      md: 'text-base px-4 py-2 rounded-lg',
      lg: 'text-lg px-6 py-3 rounded-xl',
    },
    iconOnly: {
      true: 'p-2',
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    iconOnly: false,
  },
});

type TButton = VariantProps<typeof buttonStyle>;
interface ButtonProps extends TButton, React.ComponentPropsWithoutRef<'button'> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={twMerge(buttonStyle(props), props.className)}>
      {props.startContent}
      <div>{props.children}</div>
      {props.endContent}
    </button>
  )
}

