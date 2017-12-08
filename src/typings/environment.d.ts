declare module 'environment' {
  export default environment;
}

declare const environment: EnvironmentStatic;

interface EnvironmentStatic {
  serverURL: string;
  cors: boolean;
}
