## Get started

1. Start the container


   ```bash
   docker run -it --rm --network host -v "$(pwd)":/app -w /app node:22-alpine /bin/sh
   ```
2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```