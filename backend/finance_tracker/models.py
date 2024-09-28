from django.db import models


class ThemeChoices(models.TextChoices):
    PURPLE = 'purple', 'Purple'
    TURQUOISE = 'turquoise', 'Turquoise'
    BROWN = 'brown', 'Brown'
    MAGENTA = 'magenta', 'Magenta'
    BLUE = 'blue', 'Blue'
    GREY = 'grey', 'Grey'
    ARMY_GREEN = 'army_green', 'Army Green'
    GOLD = 'gold', 'Gold'
    ORANGE = 'orange', 'Orange'


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Budget(BaseModel):
    name = models.CharField(max_length=128, null=False, blank=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    maximum_spend = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    theme = models.CharField(max_length=20, choices=ThemeChoices.choices, default=ThemeChoices.PURPLE)

    def __str__(self):
        return self.name


class Pot(BaseModel):
    name = models.CharField(max_length=128, null=False, blank=False)
    goal_amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_amount = models.DecimalField(max_digits=10, decimal_places=2)
    theme = models.CharField(max_length=20, choices=ThemeChoices.choices, default=ThemeChoices.PURPLE)

    def __str__(self):
        return self.name


class RecurringBill(BaseModel):
    class Meta:
        verbose_name_plural = 'Recurring Bills'

    class FrequencyChoices(models.TextChoices):
        DAILY = 'D', 'Daily'
        WEEKLY = 'W', 'Weekly'
        MONTHLY = 'M', 'Monthly'
        YEARLY = 'Y', 'Yearly'

    class IconChoices(models.TextChoices):
        ARROW = 'arrow', 'Arrow'
        BIRDS = 'birds', 'Birds'
        BREAD = 'bread', 'Bread'
        CIRCLE_DOT = 'circle-dot', 'Circle Dot'
        CLOUD = 'cloud', 'Cloud'
        EASEL = 'easel', 'Easel'
        EGG = 'egg', 'Egg'
        FILM = 'film', 'Film'
        HEX = 'hex', 'Hex'
        RADAR = 'radar', 'Radar'
        SPOON = 'spoon', 'Spoon'
        STAIRS = 'stairs', 'Stairs'
        STEERING_WHEEL = 'steering-wheel', 'Steering Wheel'
        STRING = 'string', 'String'
        TRIANGLE = 'triangle', 'Triangle'

    name = models.CharField(max_length=128, null=False, blank=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    frequency = models.CharField(max_length=1, choices=FrequencyChoices, default=FrequencyChoices.MONTHLY, null=False)
    next_due_date = models.DateField()
    theme = models.CharField(max_length=20, choices=ThemeChoices.choices, default=ThemeChoices.PURPLE)
    icon = models.CharField(max_length=20, choices=IconChoices.choices, default=IconChoices.ARROW)

    def __str__(self):
        return self.name

