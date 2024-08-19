import { UserStatus } from './components';
import { Report } from './report';
import { StoreInsight } from './store-insight';
import { StoreQueryTracker } from './store-query-tracker';
import { TopProducts } from './top-products';

export function HomeDomains() {
  return (
    <div className="w-full flex flex-col gap-6 mt-6">
      <UserStatus />
      <Report />
      <StoreInsight />
      <TopProducts />
      <StoreQueryTracker />
    </div>
  );
}
