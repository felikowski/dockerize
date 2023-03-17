(Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin 069778003933.dkr.ecr.eu-central-1.amazonaws.com
docker build -t dev_test .
docker tag dev_test:latest 069778003933.dkr.ecr.eu-central-1.amazonaws.com/dev_test:latest
docker push 069778003933.dkr.ecr.eu-central-1.amazonaws.com/dev_test:latest
aws ecs update-service --cluster devCluster --service devTest --force-new-deployment