import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { FaArrowLeft, FaArrowRight, FaShoppingCart, FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';

const icons: {
  [keyof: string]: ReactNode
} = {
  FaArrowLeft: <FaArrowLeft />,
  FaArrowRight: <FaArrowRight />,
  FaShoppingCart: <FaShoppingCart />,
  FaUser: <FaUser />
}

type Props = {
  type: string;
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      {icons[type]}
    </span>
  );
};
