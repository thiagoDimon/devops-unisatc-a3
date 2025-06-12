# AWS Deployment with Terraform

This directory contains Terraform configuration to deploy the Strapi application to AWS using ECS Fargate.

## Infrastructure Components

- **VPC**: Custom VPC with public subnets
- **ECS Fargate**: Container orchestration service
- **Application Load Balancer**: Routes traffic to containers
- **CloudWatch**: Logs and monitoring
- **SSM Parameter Store**: Secure storage for secrets

## Required GitHub Secrets

Add these secrets to your GitHub repository:

- `AWS_ACCESS_KEY_ID`: AWS access key
- `AWS_SECRET_ACCESS_KEY`: AWS secret key
- `DOCKERHUB_USERNAME`: Docker Hub username
- `DOCKERHUB_TOKEN`: Docker Hub access token

## Manual Deployment

To deploy manually:

1. Configure AWS credentials
2. Initialize Terraform: `terraform init`
3. Plan deployment: `terraform plan`
4. Apply changes: `terraform apply`

## Cleanup

To destroy the infrastructure:
```bash
terraform destroy
``` 