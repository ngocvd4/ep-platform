resource "aws_ecs_service" "ep_service" {
  name            = "ep-platform-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.ep_task.arn
  launch_type     = "EC2"
  desired_count   = 1

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200
}
