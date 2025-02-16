import React from "react";

interface SimpleCardProps {
  title: string;
  counter?: boolean;
  data: { category: string; name: string }[];
  info?: boolean;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, counter = false, data, info = false }) => {
  return (
    <div>
      <div className="text-sm font-bold mt-6 mb-2">
        {title} {counter && `(${data.length})`}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {data.map(({ name, category }) => (
          <div key={`${category}-${name}`} className="bg-[#f6f1e1] rounded-md py-4 px-6">
            <div className="text-xs font-semibold">{category}</div>
            <div className="font-serif text-2xl mt-1">{name}</div>
          </div>
        ))}
      </div>

      {info && (
        <div className="text-sm font-bold mt-6 mb-2 flex justify-end">
          <button>Show 50 more</button>
        </div>
      )}
    </div>
  );
};

export default SimpleCard;
