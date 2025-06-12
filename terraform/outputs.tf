output "alb_dns_name" {
  description = "DNS name of the load balancer"
  value       = aws_lb.main.dns_name
}

output "alb_zone_id" {
  description = "Zone ID of the load balancer"
  value       = aws_lb.main.zone_id
}

output "app_url" {
  description = "URL to access the application"
  value       = "http://${aws_lb.main.dns_name}"
} 