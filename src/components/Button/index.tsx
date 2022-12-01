import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonStyle } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outlined'
  leftIcon?: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  leftIcon,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonStyle({
        variant: variant,
        withIcon: !!leftIcon,
        css: {
          width: fullWidth ? '100%' : 'auto',
        },
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
