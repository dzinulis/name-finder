#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu May  9 18:10:52 2024

@author: r41
"""

import pandas as pd
import seaborn as sb
import matplotlib.pyplot as plt


# Read data
vd = pd.read_csv('vardadienas_trad.csv')

# Create separate day and month
vd[['day','month','x']] = vd['Datums'].str.split('.', expand = True)
vd['day']=vd['day'].astype(int)
vd['month']=vd['month'].astype(int)

# Create separate row for each name
vd['name']=vd['Vārdadienas'].str.split(',')
vd = vd.explode('name')
vd['name']=vd['name'].str.strip()

# Remove unneeded columns
vd = vd.drop(columns=['Datums','Vārdadienas','x'])

# Re-index
vd = vd.reset_index()
vd = vd.drop(columns = ['index'])

# Remove that one overly long name
def shorten(name):
    if len(name) > 40:
        return name.split('.')[0]
    else:
        return name

vd['name'] = vd['name'].apply(shorten)

# Remove that one overly short name
vd = vd.drop(vd[vd['name']=='–'].index)

# vd = vd.reset_index()
    
# Create name length column
vd['namelength']=vd['name'].str.len()
sb.countplot(vd, x='namelength')
plt.show()

# Create last letter column
def lastLetter(name):
    return name[-1]
vd['last_letter'] = vd['name'].apply(lastLetter)
sb.countplot(vd, x='last_letter')
plt.show()

# Create first letter column
def firstLetter(name):
    return name[0]
vd['first_letter'] = vd['name'].apply(firstLetter)
sb.countplot(vd, x='first_letter', order = vd['first_letter'].value_counts().index)
plt.show()

# Let's add gender
def gender(x):
    if x=='s' or x=='o' or x=='š':
        return 'male'
    else:
        return 'female'
    
# Add gender column
vd['gender'] = vd['last_letter'].apply(gender)
sb.countplot(vd, x='gender')
plt.show()

vd.insert(0,'id',vd.index)

# Save json file
vd.to_json(r'vardadienas_trad.json', orient = 'records')