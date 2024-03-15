import { useState } from "react";
import MenuItems from "./MenuItems"
import Search from "./Search"

const Home = () => {
   const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query:string) => {
    setSearchQuery(query);
  };
  return (
    <div className="mt-10 p-10">
      <Search onSearch={handleSearch} />
      <MenuItems searchQuery={searchQuery} />
    </div>
  )
}

export default Home