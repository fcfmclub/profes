"use client";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import useSearchBar from "@/hooks/use-search-bar";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgeCheck, Star } from "lucide-react";

export interface SearchBarProps extends React.HTMLProps<HTMLDivElement> {
  $size: "normal" | "large";
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

function SearchItem() {
  return (
    <li>
      <Button asChild variant="ghost" size="lg">
        <Link
          href={`/search`}
          className="w-full inline-flex !justify-between items-center rounded-none"
        >
          <span className="flex flex-row items-center gap-3">
            <Avatar>
              <AvatarImage
                src="https://ucampus.uchile.cl/d/r/usuario/5d/5d02e2f68ca9140d7154a674177086d2/perfil/bacb27f7b221828f86eb1df14e36c539.jpg"
                alt=""
              ></AvatarImage>
              <AvatarFallback>IB</AvatarFallback>
            </Avatar>
            <span className="font-medium text-lg">Ignacio Bordeu</span>
          </span>
          <span className="flex flex-row items-center gap-2">
            <span className="flex flex-row items-center gap-1">
              4.76
              <Star className="size-4.5 text-yellow-500" />
            </span>
            <BadgeCheck className="size-4.5 text-accent" />
          </span>
        </Link>
      </Button>
    </li>
  );
}

export default function SearchBar(props: SearchBarProps) {
  const { inputProps, ...rest } = props;
  const {
    inputRef,
    popoverWidth,
    SearchComponent,
    busy,
    search,
    searching,
    onSearchChange,
    toggleSearching,
  } = useSearchBar(props);

  return (
    <div {...rest}>
      <Popover open={searching} onOpenChange={toggleSearching}>
        <PopoverAnchor>
          <SearchComponent
            onChange={onSearchChange}
            ref={inputRef}
            placeholder="Buscar..."
            {...inputProps}
          />
        </PopoverAnchor>
        <PopoverContent
          className="!p-0"
          autoFocus={false}
          onOpenAutoFocus={(event) => event.preventDefault()}
          style={{ width: popoverWidth }}
        >
          <ul className="flex flex-col w-full py-4">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
