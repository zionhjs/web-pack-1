# Generated by Django 2.2 on 2019-12-21 00:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.CharField(max_length=255)),
                ('author', models.CharField(max_length=55)),
                ('onEdit', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=125)),
                ('first_name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
                ('password', models.CharField(max_length=255)),
                ('points_rate', models.IntegerField(default=1)),
                ('total_points', models.IntegerField(default=0)),
                ('description', models.CharField(default='default description', max_length=255)),
                ('user_level', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='DailyReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipients', models.CharField(max_length=255)),
                ('done', models.CharField(max_length=255)),
                ('challenges', models.CharField(max_length=255)),
                ('helps', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reports', to='clock_in_out_app.User')),
            ],
        ),
        migrations.CreateModel(
            name='Clock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clockin', models.DateTimeField(blank=True, null=True)),
                ('clockout', models.DateTimeField(blank=True, null=True)),
                ('clock_hours', models.FloatField(default=0.0)),
                ('clock_points', models.FloatField(default=0.0)),
                ('task_des', models.CharField(default='', max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clocks', to='clock_in_out_app.User')),
            ],
        ),
        migrations.CreateModel(
            name='Award',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.FloatField(default=0.0)),
                ('reasons', models.CharField(default='some good default reason', max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('admin', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='admin_awards', to='clock_in_out_app.User')),
                ('clock', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='clock_awards', to='clock_in_out_app.Clock')),
                ('user', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='user_awards', to='clock_in_out_app.User')),
            ],
        ),
    ]
