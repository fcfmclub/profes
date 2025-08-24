import GradialBanner from "@/components/gradial-banner";
import TierAvatar from "@/components/tier-avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-6xl h-screen w-full mx-auto relative">
      <GradialBanner />
      <div className="absolute top-35 left-0 right-0 mx-auto z-40 p-6 flex flex-col gap-8">
        <div className="flex flex-row items-center gap-8">
          <TierAvatar />
          <div className="flex flex-col gap-1">
            <h3 className="text-sm uppercase font-bold text-accent">Profe</h3>
            <h1 className="font-display text-5xl inline-flex items-center gap-3">
              Patricio Felmer A.{" "}
            </h1>
            <p className="text-lg font-bold uppercase">
              Departamento de Ingeniería Matemática
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-1">
              <Card className="flex-1 rounded-tl-xl rounded-b-none rounded-tr-none">
                <CardContent className="flex flex-col items-center justify-center gap-1">
                  <span className="text-3xl font-bold text-yellow-600">S+</span>
                  <span className="font-medium text-muted-foreground">
                    Tier
                  </span>
                </CardContent>
              </Card>
              <Card className="flex-1 rounded-tr-xl rounded-b-none rounded-tl-none">
                <CardContent className="flex flex-col items-center justify-center gap-1">
                  <span className="text-3xl font-bold">#5</span>
                  <span className="font-medium text-muted-foreground">
                    de 324 profes
                  </span>
                </CardContent>
              </Card>
              <Card className="flex-1 rounded-none">
                <CardContent className="flex flex-col items-center justify-center gap-1">
                  <span className="text-3xl font-bold">#5</span>
                  <span className="font-medium text-muted-foreground">
                    de 324 profes
                  </span>
                </CardContent>
              </Card>
              <Card className="flex-1 rounded-r-xl rounded-l-none">
                <CardContent className="flex flex-col items-center justify-center gap-1">
                  <span className="text-3xl font-bold">3</span>
                  <span className="font-medium text-muted-foreground">
                    Cursos
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </main>
  );
}
