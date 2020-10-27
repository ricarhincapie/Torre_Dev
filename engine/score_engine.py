#!/usr/bin/env python3
""" Engine to return a score  
"""

def score_engine(name, **kwargs):
    """ Function to assign a score to the user's genome completion
    """
    scores = {"awards": 10, "education": 5, "interests": 5, 
              "jobs": 10, "projects": 7, "publications": 5, 
              "strengths": 1}
    
    final_score = 0

    for key, value in kwargs.items():
        tmp = scores.get(key)
        final_score += (tmp * value)
    
    score_dic = {'score': final_score, 'name': name}

    return score_dic
