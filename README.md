# openworkout

Monorepo for openworkout.org — landing page + backend services.

## Structure

- `apps/web` — React + Vite frontend (landing page, `/programs`, `/exercises`, `/privacy`)
- `services/programs`, `services/exercises` — Fastify + Postgres backend service stubs
- `infra/nginx` — gateway config for local dev
- `infra/postgres` — database init scripts
- `docker-compose.yml` / `Tiltfile` — local full-stack orchestration

## Local development

Frontend only (fast iteration, no Docker):

```
cd apps/web
npm install
npm run dev
```

Full stack (frontend + backend services + Postgres + gateway):

```
docker compose up
# or, with Tilt:
tilt up
```

Then visit http://localhost:8080 (gateway) — `/`, `/programs`, `/exercises`, `/privacy` are all
served there, and `/api/programs/*` / `/api/exercises/*` proxy to the backend services.

## Deployment

`apps/web` builds to a static `dist/` and deploys via FTP to shared Apache hosting on push to
`main` (see `.github/workflows/deploy.yml`). Backend services are local-dev only for now.
