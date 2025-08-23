import Particles from "@/components/particles";
import SearchBar from "@/components/search-bar";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full glow-red rounded-xl">
      <div className="max-w-3xl w-full text-center flex flex-col justify-center">
        <div className="py-1 px-4 rounded-full bg-accent text-accent-foreground text-sm flex items-center mx-auto">
          Cambios versión v2.0 <ArrowUpRight className="ml-1.5 size-4" />
        </div>
        <h1 className="text-7xl font-display mt-4">Counterpick docente</h1>
        <p className="text-xl max-w-xl mx-auto text-muted-foreground">
          ¿Chatx de jugar al azar con la inscripción? Conoce a tus profes y lo
          que dice la comunidad de ellos.
        </p>
        <SearchBar $size="large" className="my-8" />
        <Link
          href="/meta"
          className="inline-flex items-center justify-center gap-1.5 text-lg uppercase font-medium text-accent"
        >
          <span className="font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent inline-block">
            Meta mensual de profes
          </span>{" "}
          <ArrowRight fontWeight="700" className="size-6 text-primary" />
        </Link>
      </div>
      <Particles />
      <p></p>
    </div>
  );
}
