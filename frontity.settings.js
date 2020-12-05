const settings = {
  "name": "danieldvos",
  "state": {
    "frontity": {
      "url": "https://www.danieldvos.com",
      "title": "Daniel D. Vos",
      "description": "To challenge, encourage, and equip entrepreneurial leaders"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Sample Page",
              "/sample-page/"
            ],            
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "https://wp.danieldvos.com/wp-json",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
