variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "devops-strapi"
}

variable "docker_image" {
  description = "Docker image for the application"
  type        = string
}

variable "app_keys" {
  description = "Strapi APP_KEYS"
  type        = string
  sensitive   = true
}

variable "api_token_salt" {
  description = "Strapi API_TOKEN_SALT"
  type        = string
  sensitive   = true
}

variable "admin_jwt_secret" {
  description = "Strapi ADMIN_JWT_SECRET"
  type        = string
  sensitive   = true
}

variable "transfer_token_salt" {
  description = "Strapi TRANSFER_TOKEN_SALT"
  type        = string
  sensitive   = true
}

variable "jwt_secret" {
  description = "Strapi JWT_SECRET"
  type        = string
  sensitive   = true
} 