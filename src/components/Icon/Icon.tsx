import { HTMLAttributes } from 'react';
import { IconStrings } from './IconStrings';

type IconProps = HTMLAttributes<SVGElement> & {
  name: IconStrings;
};

export const Icon = (props: IconProps) => {
  const { name, ...rest } = props;

  return (
    <svg width='18' height='19' {...rest}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
