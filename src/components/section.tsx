interface SectionProps {
    title: string;
    content: string;
  }
 

export default function Section({ title, content }: SectionProps) {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl mb-6">
            <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">{title}</h2>
            <p>{content}</p>
        </div>
    )
};