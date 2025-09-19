# 📖 Project omschrijving

De opdracht was het ontwerpen en ontwikkelen van een digitaal visitekaartje.
Dit project is gebouwd met het SvelteKit framework en maakt gebruik van de Directus API om dynamisch data te renderen via API-endpoints.

Het visitekaartje is designed in Figma en is vervolgens live deployed via Netlify

# 🎨 Ontwerpkeuzes

In de ontwerpfase heb ik twee schetsen gemaakt. Mijn eerste idee was een masonry grid layout met mijn naam erboven.  
Elke card zou vervolgens informatie over mij bevatten. Persoonlijk houd ik van minimalistische designs.

<img width="800" height="500" alt="Image" src="https://github.com/user-attachments/assets/147d40d7-65f1-4e30-b5ad-9184fa40b08f" />

Ik had het design al bijna helemaal uitgewerkt in code, maar was er niet helemaal tevreden mee.  
Daarom heb ik het design aangepast en uiteindelijk kwam ik op het volgende resultaat:

<img width="428" height="259" alt="Image" src="https://github.com/user-attachments/assets/c0b59a78-76d4-48b9-9c8c-84c5a5262f19" />

## Fonts

De font die is gebruikt voor de nummers op de card zijn een speciaal “creditcard font” waardoor het daadwerkelijk lijkt op de echte nummers op een creditcard.

<img width="449" height="80" alt="Image" src="https://github.com/user-attachments/assets/91153caa-c001-4e17-973a-79b1f0425933" />

# ⚙️ Technische kenmerken

- **Responsive design**  
  De kaart schaalt goed mee met de viewport door **Flexbox** en `clamp()` voor font-sizes.  

- **Toegankelijkheid (Accessibility)**  
  De card is volledig bruikbaar met **toetsenbord**, **screenreader**, **muis** en **touchscreen**.  

- **Performance optimalisatie**  
  Afbeeldingen zijn geoptimaliseerd als **SVG** en **WebP** voor snelle laadtijden. Op mobile wat minder door de LCP.  

- **Shine animatie**  
  De card heeft een subtiele **shine effect animatie**.

- **shake animatie**  
  De name op de card heeft een simpele shake animatie zodat het voor de gebruiker duidelijk is dat je erop kanklikken.

- **Interactief element**
  Het enige interactieve element op de kaart is je naam. Wanneer iemand erop klikt, wordt hij direct doorverwezen naar mijn GitHub-pagina.
  Het werkt zowel met muis, toetsenbord als touchscreen.

# 🪩 Animatie

Als animatie heb ik bedacht om een shine animatie op de card te verwerken doormiddel van een gradient die door een keyframe animatie infinite over de card beweegt.

Ook heeft het interatief element een simpele shake animatie om duidelijk te maken dat die interactief is.

<video width="449" height="500" alt="animatie" src="https://github.com/user-attachments/assets/fb64d521-c15c-4fd9-ac5e-4cb88ff5b0b9" />

# 🖥️ Installatie

Project lokaal installeren

**Fork de repository**
Ga naar de [repository pagina](https://github.com/Ravirkt/your-tribe-for-life-profile-card) en klik op de Fork knop in de rechterbovenhoek om een kopie van de repository naar je eigen GitHub account te maken.

**Clone de repository**
Clone je geforkte repository naar je lokale computer door het volgende commando uit te voeren in de terminal: git clone https://github.com/Ravirkt/your-tribe-for-life-profile-card.git

**Navigeer naar folder**
Navigeer naar de folder 'visitekaart' door in de terminal 'cd visitekaart' in te voeren druk vervolgens op enter.

**Installeer de packages**
Voer in de terminal de command npm install uit om de packages uit de package.JSON te installeren.

**Start de server**
Voer in de terminal de command 'npm run dev' of 'npm run dev -- --open' om het venster automatischc te openen.

