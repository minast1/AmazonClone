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
