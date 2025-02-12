
interface ImportMetaEnv {
  PUBLIC_CURRENT_ICON: boolean
  readonly PUBLIC_BASE_URL: string
    // readonly PUBLIC_API_URL: string;
    // readonly PRIVATE_SECRET_KEY?: string; // Solo accesible en el servidor
  }
  
  interface ImportMeta {
    env: ImportMetaEnv
}