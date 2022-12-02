import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonStyle } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outlined'
  leftIcon?: ReactNode
  fullWidth?: boolean
  aligment?: 'left'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  css?: any
}

export function Button({
  variant = 'primary',
  leftIcon,
  fullWidth,
  aligment,
  css,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonStyle({
        variant: variant,
        withIcon: !!leftIcon,
        alignment: aligment,
        fullWidth: fullWidth,
        css: css,
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
