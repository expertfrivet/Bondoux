"""Régénère data.js de l'appli téléphone Bondoux (checklist + barème du devis)
depuis le code du PC.
Depuis le dossier du logiciel PC :
    python ..\\BondouxMobile\\generer_donnees.py . > ..\\BondouxMobile\\data.js
(ou en donnant les chemins complets). Le barème est lu dans app.py (CALC_...),
la checklist dans src/services/checklist.py : il n'y a rien à recopier à la main.
"""
import ast, json, os, sys
base = sys.argv[1]
sys.path.insert(0, base)
from src.services import checklist as ck

# Barème du devis : constantes CALC_* d'app.py (lues sans lancer Streamlit)
src = open(os.path.join(base, "app.py"), encoding="utf-8").read()
grille = {}
for n in ast.parse(src).body:
    if isinstance(n, ast.Assign) and isinstance(n.targets[0], ast.Name) and n.targets[0].id.startswith("CALC_"):
        try:
            grille[n.targets[0].id] = ast.literal_eval(n.value)
        except ValueError:
            pass

def items(key, lst): return [[i["id"], i["texte"]] for i in ck._items(key, lst)]
bib = {}
for c in ck.CORPS_ETAT:
    b = ck.BIBLIOTHEQUE[c]
    bib[c] = {"controles": items(f"ctrl_{ck._slug(c)}", b["controles"]),
              "documents": items("docs", b["documents"]),
              "questions": items("questions", b["questions"])}
data = {
 "CORPS_ETAT": ck.CORPS_ETAT,
 "PREPARATION": items("prep", ck.PREPARATION),
 "DOCUMENTS_COMMUNS": items("docs", ck.DOCUMENTS_COMMUNS),
 "QUESTIONS_COMMUNES": items("questions", ck.QUESTIONS_COMMUNES),
 "RELEVES": items("releves", ck.RELEVES),
 "CLOTURE": items("cloture", ck.CLOTURE),
 "BIBLIOTHEQUE": bib,
 "STATUTS": ["En attente", "OM envoyé", "Acompte payé", "Expertise réalisée", "Rapport envoyé", "Dossier payé", "Clôturé", "Annulé"],
 "DEVIS": [
  ["calc_type_client", "Type de client",          grille["CALC_TYPE_CLIENT"]],
  ["calc_taille",      "Catégorie du véhicule",   grille["CALC_CATEGORIE"]],
  ["calc_valeur",      "Valeur du véhicule",      grille["CALC_VALEUR"]],
  ["calc_type_exp",    "Type d'analyse",          grille["CALC_TYPE_EXP"]],
  ["calc_contra",      "Procédure",               grille["CALC_CONTRA"]],
  ["calc_km",          "Frais kilométriques",     grille["CALC_KM"]],
  ["calc_interv",      "Nombre d'interventions",  grille["CALC_INTERV"]],
 ],
}
sys.stdout.reconfigure(encoding="utf-8")
print("// Généré depuis src/services/checklist.py et la grille du Devis d'app.py (Bondoux).\n// Ne pas modifier à la main : relancer generer_donnees.py.")
print("const DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";")
