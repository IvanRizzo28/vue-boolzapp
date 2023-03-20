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

# Milestone 3
- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

# Milestone 4
- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

# Milestone 5
- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti (Già presente a partire dalla milestone3)

# Features 1
- Ordino la lista delle conversazioni in base alla data più recente

# Features 2
- Creare un bottone per aggiungere una conversazione con un contatto presente nella lista dei contatti