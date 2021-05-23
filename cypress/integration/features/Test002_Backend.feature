Feature: Api cervecería

    Scenario: Varificar los datos resultantes de la consulta
        Given El siguiente endpoint "https://api.openbrewerydb.org/breweries/"
        And Agrego parametros "autocomplete?query=lagunitas"
        When Ejecuto el metodo "GET"
        And Del resultado tomar el ID del key "name" -> "Lagunitas Brewing Co"
        And Obtener el detalle de la cervecería con key "state" -> "California"
        Then Valido los datos resultantes