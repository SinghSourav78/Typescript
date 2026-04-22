interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean;
}

export function ChaiCard({name, price, isSpecial = false} : ChaiCardProps) {
    return (
        <article>
            <h2>
                {name} {isSpecial && <span>Start</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}