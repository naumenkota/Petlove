import s from "./NoticesFilters.module.css";
import SearchField from "../SearchField/SearchField";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  setSelectedSex,
  setSelectedSpecies,
  setSelectedCategory,
  setSortBy,
} from "../../redux/filter/filterSlice";
import {
  getSexOption,
  getCategoriesOption,
  getSpeciesOption,
  getCities,
} from "../../redux/api/api";
import { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { setSelectedCity } from "../../redux/cities/citiesSlice";

export default function NoticesFilters() {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const controlHeight = isTablet ? "48px" : "42px";
  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 12px",
      maxWidth: "295px",
      width: "100%",
      height: controlHeight,
      minHeight: controlHeight,
      boxSizing: "border-box",
      backgroundColor: "var(--white)",
      borderRadius: "30px",
      border: "none",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: 1.28,
      letterSpacing: "-0.03em",
      outline: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#999",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: 1.28,
      letterSpacing: "-0.03em",
      textTransform: "capitalize",
    }),
    input: (provided) => ({
      ...provided,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: 1.28,
      letterSpacing: "-0.03em",
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: 1.28,
      letterSpacing: "-0.03em",
      backgroundColor: state.isSelected ? "#f0f0f0" : "var(--white)",
      color: "#000",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      marginTop: "4px",
      maxWidth: "295px",
      width: "100%",
    }),
    dropdownIndicator: () => ({
      display: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: 1.28,
      letterSpacing: "-0.03em",
      textTransform: "capitalize",
    }),
  };

  const dispatch = useDispatch();
  const sexOption = useSelector((state) => state.filters.sexOption);
  const selectedSex = useSelector((state) => state.filters.selectedSex);
  const speciesOption = useSelector((state) => state.filters.speciesOption);
  const selectedSpecies = useSelector((state) => state.filters.selectedSpecies);
  const categoriesOption = useSelector(
    (state) => state.filters.categoriesOption
  );
  const selectedCategory = useSelector(
    (state) => state.filters.selectedCategory
  );
  const selectedCity = useSelector((state) => state.cities.selectedCity);
  const selectedSort = useSelector((state) => state.filters.sortBy);

  const fetchCities = async (inputValue) => {
    if (!inputValue || inputValue.length < 3) return [];
    const response = await dispatch(getCities({ keyword: inputValue }));
    return response.payload
      .filter((city) =>
        city.cityEn.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      .map((city) => ({
        value: city._id,
        label: `${city.stateEn}, ${city.cityEn}`,
      }));
  };

  useEffect(() => {
    dispatch(getSexOption());
    dispatch(getSpeciesOption());
    dispatch(getCategoriesOption());
  }, [dispatch]);

  const handleChangeSex = (e) => {
    dispatch(setSelectedSex(e.target.value));
  };

  const handleChangeSpecies = (e) => {
    dispatch(setSelectedSpecies(e.target.value));
  };

  const handleChangeCategory = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const capitalizeFirstWord = (str) => {
    if (!str) return str;
    return str
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase()
      )
      .join(" ");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.select_wrapper}>
        <SearchField type="notices" />

        <div className={s.select_wrapper_small}>
          <select
            value={selectedCategory}
            onChange={handleChangeCategory}
            className={s.select}
          >
            <option value="" disabled hidden>
              Category
            </option>
            <option value="all">Show all</option>
            {categoriesOption.map((category) => (
              <option key={category} value={category}>
                {capitalizeFirstWord(category)}
              </option>
            ))}
          </select>

          <select
            value={selectedSex}
            onChange={handleChangeSex}
            className={s.select}
          >
            <option value="" disabled hidden>
              By gender
            </option>
            <option value="all">Show all</option>
            {sexOption.map((sex) => (
              <option key={sex} value={sex}>
                {capitalizeFirstWord(sex)}
              </option>
            ))}
          </select>
        </div>

        <select
          value={selectedSpecies}
          onChange={handleChangeSpecies}
          className={s.select_type}
        >
          <option value="" disabled className={s.placeholder}>
            By type
          </option>
          <option value="all">Show all</option>
          {speciesOption.map((species) => (
            <option key={species} value={species}>
              {capitalizeFirstWord(species)}
            </option>
          ))}
        </select>

        <AsyncSelect
          className={s.select_loc}
          cacheOptions
          defaultOptions
          loadOptions={fetchCities}
          value={selectedCity}
          onChange={(city) => dispatch(setSelectedCity(city))}
          placeholder="Location"
          isClearable
          styles={customStyles}
        />
      </div>
      <div className={s.line}></div>
      <div className={s.sortButtons}>
        {["Popular", "Unpopular", "Cheap", "Expensive"].map((sort) => (
          <button
            key={sort}
            className={sort === selectedSort ? s.active : s.not_active}
            onClick={() => dispatch(setSortBy(sort))}
          >
            {sort}
          </button>
        ))}
      </div>
    </div>
  );
}
