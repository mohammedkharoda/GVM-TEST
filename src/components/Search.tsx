import { Input } from "@nextui-org/react"
import { SearchIcon } from "../icons/SearchIcon"

const Search = ({onSearch}: {onSearch: (value: string) => void}) => {
  return (
    <Input
          classNames={{
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search your Favourite Food..."
          size="md"
          startContent={<SearchIcon size={18} />}
          type="search"
          onChange={(e) => onSearch(e.target.value)}
        />
  )
}

export default Search