import { classNames } from '@utils/classNames';
import styles from './Button.module.css';
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <button ref={ref} className={classNames(styles.root, className)} {...rest}>
      {children}
    </button>
  );
});
