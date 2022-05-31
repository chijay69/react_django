from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'


#class CategoryConfig(AppConfig):
#    name = "Category"
#    verbose_name = "Categories"
