import { LocationFilter } from './LocationFilter';
import { DateFilter } from './DateFilter';

export function Filters() {
  return (
    <div className="filters">
      <DateFilter />
      <LocationFilter />
    </div>
  );
}
