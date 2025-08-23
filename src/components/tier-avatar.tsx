import Image from "next/image";

export default function TierAvatar() {
  return (
    <div className="size-32 outline-2 outline-yellow-600 outline-offset-4 rounded-lg relative">
      <div className="border-2 outline-background outline-4 border-yellow-600 absolute left-0 right-0 mx-auto -top-6 rounded-lg p-1 bg-background w-14 text-center font-bold text-yellow-600">
        S+
      </div>
      <Image
        src="https://ucampus.uchile.cl/d/r/usuario/5e/5ecd9143ecb0df35ca7ba9ac92a9c803/perfil/d937b16ea715137dbf4a26d0224e1b77.jpg"
        alt="Tier Avatar"
        width={128}
        height={128}
        className="object-cover rounded-lg"
      />
    </div>
  );
}
