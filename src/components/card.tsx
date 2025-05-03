interface CardProps {
    title: string;
    description: string;
}

export default function Card({ title, description }: CardProps) {
    return(
        <div className="bg-[#1a1a1a] p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    )
}