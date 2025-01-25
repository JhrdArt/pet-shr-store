import DOMPurify from "dompurify";

interface Props {
  html: string;
}

const PriceRange: React.FC<Props> = ({ html }) => {
  let sanitizedHTML = html;

  if (typeof window !== "undefined") {
    sanitizedHTML = DOMPurify.sanitize(html);
  }

  return (
    <div
      className="flex flex-col text-red-500 font-bold text-xl leading-6 w-14"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default PriceRange;