import { HTMLAttributes, memo, PropsWithChildren } from 'react';
import styles from './Page.module.css';
import { Tapbar } from '@components/Tapbar';
import { classNames } from '@utils/classNames';
import { Action } from '@components/Tapbar/tapbarMap';

type PageProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    actions?: Action[];
  };

export const Page = memo((props: PageProps) => {
  const { children, className, actions, ...rest } = props;
  return (
    <div className={classNames(styles.root, className)} {...rest}>
      <main>{children}</main>
      {actions && <Tapbar actions={actions} />}
    </div>
  );
});
