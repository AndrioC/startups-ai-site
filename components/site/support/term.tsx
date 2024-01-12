interface TermProps {
  title?: string;
  text: string;
}

function Term({ title, text }: TermProps) {
  return (
    <div className="flex flex-col mt-5 gap-3 w-full">
      {text && (
        <h3 className="text-base lg:text-xl text-center lg:text-left">
          {title}
        </h3>
      )}
      <p className="text-xs lg:text-sm leading-7">{text}</p>
    </div>
  );
}

function TextWithBullet({ title, text }: TermProps) {
  return (
    <div className="flex flex-col mt-5 gap-3">
      <h3 className="text-sm">{title}</h3>
      <ul className="list-inside list-none">
        <li className="text-xs lg:text-sm leading-7">{text}</li>
      </ul>
    </div>
  );
}
export { Term, TextWithBullet };
