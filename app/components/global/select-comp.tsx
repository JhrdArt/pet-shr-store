import type { Elements } from "@stripe/react-stripe-js";

type ElementOption = {
  label: string;
  value: string;
};

type SortOptions = ElementOption["value"];

interface Props {
  elements: ElementOption[];
  setSelectValue: (value: SortOptions) => void;
  name: string;
  selectValue: SortOptions;
  optionName: string;
}

const SelectCollapsible: React.FC<Props> = ({
  elements,
  setSelectValue,
  name,
  selectValue,
  optionName,
}) => {
  if (!elements) return [];
  return (
    <select
      name={name}
      id="select"
      html-for="Select"
      className="h-10 row-span-1 rounded text-center border-[2px] outline-none focus:ring-2"
      value={selectValue}
      onChange={(e) => setSelectValue(e.target.value as SortOptions)}
    >
      <option value="">{optionName}</option>
      {elements.map(({ label, value }, i) => (
        <option key={i} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
export default SelectCollapsible;
