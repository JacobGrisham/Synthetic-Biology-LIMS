import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Company
from ..serializers import CompanySerializer


# initialize the APIClient app
client = Client()


class GetAllCompaniesTest(TestCase):
  """ Test module for GET all puppies API """

  def setUp(self):
    Company.objects.create(
      name='Zymergen', tier='T3')
    Company.objects.create(
      name='Ginkgo Bioworks', tier='T2')
    Company.objects.create(
      name='Twist Bioscience', tier='T2')
    Company.objects.create(
      name='Synbio Startup', tier='T1')

  def test_get_all_companies(self):
    # get API response
    response = client.get(reverse('get_all_companies_or_add_new_company'))
    # get data from db
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)


class GetSingleCompanyTest(TestCase):
  """ Test module for GET single company API """

  def setUp(self):
    self.zymergen = Company.objects.create(
      name='Zymergen', tier='T3')
    self.ginkgo_bioscience = Company.objects.create(
      name='Ginkgo Bioworks', tier='T2')
    self.twist_bioscience = Company.objects.create(
      name='Twist Bioscience', tier='T2')
    self.synbio_startup = Company.objects.create(
      name='Synbio Startup', tier='T1')

  def test_get_valid_single_company(self):
    response = client.get(
      reverse('get_or_update_individual_company', kwargs={'company_id': self.zymergen.pk}))
    company = Company.objects.get(pk=self.zymergen.pk)
    serializer = CompanySerializer(company)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_get_invalid_single_company(self):
    response = client.get(
      reverse('get_or_update_individual_company', kwargs={'company_id': 30}))
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class CreateNewCompanyTest(TestCase):
  """ Test module for inserting a new company """

  def setUp(self):
    self.valid_payload = {
      'name': 'Zymergen',
      'tier': 'T3'
    }
    self.invalid_payload = {
      'name': '',
      'tier': 'TR'
    }

  def test_create_valid_company(self):
    response = client.post(
      reverse('get_all_companies_or_add_new_company'),
      data=json.dumps(self.valid_payload),
      content_type='application/json'
    )
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

  def test_create_invalid_company(self):
    response = client.post(
      reverse('get_all_companies_or_add_new_company'),
      data=json.dumps(self.invalid_payload),
      content_type='application/json'
    )
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class UpdateSingleCompanyTest(TestCase):
  """ Test module for updating an existing company record """

  def setUp(self):
    self.zymergen = Company.objects.create(
      name='Zymergen', tier='T3')
    self.ginkgo_bioscience = Company.objects.create(
      name='Ginkgo Bioworks', tier='T2')
    self.valid_payload = {
      'name': 'Zymergen',
      'tier': 'T3'
    }
    self.invalid_payload = {
      'name': '',
      'tier': 'TR'
    }

  def test_valid_update_company(self):
    response = client.put(
      reverse('get_or_update_individual_company', kwargs={'company_id': self.zymergen.pk}),
      data=json.dumps(self.valid_payload),
      content_type='application/json'
    )
    self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

  def test_invalid_update_company(self):
    response = client.put(
      reverse('get_or_update_individual_company', kwargs={'company_id': self.zymergen.pk}),
      data=json.dumps(self.invalid_payload),
      content_type='application/json')
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)