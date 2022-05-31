from django.contrib import admin
from .models import Category, Post, User

# Register your models here.

# admin.site.register('Post')
# admin.site.register('Category')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)



@admin.register(Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'status', 'slug', 'author')
    list_filter = ('status', 'published')
    prepopulated_fields = {'slug':('title',),}
    #fields = ['title', 'author', ('excerpt', 'content')]
    fieldsets = (
        (None, { 'fields': ('title', 'slug', 'id', 'aithor') }),
        ('Availability', { 'fields': ('status', 'published') }),
    )
    

