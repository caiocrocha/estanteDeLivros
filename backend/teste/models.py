from django.db import models


# Create your models here.
class React(models.Model):
  img = models.CharField(max_length=100) # link da imagem
  title = models.CharField(max_length=100) #título do livro
  author = models.CharField(max_length=100) #autor