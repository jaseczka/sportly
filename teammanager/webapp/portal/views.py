from teammanager.core.models import Team
from django.shortcuts import render_to_response

def index(request):
    user = request.user
    team = Team.objects.get(name="4Hands")
    return render_to_response('portal/index.html', {'team': team,
                                                    'user': user})