import GradialBanner from "@/components/gradial-banner";
import TierAvatar from "@/components/tier-avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-7xl h-screen w-full mx-auto relative">
      <GradialBanner />
      <div className="absolute top-35 left-0 right-0 mx-auto z-40 p-6 flex flex-col gap-8">
        <div className="flex flex-row items-center gap-8">
          <TierAvatar />
          <div className="flex flex-col gap-1">
            <h3 className="text-sm uppercase font-bold text-accent">
              Primavera 2025
            </h3>
            <h1 className="font-display text-5xl inline-flex items-center gap-3">
              Patricio Felmer A.{" "}
            </h1>
            <p className="text-lg font-bold uppercase">
              Departamento de Ingeniería Matemática
            </p>
          </div>
          <span className="ml-auto text-base py-1 px-4 rounded-full bg-accent text-accent-foreground font-sans font-bold">
            Primavera 2025
          </span>
        </div>
        <section className="flex flex-col">
          <div className="flex flex-row items-center gap-1 mt-3">
            <Card className="flex-1 rounded-l-xl rounded-r-none">
              <CardContent className="flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-bold text-yellow-600">S+</span>
                <span className="font-medium text-muted-foreground">Tier</span>
              </CardContent>
            </Card>
            <Card className="flex-1 rounded-none">
              <CardContent className="flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-bold">5/234</span>
                <span className="font-medium text-muted-foreground">
                  Posición
                </span>
              </CardContent>
            </Card>
            <Card className="flex-1 rounded-none">
              <CardContent className="flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-bold">3</span>
                <span className="font-medium text-muted-foreground">
                  Cursos
                </span>
              </CardContent>
            </Card>
            <Card className="flex-1 rounded-r-xl rounded-l-none">
              <CardContent className="flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-bold">3.45%</span>
                <span className="font-medium text-muted-foreground">
                  Pick-rate
                </span>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
