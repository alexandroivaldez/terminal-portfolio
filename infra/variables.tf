variable "domain_name" {
  type        = string
  description = "Root domain"
}

variable "aws_region" {
  type        = string
  description = "AWS region to deploy resources in"
  default     = "us-east-1"
}

variable "environment" {
  type        = string
  description = "Deployment environment"
}

variable "subdomain" {
  type        = string
  description = "Subdomain to use"
  default     = "www"
}
