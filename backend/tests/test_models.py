from django.test import TestCase
from ..models import Company


class CompanyTest(TestCase):
    """ Test module for Company model """

    def setUp(self):
        Company.objects.create(
            name='Zymergen', tier='T3')
        Company.objects.create(
            name='Ginkgo Bioworks', tier='T2')

    def test_company_details(self):
        company_zymergen = Company.objects.get(name='Zymergen')
        company_ginkgo_bioworks = Company.objects.get(name='Ginkgo Bioworks')
        self.assertEqual(
            company_zymergen.get_company_details(), "Zymergen has id 1 and is currently subscribed to T3.")
        self.assertEqual(
            company_ginkgo_bioworks.get_company_details(), "Ginkgo Bioworks has id 2 and is currently subscribed to T2.")