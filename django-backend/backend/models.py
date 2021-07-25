from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

class Company(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='company id')
  name = models.CharField(max_length=50, verbose_name='company name')
  class Tier(models.TextChoices):
    TIER_THREE = 'T3', _('Tier Three: 100-1000 users')
    TIER_TWO = 'T2', _('Tier Two: 10-100 users')
    TIER_ONE = 'T1', _('Tier One: 1-10 users')
    TRIAL = 'TR', _('Trial')
  tier = models.CharField(max_length=2, choices=Tier.choices, blank=False, default=Tier.TRIAL)

  def get_company_details(self):
    return self.name + ' has id ' + str(self.pk) + ' and is currently subscribed to ' + self.tier + '.'

  def __str__(self):
    return f"${self.name}'s id is ${self.pk} and tier is ${self.tier}."

class User(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='user id')
  username = models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, verbose_name='username')
  password = models.CharField(max_length=128, verbose_name='user encrypted password')
  email = models.EmailField(blank=True, max_length=254, verbose_name='user email address')
  employee_of = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company_employee", verbose_name='user employed by company')
  retired = models.BooleanField(default=False, help_text='Designates whether this user left the company. Unselect this instead of deleting accounts.', verbose_name='retired')
  class Group(models.TextChoices):
    LAB_MANAGER = 'LM', _('Lab Manager')
    PROJECT_MANAGER = 'PM', _('Project Manager')
    LAB_TECH = 'LT', _('Lab Technician')
    CLIENT = 'CL', _('Client')
    GUEST = 'GS', _('Guest')
    OTHER = 'OT', _('Other')
  group = models.CharField(max_length=2, choices=Group.choices, blank=False, default=Group.OTHER)

  def __str__(self):
    return f"${self.username} is employed by ${self.employee_of} as a ${self.group}."

class Item (models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='item id')
  company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company_item", verbose_name='item associated with company')
  barcode = models.CharField(blank=True, max_length=150, verbose_name='item barcode')
  name = models.CharField(max_length=300, verbose_name='item name')
  type = models.CharField(max_length=150, verbose_name='item type')
  description = models.TextField(verbose_name='item description')
  total_amount = models.DecimalField(max_digits=19, decimal_places=10, verbose_name='item amount')
  units = models.CharField(max_length=20, verbose_name='units of measurement for the total item amount')
  location = models.CharField(max_length=300, verbose_name='item location')
  created_at = models.DateTimeField(default=timezone.now, verbose_name='date the item was created')
  modified_at = models.DateTimeField(default=timezone.now, verbose_name='date and time the item was last modified')

  def __str__(self):
    return f"There is ${self.total_amount} ${self.units} of ${self.name} located in ${self.location}."

class Instrument(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='instrument id')
  name = models.CharField(max_length=300, verbose_name='instrument name')

class Protocol_Step(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='database id')
  protocol_step = models.PositiveSmallIntegerField(verbose_name='step number')
  instructions = models.TextField(verbose_name='protocol instructions')
  instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE, related_name="instrument", verbose_name='instrument required for a protocol')
  input_name = models.CharField(max_length=300, verbose_name='input name')
  input_amount = models.DecimalField(max_digits=19, decimal_places=10, verbose_name='input item amount')
  input_units = models.CharField(max_length=20, verbose_name='units of measurement for the input item amount')
  output_name = models.CharField(max_length=300, verbose_name='product name')
  output_amount = models.DecimalField(max_digits=19, decimal_places=10, verbose_name='product amount')
  output_units = models.CharField(max_length=20, verbose_name='units of measurement for the product amount')

  def __str__(self):
    return f"Protocol ${self.protocol_id} step ${self.protocol_step} requires ${self.instrument} and ${self.input_units} ${self.input_amount} of ${self.input_name} to synthesize ${self.output_units} ${self.output_amount} of ${self.output_name} via the following instructions ${self.instructions}"

class Protocol(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='protocol id')
  name = models.CharField(max_length=300, verbose_name='protocol name')
  description = models.TextField(verbose_name='protocol description')
  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="protocol_author", verbose_name='user that authored the protocol')
  created_at = models.DateTimeField(default=timezone.now, verbose_name='date and time the protocol was created')
  modified_at = models.DateTimeField(default=timezone.now, blank=True, verbose_name='date and time the protocol was last modified')

  def __str__(self):
    return f"${self.name}: ${self.description}"

class Status(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='database id')
  DELAYED = 'DL'
  PENDING = 'PN'
  RUNNING = 'RN'
  FINISHED = 'FN'
  STATUS = [
        (DELAYED, 'Delayed'),
        (PENDING, 'Pending'),
        (RUNNING, 'Running'),
        (FINISHED, 'Finished')
  ]
  status = models.CharField(max_length=2, choices=STATUS, blank=True)

class Project(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='project id')
  company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company_project", verbose_name='item associated with company')
  name = models.CharField(max_length=300, verbose_name='project name')
  description = models.TextField(verbose_name='project description')
  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="project_author", verbose_name='user that authored the project')
  project_manager = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, related_name="project_manager", verbose_name='user that the assigned project manager')
  status = models.ForeignKey(Status, on_delete=models.CASCADE, related_name="project_status", verbose_name='status of project')
  modified_at = models.DateTimeField(default=timezone.now, blank=True, verbose_name='date and time the project was last modified')
  started_at = models.DateTimeField(default=timezone.now, blank=True, verbose_name='date and time the project started')
  updated_at = models.DateTimeField(default=timezone.now, blank=True, verbose_name='date and time the project was last updated')
  ended_at = models.DateTimeField(default=timezone.now, blank=True, verbose_name='date and time the project ended')

  def __str__(self):
    return f"${self.name}: ${self.description}"

class Project_Protocol(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='project and protocol pairing id')
  project_id = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='project that uses a protocol')
  protocol_id = models.ForeignKey(Protocol, on_delete=models.CASCADE, verbose_name='protocol added to a project')
  project_step = models.PositiveSmallIntegerField(verbose_name='step number')

  def __str__(self):
    return f"Project ${self.project_id} step ${self.project_step} is to complete ${self.protocol_id}."

class Job(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='job id')
  project_id = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="job_project",verbose_name='project id associated with job')
  project_step = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="job_project_step", verbose_name='project step associated with job')
  protocol_id = models.ForeignKey(Protocol, on_delete=models.CASCADE, related_name="job_protocol", verbose_name='id of protocol used in job')
  protocol_step = models.ForeignKey(Protocol, on_delete=models.CASCADE, related_name="job_protocol_step", verbose_name='protocol step number in job')
  technician = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='technician who worked on job')
  status = models.ForeignKey(Status, on_delete=models.CASCADE, related_name="job_status", blank=True, verbose_name='status of job')
  started_at = models.DateTimeField(default=timezone.now, verbose_name='date and time the job started')
  ended_at = models.DateTimeField(default=timezone.now, blank=True, verbose_name='date and time the job ended')
  success = models.BooleanField(default=None, blank=True)

  def __str__(self):
    return f"In job ${self.job_id}, ${self.technician} started protocol ${self.protocol_id} step ${self.protocol_step} for project ${self.project_id} at ${self.started_at}."

class History_of_Item(models.Model):
  id = models.AutoField(auto_created=True, primary_key=True, verbose_name='item historical record id')
  item = models.ForeignKey(Item, on_delete=models.CASCADE, verbose_name='item id')
  technician = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="used_by_technician", verbose_name='technician who used the item')
  job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="used_in_job", verbose_name='job id associated with the consumption in a job')
  amount_delta = models.DecimalField(max_digits=19, decimal_places=10, verbose_name='change in the item amount')
  units = models.CharField(max_length=20, verbose_name='item amount units of measurement')
  location = models.CharField(max_length=300, verbose_name='item location')
  timestamp = models.DateTimeField(default=timezone.now, verbose_name='date and time the item was used in a a job')
  synthesized_by = models.ForeignKey(Job, on_delete=models.CASCADE, blank=True, related_name="synthesized_by_job", verbose_name='job id associated with the synthesis of the product')

  def __str__(self):
    return f"${self.amount_delta} ${self.units} of item ${self.item} was used in job ${self.job} on ${self.location} at ${self.timestamp}."