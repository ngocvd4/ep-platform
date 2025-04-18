output "instance_public_ip" {
  value = aws_instance.ecs_node.public_ip
}
