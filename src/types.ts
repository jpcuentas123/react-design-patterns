interface User {
  id: number;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

interface QueryProps {
  url: string; // api.example.com
  path: string; // /api/v1/...
  params: Record<string, string>[] | null; // [{id: 1}]
}

export type { User, QueryProps };
