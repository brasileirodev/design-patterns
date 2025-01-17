type AppConfig = {
    appName: string;
    version: string;
  };
  
  const Config = (() => {
    let instance: AppConfig | null = null; 
  
    const createInstance = (): AppConfig => ({
      appName: "MyApp",
      version: "1.0.0",
    });
  
    return {
      getInstance: (): AppConfig => {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  const appConfig1 = Config.getInstance();
  const appConfig2 = Config.getInstance();
  
  console.log(appConfig1 === appConfig2); 
  console.log(appConfig1.appName);
  console.log(appConfig1.version);
  