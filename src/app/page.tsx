import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic'
export default function Home() {
  const guid = uuidv4();
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
    <p>Generated GUID: {guid}</p>
  </div>
  );
}
