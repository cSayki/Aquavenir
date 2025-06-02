function afficherRegion(nomRegion) {
  const infoDiv = document.getElementById('info-region');

  const textes = {
    'Hauts-de-France': 'Lac du Val Joly (Avesnois) : Le plus grand lac artificiel de la région (180 ha), parfait pour la pêche en famille dans un cadre forestier. <br /> Étangs d\'Onnaing : Situés près de Valenciennes, ces étangs fédéraux offrent des parcours accessibles pour tous les niveaux.',

    'Île-de-France': 'Étang de Saint-Quentin (Yvelines) : Plan d\'eau de 1,5 km², propice à la pêche aux carnassiers.<br />La Seine à Paris : Pêche urbaine au pied des monuments historiques.',

    'Grand Est': 'Étang de Réchicourt-le-Château (Moselle) : 39 ha pour la pêche au coup, à la mouche ou au lancer, avec des zones variées.<br /> Lac de Pierre-Percée (Meurthe-et-Moselle) : Spot emblématique pour les carnassiers et la truite.',

    'Centre-Val de Loire': 'Lac des Bretonnières (Joué-lès-Tours) : Riche en brochets, sandres et truites.<br /> Viviers du Moulin de Langeais : Étang de pisciculture pour la pêche à la truite.',

    'Nouvelle-Aquitaine': 'Lac de Vassivière (Limousin) : Réputé pour ses carnassiers, notamment les brochets dépassant le mètre. <br /> Rivière Le Ciron (Gironde) : Cours d\'eau accueillant truites, anguilles et carnassiers.',

    'PACA': 'Lac de Serre-Ponçon : L’un des plus grands lacs artificiels d’Europe, idéal pour la pêche. <br/> Lac de Sainte-Croix : Eaux claires propices à la pêche aux carnassiers.',

    'Occitanie': 'Lac de la Ganguise (Aude) : 500 ha avec une forêt immergée, habitat idéal pour brochets et sandres. <br/> Parc Saint Bertrand (Quillan) : Parcours labellisé "Famille", accessible toute l’année.',

    'Corse': 'Lac de Tolla : Situé près d’Ajaccio, ce lac est réputé pour la pêche aux carnassiers. <br/> Lac de Codole : Plan d’eau apprécié des pêcheurs locaux.',

    'Auvergne-Rhône-Alpes': 'Lac du Bourget (Savoie) : Plus grand lac naturel de France, riche en poissons. <br/> Lac de Saint-Étienne-Cantalès (Cantal) : 550 ha au cœur de la nature, idéal pour la pêche.',

    'Bourgogne-Franche-Comté': 'Lac de Saint-Agnan (Morvan) : Spot prisé pour la pêche à la mouche. <br/> Réservoirs de l’Éphémère de Bourgogne : Quatre plans d’eau dédiés à la pêche à la mouche en No Kill.',

    'Bretagne': 'Lac de Guerlédan : Plus grand lac de Bretagne, riche en brochets et perches. <br/> Étangs de Kerguéhennec (Morbihan) : Cadre paisible pour la pêche au coup.',

    'Pays de la Loire': 'Loire, Erdre et Sèvre Nantaise : Rivières devenues des hotspots pour la pêche au silure. <br/> Canal de Nantes à Brest (Guenrouët) : Parcours apprécié des pêcheurs locaux.',

    'Normandie': 'Lac de Rabodanges (Orne) : Spot complet pour la pêche en lac. <br/> Rivière Charentonne (Eure) : Idéale pour la pêche à la truite et aux cyprins.',

    'Guyane': 'Fleuve Sinnamary : Expéditions en pirogue pour la pêche sportive en eau douce. <br/> Fleuve Maroni : Riche en espèces tropicales, idéal pour les amateurs de pêche en jungle.'
  };

  if (textes[nomRegion]) {
    infoDiv.innerHTML = '<h2>' + nomRegion + '</h2><p>' + textes[nomRegion] + '</p>';
  } else {
    infoDiv.innerHTML = '<h2>Région non trouvée</h2><p>Aucune information disponible pour cette région.</p>';
  }
}
