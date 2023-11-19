from rest_framework import routers
from .views import TaskViewSet, CardViewSet, ColumnViewSet

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'list', ColumnViewSet)
router.register(r'card', CardViewSet)
urlpatterns = router.urls