import sharedConfig from "@dub/tailwind-config/tailwind.config.ts";

const isDev = process.env.NODE_ENV == "development";

const config = isDev
  ? null
  : {
      presets: [
        {
          ...sharedConfig,
          content: [
            "./app/**/*.{js,ts,jsx,tsx}",
            "./ui/**/*.{js,ts,jsx,tsx}",
            // h/t to https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo
            "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
          ],
          theme: {
            extend: {
              ...sharedConfig?.theme?.extend,
              animation: {
                ...sharedConfig?.theme?.extend?.animation,
                // Infinite scroll animation
                "infinite-scroll": "infinite-scroll 22s linear infinite",
              },
              keyframes: {
                ...sharedConfig?.theme?.extend?.keyframes,
                // Infinite scroll animation
                "infinite-scroll": {
                  "0%": { transform: "translateX(0)" },
                  "100%": { transform: "translateX(-150%)" },
                },
              },
            },
          },
        },
      ],
    };

export default config;
