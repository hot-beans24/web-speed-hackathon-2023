import { type FC } from 'react';
import * as Router from 'react-router-dom';

import { NotFound } from '../../../pages/NotFound';
import { Order } from '../../../pages/Order';
import { OrderComplete } from '../../../pages/OrderComplete';
import { ProductDetail } from '../../../pages/ProductDetail';
import { Top } from '../../../pages/Top';

import { useScrollToTop } from './hooks';

// const NotFound = lazy(() => import('../../../pages/NotFound').then(({ NotFound }) => ({ default: NotFound })));
// const Order = lazy(() => import('../../../pages/Order').then(({ Order }) => ({ default: Order})));
// const OrderComplete = lazy(() => import('../../../pages/OrderComplete').then(({ OrderComplete }) => ({ default: OrderComplete })));
// const ProductDetail = lazy(() => import('../../../pages/ProductDetail').then(({ ProductDetail }) => ({ default: ProductDetail })));
// const Top = lazy(() => import('../../../pages/Top').then(({ Top }) => ({ default: Top })));

export const Routes: FC = () => {
  useScrollToTop();
  console.log("Routes")
  return (
    <Router.Routes>
        {/* <Router.Route element={<h1>Top</h1>} path="/" /> */}
        <Router.Route element={<Top />} path="/" />
        <Router.Route element={<ProductDetail />} path="/product/:productId" />
        <Router.Route element={<Order />} path="/order" />
        <Router.Route element={<OrderComplete />} path="/order/complete" />
        <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
