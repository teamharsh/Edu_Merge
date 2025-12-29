export const generateSubdomain = (name: string): string => {
    const subdomain = name.toLowerCase().replace(/\s+/g, '-');
    const randomSuffix = Math.floor(Math.random() * 1000);
    return `${subdomain}-${randomSuffix}`;
};
