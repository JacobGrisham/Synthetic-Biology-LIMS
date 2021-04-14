from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company
from .serializers import CompanySerializer

@api_view(['GET', 'PUT'])
def get_update_company(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # get details of a single company
    if request.method == 'GET':
        serializer = CompanySerializer(company)

        return Response(serializer.data)
    # update details of a single company
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def get_post_company(request):
    # get all companies
    if request.method == 'GET':
        all_companies = Company.objects.all()
        serializer = CompanySerializer(all_companies, many=True)
        return Response(serializer.data)

    # insert a new record for a company
    elif request.method == 'POST':
        data = {
            'name': request.data.get('name'),
            'tier': request.data.get('tier')
        }
        serializer = CompanySerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)