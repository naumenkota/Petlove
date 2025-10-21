import s from "./NoticesFilters.module.css";
import SearchField from "../SearchField/SearchField";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedSex,
  setSelectedSpecies,
  setSelectedCategory,
} from "../../redux/filter/filterSlice";
import {
  getSexOption,
  getCategoriesOption,
  getSpeciesOption,
  getCities,
  getLocations,
} from "../../redux/api/api";
import { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { setSelectedCity } from "../../redux/cities/citiesSlice";

export default function NoticesFilters() {
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

  return (
    <div className={s.wrapper}>
      <SearchField type="notices" />

      <select value={selectedCategory} onChange={handleChangeCategory}>
        <option value="" disabled hidden>
          Category
        </option>
        <option value="all">Show all</option>
        {categoriesOption.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select value={selectedSex} onChange={handleChangeSex}>
        <option value="" disabled hidden>
          By gender
        </option>
        <option value="all">Show all</option>
        {sexOption.map((sex) => (
          <option key={sex} value={sex}>
            {sex}
          </option>
        ))}
      </select>

      <select value={selectedSpecies} onChange={handleChangeSpecies}>
        <option value="" disabled hidden>
          By type
        </option>
        <option value="all">Show all</option>
        {speciesOption.map((species) => (
          <option key={species} value={species}>
            {species}
          </option>
        ))}
      </select>

      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={fetchCities}
        value={selectedCity}
        onChange={(city) => dispatch(setSelectedCity(city))}
        placeholder="Select city..."
        isClearable
      />
    </div>
  );
}
