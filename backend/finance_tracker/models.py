from django.db import models


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Budget(BaseModel):
    name = models.CharField(max_length=128, null=False, blank=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    maximum_spend = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    theme = models.CharField()

    def __str__(self):
        return self.name


class Pot(BaseModel):
    name = models.CharField(max_length=128, null=False, blank=False)
    goal_amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_amount = models.DecimalField(max_digits=10, decimal_places=2)
    theme = models.CharField()


class RecurringBill(BaseModel):
    class FrequencyChoices(models.TextChoices):
        DAILY = 'D', 'Daily'
        WEEKLY = 'W', 'Weekly'
        MONTHLY = 'M', 'Monthly'
        YEARLY = 'Y', 'Yearly'

    name = models.CharField(max_length=128, null=False, blank=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    frequency = models.CharField(max_length=1, choices=FrequencyChoices, default=FrequencyChoices.MONTHLY, null=False)
    next_due_date = models.DateField()
    theme = models.CharField()
    icon = models.CharField()

