// Généré depuis src/services/checklist.py et la grille du Devis d'app.py (Bondoux).
// Ne pas modifier à la main : relancer generer_donnees.py.
const DATA = {
 "CORPS_ETAT": [
  "Identification du véhicule et historique",
  "Moteur et périphériques",
  "Distribution",
  "Lubrification et refroidissement",
  "Alimentation, injection et suralimentation",
  "Dépollution et échappement",
  "Embrayage et boîte de vitesses",
  "Transmission et ponts",
  "Freinage",
  "Direction, suspension et trains roulants",
  "Pneumatiques et roues",
  "Électricité, électronique et diagnostic",
  "Chaîne de traction électrique / hybride",
  "Carrosserie, châssis et structure",
  "Habitacle, équipements et confort",
  "Réparations antérieures / intervention d'un garage"
 ],
 "PREPARATION": [
  [
   "prep:ordre_de_mission_signe_recu",
   "Ordre de mission signé reçu"
  ],
  [
   "prep:acompte_recu",
   "Acompte reçu"
  ],
  [
   "prep:rendez_vous_confirme_date_heure_lieu_acces_au_vehicule_cles",
   "Rendez-vous confirmé (date, heure, lieu, accès au véhicule, clés)"
  ],
  [
   "prep:parties_adverses_garage_vendeur_convoques_si_contradictoire",
   "Parties adverses / garage / vendeur convoqués (si contradictoire)"
  ],
  [
   "prep:coordonnees_des_intervenants_et_assureurs_relevees",
   "Coordonnées des intervenants et assureurs relevées"
  ],
  [
   "prep:lieu_d_examen_adapte_pont_elevateur_garage_fosse_reserve_si_",
   "Lieu d'examen adapté (pont élévateur, garage, fosse) réservé si besoin"
  ],
  [
   "prep:dossier_relu_avant_la_visite_historique_echanges",
   "Dossier relu avant la visite (historique, échanges)"
  ],
  [
   "prep:materiel_prepare_valise_de_diagnostic_appareil_photo_lampe_e",
   "Matériel préparé (valise de diagnostic, appareil photo, lampe, endoscope, compressiomètre, jauges)"
  ]
 ],
 "DOCUMENTS_COMMUNS": [
  [
   "docs:certificat_d_immatriculation_carte_grise",
   "Certificat d'immatriculation (carte grise)"
  ],
  [
   "docs:facture_d_achat_bon_de_commande_contrat_de_vente",
   "Facture d'achat / bon de commande / contrat de vente"
  ],
  [
   "docs:carnet_d_entretien_et_factures_d_entretien",
   "Carnet d'entretien et factures d'entretien"
  ],
  [
   "docs:factures_des_reparations_concernees_par_le_litige",
   "Factures des réparations concernées par le litige"
  ],
  [
   "docs:proces_verbaux_de_controle_technique",
   "Procès-verbaux de contrôle technique"
  ],
  [
   "docs:annonce_de_vente_du_vehicule_si_achat_d_occasion",
   "Annonce de vente du véhicule (si achat d'occasion)"
  ],
  [
   "docs:courriers_mails_et_mises_en_demeure_echanges",
   "Courriers, mails et mises en demeure échangés"
  ],
  [
   "docs:photos_anterieures_des_desordres",
   "Photos antérieures des désordres"
  ],
  [
   "docs:rapports_d_expertise_ou_diagnostics_anterieurs",
   "Rapports d'expertise ou diagnostics antérieurs"
  ],
  [
   "docs:contrat_d_assurance_et_declaration_de_sinistre_si_sinistre",
   "Contrat d'assurance et déclaration de sinistre (si sinistre)"
  ]
 ],
 "QUESTIONS_COMMUNES": [
  [
   "questions:date_et_kilometrage_d_apparition_des_symptomes",
   "Date et kilométrage d'apparition des symptômes"
  ],
  [
   "questions:circonstances_d_apparition_a_froid_a_chaud_en_charge_a_vites",
   "Circonstances d'apparition (à froid, à chaud, en charge, à vitesse stabilisée…)"
  ],
  [
   "questions:evolution_constatee_depuis_aggravation_intermittence",
   "Évolution constatée depuis (aggravation, intermittence)"
  ],
  [
   "questions:usage_du_vehicule_urbain_autoroute_remorquage_competition",
   "Usage du véhicule (urbain, autoroute, remorquage, compétition)"
  ],
  [
   "questions:interventions_realisees_recemment_et_par_qui",
   "Interventions réalisées récemment et par qui"
  ],
  [
   "questions:voyants_allumes_et_messages_affiches_au_tableau_de_bord",
   "Voyants allumés et messages affichés au tableau de bord"
  ],
  [
   "questions:demarches_deja_engagees_vendeur_garage_constructeur_assureur",
   "Démarches déjà engagées (vendeur, garage, constructeur, assureur, avocat)"
  ],
  [
   "questions:attentes_du_client_vis_a_vis_de_l_expertise",
   "Attentes du client vis-à-vis de l'expertise"
  ]
 ],
 "RELEVES": [
  [
   "releves:kilometrage_releve_au_compteur_photo",
   "Kilométrage relevé au compteur (photo)"
  ],
  [
   "releves:numero_vin_releve_sur_le_vehicule_et_compare_a_la_carte_gris",
   "Numéro VIN relevé sur le véhicule et comparé à la carte grise"
  ],
  [
   "releves:photos_generales_du_vehicule_4_faces",
   "Photos générales du véhicule (4 faces)"
  ],
  [
   "releves:photos_de_detail_de_chaque_desordre_avec_repere_d_echelle",
   "Photos de détail de chaque désordre avec repère d'échelle"
  ],
  [
   "releves:lecture_des_codes_defauts_enregistree_capture_ou_impression",
   "Lecture des codes défauts enregistrée (capture ou impression)"
  ],
  [
   "releves:mesures_relevees_et_notees_pressions_compressions_jeux_epais",
   "Mesures relevées et notées (pressions, compressions, jeux, épaisseurs, niveaux)"
  ],
  [
   "releves:pieces_deposees_conservees_mises_sous_scelle_si_necessaire",
   "Pièces déposées conservées / mises sous scellé si nécessaire"
  ],
  [
   "releves:personnes_presentes_lors_de_l_examen_notees",
   "Personnes présentes lors de l'examen notées"
  ]
 ],
 "CLOTURE": [
  [
   "cloture:dictee_de_l_expertise_realisee",
   "Dictée de l'expertise réalisée"
  ],
  [
   "cloture:transcription_recuperee_telephone_transkriptor",
   "Transcription récupérée (téléphone / Transkriptor)"
  ],
  [
   "cloture:rapport_redige_et_mis_en_forme",
   "Rapport rédigé et mis en forme"
  ],
  [
   "cloture:rapport_relu_et_verifie",
   "Rapport relu et vérifié"
  ],
  [
   "cloture:photos_integrees_au_rapport_allegees_si_besoin",
   "Photos intégrées au rapport (allégées si besoin)"
  ],
  [
   "cloture:rapport_envoye_au_client",
   "Rapport envoyé au client"
  ],
  [
   "cloture:facture_du_solde_envoyee",
   "Facture du solde envoyée"
  ],
  [
   "cloture:solde_paye",
   "Solde payé"
  ],
  [
   "cloture:dossier_cloture",
   "Dossier clôturé"
  ]
 ],
 "BIBLIOTHEQUE": {
  "Identification du véhicule et historique": {
   "controles": [
    [
     "ctrl_identification_du_vehicule_et_historique:concordance_vin_plaque_constructeur_carte_grise",
     "Concordance VIN / plaque constructeur / carte grise"
    ],
    [
     "ctrl_identification_du_vehicule_et_historique:coherence_du_kilometrage_avec_l_historique_factures_controle",
     "Cohérence du kilométrage avec l'historique (factures, contrôles techniques)"
    ],
    [
     "ctrl_identification_du_vehicule_et_historique:campagnes_de_rappel_constructeur_verifiees",
     "Campagnes de rappel constructeur vérifiées"
    ],
    [
     "ctrl_identification_du_vehicule_et_historique:traces_de_reparations_ou_de_remise_en_etat_anterieures",
     "Traces de réparations ou de remise en état antérieures"
    ],
    [
     "ctrl_identification_du_vehicule_et_historique:conformite_des_equipements_a_la_version_d_origine",
     "Conformité des équipements à la version d'origine"
    ]
   ],
   "documents": [
    [
     "docs:historique_d_entretien_constructeur_reseau",
     "Historique d'entretien constructeur (réseau)"
    ],
    [
     "docs:historique_du_vehicule_histovec",
     "Historique du véhicule (Histovec)"
    ]
   ],
   "questions": [
    [
     "questions:nombre_de_proprietaires_precedents",
     "Nombre de propriétaires précédents"
    ],
    [
     "questions:date_d_achat_et_kilometrage_a_l_achat",
     "Date d'achat et kilométrage à l'achat"
    ]
   ]
  },
  "Moteur et périphériques": {
   "controles": [
    [
     "ctrl_moteur_et_peripheriques:bruits_anormaux_identifies_cognement_cliquetis_sifflement",
     "Bruits anormaux identifiés (cognement, cliquetis, sifflement)"
    ],
    [
     "ctrl_moteur_et_peripheriques:fuites_d_huile_de_liquide_de_refroidissement_ou_de_carburant",
     "Fuites d'huile, de liquide de refroidissement ou de carburant recherchées"
    ],
    [
     "ctrl_moteur_et_peripheriques:fumees_a_l_echappement_observees_couleur_regime",
     "Fumées à l'échappement observées (couleur, régime)"
    ],
    [
     "ctrl_moteur_et_peripheriques:compression_etancheite_des_cylindres_mesuree",
     "Compression / étanchéité des cylindres mesurée"
    ],
    [
     "ctrl_moteur_et_peripheriques:supports_moteur_controles",
     "Supports moteur contrôlés"
    ],
    [
     "ctrl_moteur_et_peripheriques:accessoires_et_courroie_d_accessoires_controles",
     "Accessoires et courroie d'accessoires contrôlés"
    ],
    [
     "ctrl_moteur_et_peripheriques:essai_routier_realise_comportement_puissance_a_coups",
     "Essai routier réalisé (comportement, puissance, à-coups)"
    ]
   ],
   "documents": [
    [
     "docs:factures_de_pieces_moteur_remplacees",
     "Factures de pièces moteur remplacées"
    ]
   ],
   "questions": [
    [
     "questions:consommation_d_huile_constatee_par_le_client",
     "Consommation d'huile constatée par le client"
    ],
    [
     "questions:perte_de_puissance_ou_mode_degrade_rencontre",
     "Perte de puissance ou mode dégradé rencontré"
    ]
   ]
  },
  "Distribution": {
   "controles": [
    [
     "ctrl_distribution:type_de_distribution_identifie_courroie_chaine",
     "Type de distribution identifié (courroie, chaîne)"
    ],
    [
     "ctrl_distribution:etat_de_la_courroie_chaine_galets_et_tendeur",
     "État de la courroie / chaîne, galets et tendeur"
    ],
    [
     "ctrl_distribution:date_et_kilometrage_du_dernier_remplacement_verifies",
     "Date et kilométrage du dernier remplacement vérifiés"
    ],
    [
     "ctrl_distribution:calage_de_la_distribution_controle",
     "Calage de la distribution contrôlé"
    ],
    [
     "ctrl_distribution:recherche_de_contact_soupapes_pistons_en_cas_de_rupture",
     "Recherche de contact soupapes / pistons en cas de rupture"
    ]
   ],
   "documents": [
    [
     "docs:facture_du_dernier_kit_de_distribution",
     "Facture du dernier kit de distribution"
    ],
    [
     "docs:preconisations_constructeur_de_remplacement_km_annees",
     "Préconisations constructeur de remplacement (km / années)"
    ]
   ],
   "questions": [
    [
     "questions:bruit_de_distribution_avant_l_avarie",
     "Bruit de distribution avant l'avarie"
    ]
   ]
  },
  "Lubrification et refroidissement": {
   "controles": [
    [
     "ctrl_lubrification_et_refroidissement:niveau_et_aspect_de_l_huile_viscosite_emulsion_particules",
     "Niveau et aspect de l'huile (viscosité, émulsion, particules)"
    ],
    [
     "ctrl_lubrification_et_refroidissement:pression_d_huile_controlee",
     "Pression d'huile contrôlée"
    ],
    [
     "ctrl_lubrification_et_refroidissement:niveau_et_aspect_du_liquide_de_refroidissement",
     "Niveau et aspect du liquide de refroidissement"
    ],
    [
     "ctrl_lubrification_et_refroidissement:recherche_de_melange_huile_liquide_de_refroidissement",
     "Recherche de mélange huile / liquide de refroidissement"
    ],
    [
     "ctrl_lubrification_et_refroidissement:radiateur_durites_pompe_a_eau_et_thermostat_controles",
     "Radiateur, durites, pompe à eau et thermostat contrôlés"
    ],
    [
     "ctrl_lubrification_et_refroidissement:fonctionnement_du_motoventilateur",
     "Fonctionnement du motoventilateur"
    ],
    [
     "ctrl_lubrification_et_refroidissement:test_de_presence_de_gaz_d_echappement_dans_le_circuit_de_ref",
     "Test de présence de gaz d'échappement dans le circuit de refroidissement"
    ]
   ],
   "documents": [
    [
     "docs:factures_de_vidange_huile_utilisee_reference_et_norme",
     "Factures de vidange (huile utilisée, référence et norme)"
    ]
   ],
   "questions": [
    [
     "questions:surchauffe_ou_alerte_de_temperature_constatee",
     "Surchauffe ou alerte de température constatée"
    ],
    [
     "questions:appoints_d_huile_ou_de_liquide_effectues",
     "Appoints d'huile ou de liquide effectués"
    ]
   ]
  },
  "Alimentation, injection et suralimentation": {
   "controles": [
    [
     "ctrl_alimentation_injection_et_suralimentation:injecteurs_controles_debit_de_retour_fuites",
     "Injecteurs contrôlés (débit de retour, fuites)"
    ],
    [
     "ctrl_alimentation_injection_et_suralimentation:pompe_haute_pression_et_rampe_controlees",
     "Pompe haute pression et rampe contrôlées"
    ],
    [
     "ctrl_alimentation_injection_et_suralimentation:turbocompresseur_jeu_axial_radial_fuites_d_huile_etat_des_au",
     "Turbocompresseur : jeu axial / radial, fuites d'huile, état des aubes"
    ],
    [
     "ctrl_alimentation_injection_et_suralimentation:circuit_d_admission_et_intercooler_fuites_huile",
     "Circuit d'admission et intercooler (fuites, huile)"
    ],
    [
     "ctrl_alimentation_injection_et_suralimentation:qualite_du_carburant_verifiee_erreur_de_carburant_pollution",
     "Qualité du carburant vérifiée (erreur de carburant, pollution)"
    ],
    [
     "ctrl_alimentation_injection_et_suralimentation:filtres_a_air_et_a_carburant_controles",
     "Filtres à air et à carburant contrôlés"
    ]
   ],
   "documents": [
    [
     "docs:factures_d_injecteurs_ou_de_turbo_remplaces",
     "Factures d'injecteurs ou de turbo remplacés"
    ]
   ],
   "questions": [
    [
     "questions:erreur_de_carburant_possible",
     "Erreur de carburant possible"
    ],
    [
     "questions:reprogrammation_ou_boitier_additionnel_installe",
     "Reprogrammation ou boîtier additionnel installé"
    ]
   ]
  },
  "Dépollution et échappement": {
   "controles": [
    [
     "ctrl_depollution_et_echappement:fap_pression_differentielle_colmatage_niveau_d_additif",
     "FAP : pression différentielle, colmatage, niveau d'additif"
    ],
    [
     "ctrl_depollution_et_echappement:vanne_egr_et_circuit_egr_encrassement_fonctionnement",
     "Vanne EGR et circuit EGR (encrassement, fonctionnement)"
    ],
    [
     "ctrl_depollution_et_echappement:systeme_scr_adblue_niveau_defauts_cristallisation",
     "Système SCR / AdBlue (niveau, défauts, cristallisation)"
    ],
    [
     "ctrl_depollution_et_echappement:catalyseur_et_sondes_lambda_nox_controles",
     "Catalyseur et sondes lambda / NOx contrôlés"
    ],
    [
     "ctrl_depollution_et_echappement:ligne_d_echappement_fuites_fixations_pieces_supprimees",
     "Ligne d'échappement (fuites, fixations, pièces supprimées)"
    ],
    [
     "ctrl_depollution_et_echappement:recherche_d_une_suppression_ou_d_une_desactivation_des_syste",
     "Recherche d'une suppression ou d'une désactivation des systèmes antipollution"
    ]
   ],
   "documents": [
    [
     "docs:historique_des_regenerations_nettoyages_fap",
     "Historique des régénérations / nettoyages FAP"
    ]
   ],
   "questions": [
    [
     "questions:usage_majoritairement_urbain_ou_trajets_courts",
     "Usage majoritairement urbain ou trajets courts"
    ]
   ]
  },
  "Embrayage et boîte de vitesses": {
   "controles": [
    [
     "ctrl_embrayage_et_boite_de_vitesses:patinage_ou_broutement_de_l_embrayage",
     "Patinage ou broutement de l'embrayage"
    ],
    [
     "ctrl_embrayage_et_boite_de_vitesses:course_et_point_de_patinage_de_la_pedale",
     "Course et point de patinage de la pédale"
    ],
    [
     "ctrl_embrayage_et_boite_de_vitesses:volant_moteur_bi_masse_controle_jeu_bruit",
     "Volant moteur bi-masse contrôlé (jeu, bruit)"
    ],
    [
     "ctrl_embrayage_et_boite_de_vitesses:passage_des_rapports_craquements_accrochages",
     "Passage des rapports (craquements, accrochages)"
    ],
    [
     "ctrl_embrayage_et_boite_de_vitesses:boite_automatique_passages_a_coups_niveau_et_etat_de_l_huile",
     "Boîte automatique : passages, à-coups, niveau et état de l'huile"
    ],
    [
     "ctrl_embrayage_et_boite_de_vitesses:fuites_d_huile_de_boite_recherchees",
     "Fuites d'huile de boîte recherchées"
    ]
   ],
   "documents": [
    [
     "docs:facture_du_kit_d_embrayage_de_la_vidange_de_boite",
     "Facture du kit d'embrayage / de la vidange de boîte"
    ]
   ],
   "questions": [
    [
     "questions:usage_de_remorquage_ou_de_charges_lourdes",
     "Usage de remorquage ou de charges lourdes"
    ]
   ]
  },
  "Transmission et ponts": {
   "controles": [
    [
     "ctrl_transmission_et_ponts:cardans_et_soufflets_controles",
     "Cardans et soufflets contrôlés"
    ],
    [
     "ctrl_transmission_et_ponts:arbres_de_transmission_et_paliers_controles",
     "Arbres de transmission et paliers contrôlés"
    ],
    [
     "ctrl_transmission_et_ponts:differentiel_pont_bruits_jeux_fuites",
     "Différentiel / pont : bruits, jeux, fuites"
    ],
    [
     "ctrl_transmission_et_ponts:systeme_4x4_transfert_controle_si_equipe",
     "Système 4x4 / transfert contrôlé (si équipé)"
    ]
   ],
   "documents": [],
   "questions": [
    [
     "questions:bruits_en_virage_ou_a_l_acceleration",
     "Bruits en virage ou à l'accélération"
    ]
   ]
  },
  "Freinage": {
   "controles": [
    [
     "ctrl_freinage:epaisseur_des_disques_et_des_plaquettes_etat_des_tambours",
     "Épaisseur des disques et des plaquettes / état des tambours"
    ],
    [
     "ctrl_freinage:liquide_de_frein_niveau_et_taux_d_humidite",
     "Liquide de frein : niveau et taux d'humidité"
    ],
    [
     "ctrl_freinage:fuites_et_etat_des_flexibles_et_canalisations",
     "Fuites et état des flexibles et canalisations"
    ],
    [
     "ctrl_freinage:etriers_coulissement_grippage",
     "Étriers : coulissement, grippage"
    ],
    [
     "ctrl_freinage:frein_de_stationnement_controle",
     "Frein de stationnement contrôlé"
    ],
    [
     "ctrl_freinage:abs_esp_codes_defauts_et_capteurs",
     "ABS / ESP : codes défauts et capteurs"
    ],
    [
     "ctrl_freinage:efficacite_et_desequilibre_mesures_banc_si_possible",
     "Efficacité et déséquilibre mesurés (banc) si possible"
    ]
   ],
   "documents": [
    [
     "docs:factures_des_dernieres_interventions_sur_les_freins",
     "Factures des dernières interventions sur les freins"
    ]
   ],
   "questions": [
    [
     "questions:bruits_vibrations_ou_tirage_au_freinage",
     "Bruits, vibrations ou tirage au freinage"
    ]
   ]
  },
  "Direction, suspension et trains roulants": {
   "controles": [
    [
     "ctrl_direction_suspension_et_trains_roulants:jeux_de_direction_rotules_cremaillere_biellettes",
     "Jeux de direction (rotules, crémaillère, biellettes)"
    ],
    [
     "ctrl_direction_suspension_et_trains_roulants:amortisseurs_ressorts_et_coupelles_controles",
     "Amortisseurs, ressorts et coupelles contrôlés"
    ],
    [
     "ctrl_direction_suspension_et_trains_roulants:silentblocs_et_triangles_controles",
     "Silentblocs et triangles contrôlés"
    ],
    [
     "ctrl_direction_suspension_et_trains_roulants:geometrie_parallelisme_usure_des_pneus_controle_si_possible",
     "Géométrie / parallélisme (usure des pneus, contrôle si possible)"
    ],
    [
     "ctrl_direction_suspension_et_trains_roulants:direction_assistee_fuites_bruits_defauts",
     "Direction assistée : fuites, bruits, défauts"
    ]
   ],
   "documents": [
    [
     "docs:rapport_de_geometrie_anterieur",
     "Rapport de géométrie antérieur"
    ]
   ],
   "questions": [
    [
     "questions:choc_recent_trottoir_nid_de_poule",
     "Choc récent (trottoir, nid-de-poule)"
    ]
   ]
  },
  "Pneumatiques et roues": {
   "controles": [
    [
     "ctrl_pneumatiques_et_roues:profondeur_des_sculptures_relevee_sur_chaque_pneu",
     "Profondeur des sculptures relevée sur chaque pneu"
    ],
    [
     "ctrl_pneumatiques_et_roues:usure_anormale_bord_interieur_irreguliere",
     "Usure anormale (bord intérieur, irrégulière)"
    ],
    [
     "ctrl_pneumatiques_et_roues:hernies_coupures_flancs_abimes",
     "Hernies, coupures, flancs abîmés"
    ],
    [
     "ctrl_pneumatiques_et_roues:dimensions_indices_de_charge_et_de_vitesse_conformes",
     "Dimensions, indices de charge et de vitesse conformes"
    ],
    [
     "ctrl_pneumatiques_et_roues:pression_des_pneus_et_capteurs_tpms",
     "Pression des pneus et capteurs TPMS"
    ],
    [
     "ctrl_pneumatiques_et_roues:etat_des_jantes_et_serrage_des_roues",
     "État des jantes et serrage des roues"
    ]
   ],
   "documents": [
    [
     "docs:facture_des_pneumatiques",
     "Facture des pneumatiques"
    ]
   ],
   "questions": []
  },
  "Électricité, électronique et diagnostic": {
   "controles": [
    [
     "ctrl_electricite_electronique_et_diagnostic:lecture_complete_des_codes_defauts_de_tous_les_calculateurs",
     "Lecture complète des codes défauts de tous les calculateurs"
    ],
    [
     "ctrl_electricite_electronique_et_diagnostic:parametres_en_temps_reel_releves",
     "Paramètres en temps réel relevés"
    ],
    [
     "ctrl_electricite_electronique_et_diagnostic:batterie_12_v_tension_etat_charge",
     "Batterie 12 V : tension, état, charge"
    ],
    [
     "ctrl_electricite_electronique_et_diagnostic:alternateur_et_demarreur_controles",
     "Alternateur et démarreur contrôlés"
    ],
    [
     "ctrl_electricite_electronique_et_diagnostic:faisceaux_et_connecteurs_oxydation_rongeurs_reparations",
     "Faisceaux et connecteurs (oxydation, rongeurs, réparations)"
    ],
    [
     "ctrl_electricite_electronique_et_diagnostic:mises_a_jour_logicielles_reprogrammation_verifiees",
     "Mises à jour logicielles / reprogrammation vérifiées"
    ],
    [
     "ctrl_electricite_electronique_et_diagnostic:eclairage_et_signalisation_controles",
     "Éclairage et signalisation contrôlés"
    ]
   ],
   "documents": [
    [
     "docs:rapports_de_diagnostic_anterieurs",
     "Rapports de diagnostic antérieurs"
    ]
   ],
   "questions": [
    [
     "questions:pannes_intermittentes_et_circonstances",
     "Pannes intermittentes et circonstances"
    ]
   ]
  },
  "Chaîne de traction électrique / hybride": {
   "controles": [
    [
     "ctrl_chaine_de_traction_electrique_hybride:consignation_du_circuit_haute_tension_avant_intervention",
     "Consignation du circuit haute tension avant intervention"
    ],
    [
     "ctrl_chaine_de_traction_electrique_hybride:etat_de_sante_de_la_batterie_de_traction_soh_releve",
     "État de santé de la batterie de traction (SOH) relevé"
    ],
    [
     "ctrl_chaine_de_traction_electrique_hybride:isolement_du_circuit_haute_tension_controle",
     "Isolement du circuit haute tension contrôlé"
    ],
    [
     "ctrl_chaine_de_traction_electrique_hybride:recharge_cable_prise_borne_et_chargeur_embarque",
     "Recharge : câble, prise, borne et chargeur embarqué"
    ],
    [
     "ctrl_chaine_de_traction_electrique_hybride:codes_defauts_de_la_chaine_de_traction_releves",
     "Codes défauts de la chaîne de traction relevés"
    ],
    [
     "ctrl_chaine_de_traction_electrique_hybride:systeme_de_refroidissement_de_la_batterie_controle",
     "Système de refroidissement de la batterie contrôlé"
    ]
   ],
   "documents": [
    [
     "docs:certificat_d_etat_de_la_batterie",
     "Certificat d'état de la batterie"
    ],
    [
     "docs:contrat_de_location_de_batterie_si_applicable",
     "Contrat de location de batterie (si applicable)"
    ]
   ],
   "questions": [
    [
     "questions:perte_d_autonomie_constatee",
     "Perte d'autonomie constatée"
    ],
    [
     "questions:habitudes_de_recharge_rapide_domestique",
     "Habitudes de recharge (rapide, domestique)"
    ]
   ]
  },
  "Carrosserie, châssis et structure": {
   "controles": [
    [
     "ctrl_carrosserie_chassis_et_structure:traces_de_choc_ou_de_reparation_de_carrosserie",
     "Traces de choc ou de réparation de carrosserie"
    ],
    [
     "ctrl_carrosserie_chassis_et_structure:jeux_d_ouvrants_et_alignement_des_elements",
     "Jeux d'ouvrants et alignement des éléments"
    ],
    [
     "ctrl_carrosserie_chassis_et_structure:corrosion_bas_de_caisse_longerons_berceaux",
     "Corrosion (bas de caisse, longerons, berceaux)"
    ],
    [
     "ctrl_carrosserie_chassis_et_structure:soubassement_et_chassis_deformations_soudures",
     "Soubassement et châssis (déformations, soudures)"
    ],
    [
     "ctrl_carrosserie_chassis_et_structure:epaisseur_de_peinture_mesuree_recherche_de_reparations",
     "Épaisseur de peinture mesurée (recherche de réparations)"
    ],
    [
     "ctrl_carrosserie_chassis_et_structure:infiltrations_d_eau_dans_l_habitacle_ou_le_coffre",
     "Infiltrations d'eau dans l'habitacle ou le coffre"
    ]
   ],
   "documents": [
    [
     "docs:rapport_d_expertise_de_sinistre_anterieur",
     "Rapport d'expertise de sinistre antérieur"
    ]
   ],
   "questions": [
    [
     "questions:accident_ou_sinistre_connu",
     "Accident ou sinistre connu"
    ]
   ]
  },
  "Habitacle, équipements et confort": {
   "controles": [
    [
     "ctrl_habitacle_equipements_et_confort:fonctionnement_de_la_climatisation_du_chauffage",
     "Fonctionnement de la climatisation / du chauffage"
    ],
    [
     "ctrl_habitacle_equipements_et_confort:equipements_electriques_vitres_sieges_multimedia",
     "Équipements électriques (vitres, sièges, multimédia)"
    ],
    [
     "ctrl_habitacle_equipements_et_confort:airbags_et_ceintures_voyant_etat",
     "Airbags et ceintures (voyant, état)"
    ],
    [
     "ctrl_habitacle_equipements_et_confort:usure_de_l_habitacle_coherente_avec_le_kilometrage",
     "Usure de l'habitacle cohérente avec le kilométrage"
    ]
   ],
   "documents": [],
   "questions": []
  },
  "Réparations antérieures / intervention d'un garage": {
   "controles": [
    [
     "ctrl_reparations_anterieures_intervention_d_un_garage:conformite_de_la_reparation_aux_preconisations_constructeur",
     "Conformité de la réparation aux préconisations constructeur"
    ],
    [
     "ctrl_reparations_anterieures_intervention_d_un_garage:pieces_posees_origine_qualite_references",
     "Pièces posées : origine, qualité, références"
    ],
    [
     "ctrl_reparations_anterieures_intervention_d_un_garage:qualite_du_remontage_serrages_joints_couples",
     "Qualité du remontage (serrages, joints, couples)"
    ],
    [
     "ctrl_reparations_anterieures_intervention_d_un_garage:lien_entre_l_intervention_et_le_desordre_constate",
     "Lien entre l'intervention et le désordre constaté"
    ]
   ],
   "documents": [
    [
     "docs:ordre_de_reparation_et_devis_du_garage",
     "Ordre de réparation et devis du garage"
    ],
    [
     "docs:factures_detaillees_de_la_reparation",
     "Factures détaillées de la réparation"
    ],
    [
     "docs:pieces_remplacees_conservees_par_le_garage",
     "Pièces remplacées conservées par le garage"
    ]
   ],
   "questions": [
    [
     "questions:delai_entre_l_intervention_et_l_apparition_du_desordre",
     "Délai entre l'intervention et l'apparition du désordre"
    ],
    [
     "questions:echanges_avec_le_garage_depuis",
     "Échanges avec le garage depuis"
    ]
   ]
  }
 },
 "STATUTS": [
  "En attente",
  "OM envoyé",
  "Acompte payé",
  "Expertise réalisée",
  "Rapport envoyé",
  "Dossier payé",
  "Clôturé",
  "Annulé"
 ],
 "DEVIS": [
  [
   "calc_type_client",
   "Type de client",
   {
    "Particuliers (×1.0)": 1.0,
    "Grands Groupes (×1.0)": 1.0,
    "Loueurs de véhicules (×1.0)": 1.0,
    "Collectivités (×1.0)": 1.0,
    "Entreprises de transport (×1.0)": 1.0,
    "Assureurs (×1.0)": 1.0,
    "Avocats (×1.0)": 1.0,
    "Concessionnaires (×1.0)": 1.0
   }
  ],
  [
   "calc_taille",
   "Catégorie du véhicule",
   {
    "Auto": 100,
    "Moto": 75,
    "Deux-roues électriques": 90,
    "Véhicules électriques / hybrides": 150,
    "Utilitaires / Poids lourds": 300,
    "Bateaux / Nautiques": 250,
    "Collection / Compétition": 350
   }
  ],
  [
   "calc_valeur",
   "Valeur du véhicule",
   {
    "Citadine / petite voiture (×0.85)": 0.85,
    "Compacte / Routière (×0.95)": 0.95,
    "SUV / Monospace (×1.0)": 1.0,
    "Utilitaire léger (×0.95)": 0.95,
    "Premium (×1.1)": 1.1,
    "Luxe / Supercar (×1.5)": 1.5,
    "Ancien / Collection (×1.5)": 1.5,
    "Camping-car (×1.2)": 1.2
   }
  ],
  [
   "calc_type_exp",
   "Type d'analyse",
   {
    "Avis technique simple (+120 €)": 120,
    "Analyse générale (+350 €)": 350,
    "Analyse approfondie (+750 €)": 750,
    "Analyse post-accident (+450 €)": 450,
    "Analyse véhicule spé (+600 €)": 600,
    "Assistance judiciaire (+1200 €)": 1200
   }
  ],
  [
   "calc_contra",
   "Procédure",
   {
    "Non contradictoire (+0 €)": 0,
    "Contradictoire (+100 €)": 100,
    "Arbitrage (+200 €)": 200,
    "Judiciaire (+250 €)": 250
   }
  ],
  [
   "calc_km",
   "Frais kilométriques",
   {
    "Moins de 50 km (+0 €)": 0,
    "50 à 100 km (+25 €)": 25,
    "100 à 200 km (+55 €)": 55,
    "Plus de 200 km (+90 €)": 90
   }
  ],
  [
   "calc_interv",
   "Nombre d'interventions",
   {
    "1 intervention (+0 €)": 0,
    "2 interventions (+350 €)": 350,
    "3 interventions (+700 €)": 700
   }
  ]
 ]
};
