container-top
------------------------   ---------------------------
| Name                  |  |  Str Con Dex Int Wis Cha |
| Gender Ancestry Job   |  |  13 (+1)                 |
|                       |  |                          |
|                       |  |                          |
------------------------    --------------------------

container-bottom

Description

Secret

Rumour


1. Gender
male, female, nonbinary

2. Ancestry

3. Name
first name (syllable + syllable) OR (short name) OR (old english name) OR (old german name)
last name (adj + noun) OR (old english name) OR (old german name)

short male names (generic, old english, german)
short female names (generic, old english, german)
short gender-neutral names (generic, old english, german)

4. Description

Randomize function (array, number)
  if number === 1 return random entry from array
  set localList to empty array
  set toReturn to empty string
  set localArray to ...array
  if number === 2
    localList.push(random entry from localArray)
    localList.push(random entry from (localArray with localList[0] filtered out))
    return localList[0] + " and " + localList[1];
  loop through number
    localList.push(random entry from (localArray with localList filtered out))
  loop through number
    if i === number return toReturn + "and " + (random entry from (localArray with localList[0] filtered out))
    toReturn += localList[i] + ", "

5. Stats
(randomly generated) + bonuses

6. Job

    Rich: merchant, tax collector
    poor: village idiot, town drunk, farmhand
    weapons: blacksmith, soldier, watchman

7. 
Description
  one to three elements from desc1
  one to three elements from desc2
  one to two elements from desc3



  

STRETCH
add sliders to determine likelihood of different species
button to copy character to clipboard as plaintext