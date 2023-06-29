[Nest postgresql gql tutorial](https://www.tomray.dev/nestjs-prisma)


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
