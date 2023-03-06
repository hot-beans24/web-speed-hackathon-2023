import type {  FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Anchor.styles';

// type Props = Omit<ComponentProps<'a'>, 'className'>;
type Props = {
  children: ReactNode;
  href: string;
}

export const Anchor: FC<Props> = ({ children, href, ...rest }) => {
  return (
    <Link className={styles.container()} to={href} {...rest}>
      {children}
    </Link>
  )
};
