# AmazoneClone

An ecommerce clone of Amazon built with Mui, Nextjs , Prisma, PlanetScale Serverless Database, FakeStoreApi and Vercel.

## How to use

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then, you'll need to migrate prisma schema to the database of your choice prefferably post
gress . run the seeders in the seeders folder to populate the database with dummy data

It is vital that you know the deployment URL and define it in the environment file.

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

**Note:** For production you need to know in advance the domain (deployment URL) of your application, as it would be required for OAuth to work, once you have it set it to the `NEXTAUTH_URL` environment variable under the settings of your Vercel project.
