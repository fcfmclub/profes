import GradialBanner from "@/components/gradial-banner";
import TierAvatar from "@/components/tier-avatar";
import { Card } from "@/components/ui/card";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-7xl h-screen w-full mx-auto relative">
      <GradialBanner />
      <div className="absolute top-35 left-0 right-0 mx-auto z-40 p-6 flex flex-col gap-8">
        <div className="flex flex-row items-center gap-8">
          <TierAvatar />
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-5xl">Patricio Felmer A.</h1>
            <p className="text-lg font-bold uppercase">
              Departamento de Ingeniería Matemática
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <Card className="flex-1">hola</Card>
          <Card className="flex-1">hola</Card>
        </div>
      </div>
    </main>
  );
}
