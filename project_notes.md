### Chirp
**
[Theo's Video](https://www.youtube.com/watch?v=YkOSUVzOAA4)

## 2023-06-27
-  Added clerk.  In my previous session with this project, I'd had to deviate a bit from the video b/c Theo used a beta quickstart for @clerk/nextjs package (I think it was the clerk setup), so just to note that down.
-  Adding axiom for logging:  https://axiom.co/
    -   [Project logs on Axiom](https://app.axiom.co/chirp-8ln3/settings/datasets)
-   Planetscale db's on free tier go to sleep after a period of inactivity, this can cause prisma errors if you try to migrate a sleeping db :)
    -   hint: it seems like if you don't get a P*** Error code w/ prisma it's b/c there's no error returning from the db (i.e. it's sleeping)
    -   [Planetscale db dashboard](https://app.planetscale.com/vandaleyindustriesllc/chirpdb)
-   Prisma migrate docs:  https://www.prisma.io/docs/concepts/components/prisma-migrate
-   Prisma w/ MySQL uses a shadow db for migrations: https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database
    - Following Theo's video, I set the dev db up in the planetscale cloud, so:  https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database#cloud-hosted-shadow-databases-must-be-created-manually
-   **Reminder**: Typescript won't pick up changes after you make changes in the Prisma schema file and do a migration, so make sure to either run `npx prisma db generate` or `npm i` (which also runs `prisma generate`) so the ts compiler can pick up on any changes w/ the db schema
-   Pick up from timestamp 21:15 (open video description for chapter)



## Stack Docs
1.  Database:
    -   Planetscale: https://planetscale.com/docs/concepts/what-is-planetscale
2.  Auth:
    -   Clerk:  https://clerk.com/
3.  Logging:
    -   Axiom:  https://axiom.co/
4.  Deployment:
    -   Vercel:  https://vercel.com/dashboard
5.  ORM:
    -   Prisma:  https://www.prisma.io