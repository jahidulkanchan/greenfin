import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident perspiciatis, dolor vitae architecto obcaecati eveniet sint molestiae perferendis dolore sed hic repellendus rerum delectus
        eaque accusamus ab? Dolores, in voluptatibus?
        <Image className="max-w-[100px] max-h-[100px]" src="/assets/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
      </main>
    </div>
  );
}
