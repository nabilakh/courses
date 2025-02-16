export default function SimpleCard(props: {
  title: string;
  counter: boolean;
  data: { category: string; name: string }[];
  info: boolean;
}) {
  const { title, counter, data, info } = props;

  return (
    <>
      <div className="text-sm font-bold mt-6 mb-2">
        {title} {counter && `(${data.length})`}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {data.map(({ name, category }, idx) => (
          <div key={idx} className="bg-[#f6f1e1] rounded-md py-4 px-6">
            <div className="text-xs font-semibold">{category}</div>
            <div className="font-serif text-2xl mt-1">{name}</div>
          </div>
        ))}
      </div>
      {info && (
        <div className="text-sm font-bold mt-6 mb-2 flex justify-end">
          Show 50 more
        </div>
      )}
    </>
  );
}
