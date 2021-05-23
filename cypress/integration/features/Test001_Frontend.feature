Feature: Google Homepage Search

    Background: 
        Given Me encuentro en la página principal de "Google"
    
    Scenario: El usuario puede buscar mediante “Google Search”
        When Tipeo "The name of the wind" dentro del campo de búsqueda
        And Clickeo en el boton "Google Search"
        Then Me dirige a la página de resultados
        And Busco el resultado "The Books - Patrick Rothfuss" y accedo al sitio
        And Me dirige a la página de "Patrick Rothfuss - The Books"

    Scenario: Usuario puede buscar mediante sugerencias
        When Tipeo "The name of the w" dentro del campo de búsqueda
        And Clickeo en la primer opción sugerida
        Then Me dirige a la página de resultados
        And Busco el resultado "The Books - Patrick Rothfuss" y accedo al sitio
        And Me dirige a la página de "Patrick Rothfuss - The Books"
