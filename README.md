# Review Apps

Ce sujet de "TP" a pour but de vous familiariser avec les Review Apps, qui permettent de faciliter les merge requests en créant automatiquement un environnement de tests pour vérifier le code allant être fusionné. 
 
Ceci permet de tester les nouvelles fonctionnalités, avant de valider la fusion (et éventuellement de tester cette fusion dans un environnement de *staging*). 

On notera que la pratique associée aux Review Apps peut être implémentée sur d'autres utilitaires et via d'autres méthodes. Les Review Apps Gitlab offrent simplement un cadre de travail intégré à la plateforme de gestion de contrôle. 

Vous travaillerez en groupe de 3-4 (vos groupes de projet A52).


# Avant de démarrer
- Renseignez-vous sur les _environments_ Gitlab ainsi que la fonctionnalité des _pages_. 
- Faites un *fork* de ce dépôt Git, et observez l'application qu'il contient. 
- Ajouter aux runners du projet une de vos machines

# Correction du code
Prenez 15-20 minutes afin d'améliorer le site en question. Les changements peuvent être graphiques, des corrections de bugs, ajouts de fonctionnalités... 

Vous vous séparerez pour celà en deux sous-groupes.

Chaque sous-groupe travaillera sur une nouvelle branche, que vous ne fusionnerez pas (encore) à la branche main.

# Création dynamique d'un environnement de review
 
 En groupe, cherchez comment ajouter un fichier _.gitlab-ci.yml_ mettant en place la création d'un Review App lors d'une merge request, permettant la création d'un environnement de review dynamiquement. 

Cet environnement doit être créé uniquement lors d'une merge request, et doit être unique pour chaque merge request. 

Vous déploierez la Review App sur le domaine _pages_ associé à votre projet. Pour vous aider, sachez que les fichiers mis dans un artefact "public/" par votre CI **lors d'une merge request** seront déployés à l'adresse `https://${CI_PROJECT_NAMESPACE}.pages.unistra.fr/-/${CI_PROJECT_NAME}/-/jobs/${CI_JOB_ID}/artifacts/public/index.html`.

Une fois que votre fichier _.gitlab-ci.yml_  semble fonctionnel, veillez à ce qu'il soit sur les deux branches créées précédemment, et faites une demande de merge request.

# Testez le code 

Vérifez si votre code est fonctionnel à l'aide de la Review App associée à la merge request qui a été déployée automatiquement par votre gitlab-ci.

Chaque sous-groupe vérifiera le code programmer par l'autre sous-groupe.


# Gérer proprement la Review App

Acceptez la merge request. Assurez-vous que la Review App et l'environnement associé sont bien détruits une fois que la merge request est acceptée. Si besoin, ajoutez les commandes nécessaires dans votre fichier de CI pour automatiser la destruction de l'environnement. 

# Vers le déploiement continu 
 Modifiez votre fichier de CI pour que, lors d'un push sur la branche _main_, votre application soit déployée automatiquement sur l'URL _pages_ du projet (https://[USER].pages.unistra.fr/[PROJECTNAME]/).
Vous veillerez à associer ce déploiement à un environnement appelé _production_, et vérifierez que cet environnement est bien associé au projet.


# Final run

Pour vérifier que votre Review App et votre système de déploiement continue fonctionnent, effectuez le test suivant : 
- Ouvrez une nouvelle branche et effectuez une modification simple, mais visible (e.g., changez le titre de la page) 
- Faites un Merge Request, et vérifiez que votre Review App montre bien la modification apportée, mais que l'environnement de production reste intouché. 
- Acceptez la fusion. Vérifiez que l'environnement est détruit, et que votre environnement _production_ comporte bien la nouvelle modification suite à l'acception de la fusion.  
