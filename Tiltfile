docker_compose('./docker-compose.yml')

# Tilt auto-detects the "build:" key on each Docker Compose service and
# rebuilds + redeploys that service's image whenever a file in its build
# context changes — no explicit docker_build()/live_update needed for this
# scaffold. dc_resource() below is only for Tilt UI grouping/sequencing.

dc_resource('postgres', labels=['data'])
dc_resource('programs', labels=['backend'])
dc_resource('exercises', labels=['backend'])
dc_resource('web', labels=['frontend'])
dc_resource('gateway', labels=['infra'], resource_deps=['web', 'programs', 'exercises'])
