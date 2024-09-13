import React from 'react'
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const textareaStyle = tv({
  base: 'block w-full border font-medium placeholder:font-light placeholder: text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-500 focus:text-teal-800 shadow-sm transition duration-200',
  variants: {
    size: {
      sm: 'text-sm px-2 py-1 rounded-md',
      md: 'text-base px-4 py-2 rounded-lg',
      lg: 'text-lg px-6 py-3 rounded-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type TTextarea = VariantProps<typeof textareaStyle>;
interface TextareaProps extends TTextarea, React.ComponentPropsWithoutRef<'textarea'> {
  icon?: React.ReactNode;
}

export const Textarea = (props: TextareaProps) => {
  return <textarea {...props} className={twMerge(textareaStyle({...props}), props.className)} />
}
