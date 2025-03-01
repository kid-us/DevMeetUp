const CardInfo = ({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <div className="card-bg px-5 py-7 border border-secondary-border">
    <div className="flex mb-4 uppercase text-color space-x-3 text-lg">
      <span>
        <Icon />
      </span>
      <p className="font-bold">{title}</p>
    </div>
    <p>{content}</p>
  </div>
);

export default CardInfo;
