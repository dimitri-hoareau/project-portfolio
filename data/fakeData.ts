export interface Project {
    id: number;
    name: string;
    short_description: string;
    long_description: string;
    tools: string[];
    link: string;
    picture: string;
  }
  
  export const projects: Project[] = [
    {
        "id": 1,
        "name": "Site vitrine Weup learning",
        "short_description": "site vitrine en wordpress pour l’entreprise de e-learning weuplearning.",
        "long_description": "site vitrine réalisé en wordpress, avec intégration de fonctionnalités customs en javascript.",
        "tools": [
            "wordpress",
            "css",
            "javascript"
        ],
        "link": "https://weuplearning.com/",
        "picture": "http://localhost:8000/media/project_pictures/weup.png"
    },
    {
        "id": 2,
        "name": "orelie-bim",
        "short_description": "outil de rédaction en ligne de cahier des charges",
        "long_description": "basé sur openedx, mais pas construit comme une plateforme de e learning classique. ensemble de documents à destination des utilisateurs, integration forum, espace adminstrations en react permmettant inscription , de  liste d’user, modifications des customs fields..;",
        "tools": [
            "openedx",
            "django",
            "react"
        ],
        "link": "https://www.orelie-bim.fr/",
        "picture": "http://localhost:8000/media/project_pictures/orelie.png"
    }
]