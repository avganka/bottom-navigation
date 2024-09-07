import { classNames } from '@utils/classNames';
import styles from './Container.module.css';
import { HTMLAttributes, PropsWithChildren } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={classNames(styles.root, className)} {...rest}>
      {children}
    </div>
  );
};
