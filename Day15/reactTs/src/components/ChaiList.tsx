import type { Chai } from '../types';
import { ChaiCard } from './chaicard';

interface ChaiListProps {
    items : Chai[];

}

export function ChaiList({ items }: ChaiListProps) {
    return (
        <div>
            {items.map((item) => (
                <ChaiCard 
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    isSpecial={item.price > 30}
                />
            ))}
        </div>

    )
}