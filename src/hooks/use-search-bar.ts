import { SearchBarProps } from "@/components/search-bar";
import { BigInput } from "@/components/ui/big-input";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export default function useSearchBar(props: SearchBarProps) {
      const { $size } = props;

      const inputRef = useRef<HTMLInputElement>(null);

      const [popoverWidth, setPopoverWidth] = useState<number>(0);
      const [searching, setSearching] = useState<boolean>(false);
        const [busy, setBusy] = useState<boolean>(false);
      const [search, setSearch] = useState<string>("");

      const SearchComponent = $size === "large" ? BigInput : Input;

      const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };

      const toggleSearching = (open: boolean) => {
        setSearching(open);
      };

      useEffect(() => {
        const debounceTimeout = debounceRef.current;
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }
        debounceRef.current = setTimeout(() => {
          if (search.length > 2) {
            setSearching(true);
            setBusy(true);
            // Simulate a search API call
            setTimeout(() => {
              setBusy(false);
            }, 1000);
          }
        }, 350); // 350ms debounce
        return () => {
          if (debounceRef.current) {
            clearTimeout(debounceRef.current);
          }
        };
      }, [search]);

      // Debounce ref for search
      const debounceRef = useRef<NodeJS.Timeout | null>(null);

      useEffect(() => {
        const handleResize = () => {
          if (inputRef.current) {
            setPopoverWidth(inputRef.current.offsetWidth);
          }
        };
        handleResize(); // Initial size
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      return {
        inputRef,
        popoverWidth,
        SearchComponent,
        searching,
        search,
        onSearchChange,
        busy,
        toggleSearching,
      };
}