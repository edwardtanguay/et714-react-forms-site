export const getBackendUrl = (): string => {
	return "http://localhost:3014";
};

export const getEnvironment = (): string => {
	return import.meta.env.VITE_ENVIRONMENT;
}
