## Contents of the documentation:

1. [Get Started](#get-started)
2. [Errors and Solutions](#errors-and-solions)

---

# Get Started

Run docker container (Don't forget to run the docker application first)
```cmd
docker-compose up --build -V  (everything will be cleaned up as first start)
docker-compose up (for everyday use)
```

Then open http://localhost:9001 - there is admin panel for local file-bucket
`MINIO_ROOT_USER="minioadmin"
MINIO_ROOT_PASSWORD="minioadmin"`

**Then** choose the AccessKeys => create Access keys and save it to `.env` file
then restart your app `docker-compose down` -> `docker-compose up`

And now you will be able to see the image that you uploaded to the bucket.

---

# ERRORS AND SOLUTIONS

---
## Docker

#### If you see this ERROR message when you're trying to start the project:

```
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:5432 -> 0.0.0.0:0: listen tcp 0.0.0.0:5432: bind: address already in use
```
you need increase the port number in `docker-compose.yml`, at the postgres service section
```yaml
  postgres:
    image: postgres
    restart: always
    # ... something ...
    ports:
      - '5432:5432' # HERE examples (5433:5432' | 5434:5432' | 5435:5432')
    # ... something ...

```
---

