import React from 'react'
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const inputStyle = tv({
  base: 'block w-full border font-medium placeholder:font-light placeholder: text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-500 focus:text-teal-800 shadow-sm transition duration-200',
  variants: {
    size: {
      sm: 'text-sm px-2 py-1 rounded-md',
      md: 'text-base px-4 py-2 rounded-lg',
      lg: 'text-lg px-6 py-3 rounded-xl',
    },
    withIcon: {
      true: 'pl-12 pr-4',
    }
  },
  defaultVariants: {
    size: 'md',
    withIcon: false,
  },
});

type TInput = VariantProps<typeof inputStyle>;
interface InputProps extends TInput, Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  icon?: React.ReactNode;
}

export const Input = (props: InputProps) => {
  return (
    <div className="relative flex gap-2">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">{props.icon}</div>
      <input {...props} size={undefined} className={twMerge(inputStyle({...props}), props.className)} />
    </div>
  )
}

