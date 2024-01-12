from rest_framework import routers
from .views import TaskViewSet, CardViewSet, ColumnViewSet, TodoViewSet

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'list', ColumnViewSet)
router.register(r'card', CardViewSet)
router.register(r'todo', TodoViewSet)
urlpatterns = router.urls