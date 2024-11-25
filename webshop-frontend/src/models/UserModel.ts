export interface User {
  id?: string; // Optional, as it will be generated by the backend
  username: string;
  email: string;
  token: string | null;
  password: string;
}
