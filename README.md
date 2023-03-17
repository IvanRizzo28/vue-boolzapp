# Milestone 1
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

## Struttura dati
Creo un oggetto contenente le informazione dei contatti, poi un oggetto che descrive la conversazione dove sarà riportato l'id dei contatti(indice dell'array dei contatti) e l'oggetto per i messaggi.

## Features
Nella parte di sinistra del sito dove ci sono le conversazioni, nella parte reltiva all'orario dell'ultimo messaggio faccio vari controlli. Se l'anno, il mese e il giorno sono uguali in output abbiamo l'orario, se è uguale solo l'anno in output avrò il mese e il giorno anche nel caso che il mese è lo stesso ma il giorno no. Se l'anno è diverso in output avrò la data per intero senza orario.

# Milestone 2
- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato

# Nella milestone1 è compresa pure la milestone4