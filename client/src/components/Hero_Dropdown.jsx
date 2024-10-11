import React, { useEffect, useState } from "react";

function Hero_Dropdown({ setCountry }) {
  const [contentIsVisible, setContentIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const [filteredCountry, setFilteredCountry] = useState(countryList);
  useEffect(() => {
    setCountry(selectedCountry);
  }, [selectedCountry]);

  // setCountry(selectedCountry);

  const handleSelectBtn = (e) => {
    e.preventDefault();
    setContentIsVisible(!contentIsVisible);
  };

  const handleLiClick = (e) => {
    e.preventDefault();
    setSelectedCountry(e.target.innerHTML);
    setContentIsVisible(false);
  };
  const handleCountryInputKeyUp = (e) => {
    e.preventDefault();
    let arr = [];
    let searchedValue = e.target.value.toLowerCase();
    arr = countryList.filter((data) => {
      return data.toLowerCase().startsWith(searchedValue);
    });
    // let gem = arr ? "yes" : "no";
    let temp = arr.map(() => "hii").join("");
    if (temp) {
      setFilteredCountry(arr);
    } else {
      setFilteredCountry(false);
    }
  };
  return (
    <div className="relative z-30">
      {/* select-btn */}
      <div
        onClick={handleSelectBtn}
        className="flex py-5  rounded-md text-md items-center justify-between cursor-pointer "
      >
        <span>{selectedCountry ? selectedCountry : "Select Country"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transform duration-200 ease-in ${
            contentIsVisible ? " rotate-180" : " rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {/* Content */}
      <div
        className={` mt-4  w-80 rounded-md ${
          contentIsVisible ? "block" : "hidden"
        } absolute left-0 `}
      >
        {/* Search */}
        <div className="flex relative bg-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute left-3 top-[12px] text-gray-400 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className=" h-10 w-full text-base pl-10 outline-none border-2 rounded-md  border-gray-300 "
            onKeyUp={handleCountryInputKeyUp}
          />
        </div>
        {/* Options */}
        <ul className=" mt-3 max-h-64 overflow-y-auto ">
          {filteredCountry ? (
            filteredCountry?.map((e, i) => {
              return (
                <li
                  onClick={handleLiClick}
                  key={`li${i}`}
                  className=" h-12 px-4  bg-white  rounded-md flex items-center  cursor-pointer text-md hover:bg-gray-200"
                >
                  {e}
                </li>
              );
            })
          ) : (
            <h1>Oops! Country not found </h1>
          )}
          {}
        </ul>
      </div>
    </div>
  );
}

export default Hero_Dropdown;
