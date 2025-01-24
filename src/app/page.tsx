export const dynamic = 'force-dynamic'
export default function Home() {
  const env =  process.env;
  return (
    <h1>{env.DATABASE_CONNECTION_STRING}</h1>
  );
}
