import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full bg-blue-500 overflow-auto">
      <Image src="/logo.png" width={100} height={100} alt="ta2sema" />
      <div className="text-white text-3xl font-bold ml-4">Ta&apos;sema</div>
      <div className="text-white text-lg mr-4 ml-4">Team Building App</div>
    </div>
  );
}
