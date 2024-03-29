from rest_framework import serializers
from .models import Workspace, ColumnCard, WorkspaceColumn, Todo



class TaskSerializer(serializers.ModelSerializer):
    
    class Meta :
        model = Workspace
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):
    
    class Meta :
        model = Todo
        fields = '__all__'
        
    
class CardSerializer(serializers.ModelSerializer):
    
    class Meta :
        model = ColumnCard
        fields = '__all__'
        
class ColumnSerializer(serializers.ModelSerializer):
    
    class Meta :
        model = WorkspaceColumn
        fields = '__all__'