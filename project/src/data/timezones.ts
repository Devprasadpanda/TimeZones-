interface TimezoneGroup {
  region: string;
  zones: {
    value: string;
    label: string;
  }[];
}

export const timezoneGroups: TimezoneGroup[] = [
  {
    region: "Africa",
    zones: [
      { value: "Africa/Algiers", label: "Algeria" },
      { value: "Africa/Cairo", label: "Egypt" },
      { value: "Africa/Casablanca", label: "Morocco" },
      { value: "Africa/Johannesburg", label: "South Africa" },
      { value: "Africa/Lagos", label: "Nigeria" },
      { value: "Africa/Nairobi", label: "Kenya" },
      { value: "Africa/Tripoli", label: "Libya" },
      { value: "Africa/Tunis", label: "Tunisia" },
      { value: "Africa/Windhoek", label: "Namibia" },
      { value: "Africa/Accra", label: "Ghana" },
      { value: "Africa/Addis_Ababa", label: "Ethiopia" },
      { value: "Africa/Khartoum", label: "Sudan" },
      { value: "Africa/Kinshasa", label: "DR Congo" },
      { value: "Africa/Luanda", label: "Angola" },
      { value: "Africa/Maputo", label: "Mozambique" },
      { value: "Africa/Mogadishu", label: "Somalia" }
    ]
  },
  {
    region: "Americas",
    zones: [
      { value: "America/New_York", label: "United States (New York)" },
      { value: "America/Chicago", label: "United States (Chicago)" },
      { value: "America/Denver", label: "United States (Denver)" },
      { value: "America/Los_Angeles", label: "United States (Los Angeles)" },
      { value: "America/Toronto", label: "Canada (Toronto)" },
      { value: "America/Vancouver", label: "Canada (Vancouver)" },
      { value: "America/Mexico_City", label: "Mexico" },
      { value: "America/Bogota", label: "Colombia" },
      { value: "America/Lima", label: "Peru" },
      { value: "America/Santiago", label: "Chile" },
      { value: "America/Sao_Paulo", label: "Brazil" },
      { value: "America/Argentina/Buenos_Aires", label: "Argentina" },
      { value: "America/Caracas", label: "Venezuela" },
      { value: "America/La_Paz", label: "Bolivia" },
      { value: "America/Managua", label: "Nicaragua" },
      { value: "America/Panama", label: "Panama" },
      { value: "America/Port_of_Spain", label: "Trinidad and Tobago" },
      { value: "America/Santo_Domingo", label: "Dominican Republic" }
    ]
  },
  {
    region: "Asia",
    zones: [
      { value: "Asia/Tokyo", label: "Japan" },
      { value: "Asia/Shanghai", label: "China" },
      { value: "Asia/Singapore", label: "Singapore" },
      { value: "Asia/Dubai", label: "United Arab Emirates" },
      { value: "Asia/Kolkata", label: "India" },
      { value: "Asia/Seoul", label: "South Korea" },
      { value: "Asia/Hong_Kong", label: "Hong Kong" },
      { value: "Asia/Bangkok", label: "Thailand" },
      { value: "Asia/Jakarta", label: "Indonesia" },
      { value: "Asia/Manila", label: "Philippines" },
      { value: "Asia/Taipei", label: "Taiwan" },
      { value: "Asia/Tehran", label: "Iran" },
      { value: "Asia/Jerusalem", label: "Israel" },
      { value: "Asia/Riyadh", label: "Saudi Arabia" },
      { value: "Asia/Baghdad", label: "Iraq" },
      { value: "Asia/Beirut", label: "Lebanon" },
      { value: "Asia/Dhaka", label: "Bangladesh" },
      { value: "Asia/Kabul", label: "Afghanistan" },
      { value: "Asia/Karachi", label: "Pakistan" },
      { value: "Asia/Kathmandu", label: "Nepal" },
      { value: "Asia/Kuala_Lumpur", label: "Malaysia" },
      { value: "Asia/Tashkent", label: "Uzbekistan" },
      { value: "Asia/Yerevan", label: "Armenia" }
    ]
  },
  {
    region: "Europe",
    zones: [
      { value: "Europe/London", label: "United Kingdom" },
      { value: "Europe/Paris", label: "France" },
      { value: "Europe/Berlin", label: "Germany" },
      { value: "Europe/Rome", label: "Italy" },
      { value: "Europe/Madrid", label: "Spain" },
      { value: "Europe/Amsterdam", label: "Netherlands" },
      { value: "Europe/Moscow", label: "Russia" },
      { value: "Europe/Stockholm", label: "Sweden" },
      { value: "Europe/Vienna", label: "Austria" },
      { value: "Europe/Warsaw", label: "Poland" },
      { value: "Europe/Kiev", label: "Ukraine" },
      { value: "Europe/Brussels", label: "Belgium" },
      { value: "Europe/Copenhagen", label: "Denmark" },
      { value: "Europe/Helsinki", label: "Finland" },
      { value: "Europe/Oslo", label: "Norway" },
      { value: "Europe/Zurich", label: "Switzerland" },
      { value: "Europe/Athens", label: "Greece" },
      { value: "Europe/Bucharest", label: "Romania" },
      { value: "Europe/Dublin", label: "Ireland" },
      { value: "Europe/Lisbon", label: "Portugal" },
      { value: "Europe/Prague", label: "Czech Republic" },
      { value: "Europe/Riga", label: "Latvia" },
      { value: "Europe/Sofia", label: "Bulgaria" },
      { value: "Europe/Tallinn", label: "Estonia" },
      { value: "Europe/Vilnius", label: "Lithuania" }
    ]
  },
  {
    region: "Oceania",
    zones: [
      { value: "Pacific/Auckland", label: "New Zealand" },
      { value: "Australia/Sydney", label: "Australia (Sydney)" },
      { value: "Australia/Melbourne", label: "Australia (Melbourne)" },
      { value: "Australia/Perth", label: "Australia (Perth)" },
      { value: "Australia/Brisbane", label: "Australia (Brisbane)" },
      { value: "Pacific/Fiji", label: "Fiji" },
      { value: "Pacific/Port_Moresby", label: "Papua New Guinea" },
      { value: "Pacific/Honolulu", label: "United States (Hawaii)" },
      { value: "Pacific/Guam", label: "Guam" },
      { value: "Pacific/Samoa", label: "Samoa" }
    ]
  }
];