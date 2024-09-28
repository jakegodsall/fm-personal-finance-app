from django.contrib import admin
from .models import Budget, Pot, RecurringBill

admin.site.register(Budget)
admin.site.register(Pot)
admin.site.register(RecurringBill)