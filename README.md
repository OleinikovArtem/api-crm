## Get started
You need to install docker on your machine

Then run 
```shell
    docker-compose up --build
```

Then. 
Your nest app will show th Error (you should run prisma generate because CURRENT database doesn't exist)
To solve this problem you need open the `.env` file and change `POSTGRES_HOST=""localhost`
then run in the root folder of the project `npx prisma generate` and it will create the CURRENT DB on postgres.

### If you already have the DB just run `docker-compose up`
