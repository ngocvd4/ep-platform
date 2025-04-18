output "cluster_name" {
  description = "ECS Cluster name"
  value       = aws_ecs_cluster.ep_cluster.name
}

output "task_definition_arn" {
  description = "ARN of ECS task definition"
  value       = aws_ecs_task_definition.ep_task.arn
}

output "ecs_service_name" {
  description = "ECS service name"
  value       = aws_ecs_service.ep_service.name
}

output "subnet_id" {
  description = "Public Subnet ID"
  value       = aws_subnet.public.id
}

output "security_group_id" {
  description = "Security Group ID"
  value       = aws_security_group.ecs_sg.id
}


output "alb_dns_name" {
  value = aws_lb.ecs_alb.dns_name
}

