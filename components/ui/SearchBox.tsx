import CityDropdown from "./CityDropdown";
import AdultCountDropdown from "./AdultCountDropdown";
import DateRangeInput from "./DateRangeInput";
import ThemeDropdown from "./ThemeDropdown";
import BudgetInput from "./BudgetInput";

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  const cities = ["Paris", "Toulon", "Lyon", "Marseille", "Nice"]; // Example city options

  return (
    <div className="relative w-full max-w-[1700px] mx-auto bg-white rounded-2xl py-6 px-6 md:px-10 shadow-xl">
      <div className="flex flex-col xl:flex-row items-stretch gap-4 md:gap-7">
        <div className="flex-1 lg:flex-[40%]">
          <CityDropdown label="Où va-t-on ?" options={cities} />
        </div>

        <div className="flex-1 lg:flex-[10%]">
          <AdultCountDropdown label="À combien ?" defaultValue={2} />
        </div>

        <div className="flex-1 lg:flex-[30%]">
          <DateRangeInput label="Quand ?" />
        </div>

        <div className="flex-1 lg:flex-[10%]">
          <ThemeDropdown label="Thème" defaultValue="Sportif" />
        </div>

        <div className="flex-1 lg:flex-[10%]">
          <BudgetInput label="Budget par personne" />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-[#f3a71c] hover:bg-[#f8a010] text-white font-medium rounded-2xl px-4 py-3 cursor-pointer">
          Trouver Mon Week&
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
