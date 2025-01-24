export const dynamic = 'force-dynamic'
export default function Home() {
  const env =  process.env;
  return (    
  <div>
    <h1>Environment Variables:</h1>
    <ul>
      {Object.entries(env).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value?.toString()}
        </li>
      ))}
    </ul>
  </div>
  );
}
