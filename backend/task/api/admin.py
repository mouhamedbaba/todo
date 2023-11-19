from django.contrib import admin

from api.models import Workspace

# Register your models here.

@admin.register(Workspace)
class WorspaceAdmin(admin.ModelAdmin):
    pass
