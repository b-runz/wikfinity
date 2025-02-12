import WikiCard from './WikiCard';

export default function Home() {
  return (
    <div className="h-screen w-full bg-black text-white overflow-y-scroll snap-y snap-mandatory hide-scroll">
      <WikiCard title='Ether'></WikiCard>
      <WikiCard title='Oxygen'></WikiCard>
      <WikiCard title='Fire'></WikiCard>
    </div>

  );
}
