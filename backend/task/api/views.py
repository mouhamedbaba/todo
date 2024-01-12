from django.shortcuts import render
from rest_framework import viewsets
from .models import Workspace, WorkspaceColumn, ColumnCard, Todo
from .serializers import TaskSerializer, CardSerializer, ColumnSerializer, TodoSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Workspace.objects.all().order_by('-id')
    serializer_class = TaskSerializer
    
    @action(detail=True, methods=['delete'])
    def delete_task(self, request, pk=None):
        task = self.get_object()
        task.delete()
        return Response(status=204)
    
class ColumnViewSet(viewsets.ModelViewSet):
    queryset = WorkspaceColumn.objects.all().order_by('-id')
    serializer_class = ColumnSerializer
    
class CardViewSet(viewsets.ModelViewSet):
    queryset = ColumnCard.objects.all().order_by('-id')
    serializer_class = CardSerializer
    
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('-id')
    serializer_class = TodoSerializer
    


