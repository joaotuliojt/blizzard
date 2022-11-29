import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonStyle } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outlined'
  leftIcon?: ReactNode
}

export function Button({
  variant = 'primary',
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonStyle({
        variant: variant,
        withIcon: !!leftIcon,
      })}
      {...props}
    >
      <>
        {leftIcon ? <>{leftIcon}</> : null}
        {props.children}
      </>
    </button>
  )
}
