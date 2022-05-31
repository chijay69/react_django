from django.test import TestCase
from django.contrib.auth.models import User
from blog.models import Category, Post


# Create your tests here.

class Test_Create_Post(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name='django')
        test_user = User.objects.create_user(username='test_user1', password='admin')
        test_post = Post.objects.create(category_id=1, title='django rest framework', excerpt='Post Excerpt', content='About django rest framework post contents', slug='django-rest-framework', author_id=1, status='published')

    def test_blog_content(self):
        post = Post.post_objects.get(id=1)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        excerpt = f'{post.excerpt}'
        title = f'{post.title}'
        content = f'{post.content}'
        status = f'{post.status}'
        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'django rest framework')
        self.assertEqual(status, 'published')
        self.assertEqual(excerpt, 'Post Excerpt')
        self.assertEqual(str(post), 'django rest framework')
        self.assertEqual(str(cat), 'django')
        
