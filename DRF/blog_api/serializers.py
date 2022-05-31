from blog.models import Post
from rest_framework import serializers

# class goes here

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'author', 'excerpt', 'content', 'status']
        