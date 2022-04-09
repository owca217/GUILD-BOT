const Discord =  require("discord.js")
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const talkedRecently = new Set();
const token = process.env.BOT_TOKEN;
//client.login("OTU5NzIxNDc1MDA5NTc2OTkw.YkgARg.k8KEzvqWnzS9TUd6arOVsFtPz0g")
client.on("ready", message => {
    console.log("Bot jest online")
    client.user.setActivity("Nameless Hunters", {
      type: "PLAYING"
    })
    
      })
      
client.on("messageCreate", async(message) => {
 
  if(message.content === `mars od tyłu to sram`){
    console.log("mars od tyłu to sram" + message.member.user.username);
    if(talkedRecently.has(message.author.id)) { message.channel.bulkDelete(1); message.member.user.send("Wiem jak bardzo śmieszne jest że Braterska jest jebana od tyłu ale nie musimy tym zaśmiecać discorda :wink:, żeby nasz discord gildyjny był w stanie utrzymać jebanie Braterskiej, można użyć tej komendy raz na 24h")
    } else {
    message.channel.send("A Braterska od tyłu to jest jebana w dupe ;)");
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
        }, 86400000);
    }
  }



  if(message.content === `!1`){
    console.log("HATER");
    message.channel.bulkDelete(1);
    message.channel.send( {files: ['./memes/1.jpg']});
  }

    const prefix = "!q"
    //if(!message.content.startsWith(prefix)) return;
    //if(!message.member.permissions.has("ADMINISTRATOR")) return message.member.user.send(`BOT IS CURRENTLY UNDER CONSTRUCTION WIĘC NIE UŻYWAJ TYCH KOMEND!!! Grrr.... :angry:`);


    if(message.content === `${prefix} avatar`){
    message.channel.send(message.member.user.avatarURL());
    message.channel.send(`<@`+message.member.user.id+`>`);
    }

    if(message.content === `${prefix} reset cooldown!!`){
      message.channel.bulkDelete(1);
      if(!message.member.permissions.has("ADMINISTRATOR")) return message.member.user.send("Sorki mordo ale nie masz wystarczających uprawnień do komendy ["+ message.content + "]  :pensive:");
      talkedRecently.clear();
      console.log("Wyczyszczono cooldown komendy !q join");
    }

    if(message.content === `${prefix} info`){
      message.channel.bulkDelete(1);
      if(!message.member.permissions.has("ADMINISTRATOR")) return message.member.user.send("Sorki mordo ale nie masz wystarczających uprawnień do komendy ["+ message.content + "]  :pensive:");
      const exampleEmbed = new MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Wielofunkcyjny bot gildyjny!')
	    .setURL('')
	    .setAuthor({ name: 'Owczy', iconURL: 'https://cdn.discordapp.com/avatars/165759901597958144/a_920a322bd93627b6114090420a8b3c0a.webp', url: '' })
	    .setDescription('Wielofunkycjny bot dedykowany pod discordowy serwer gildii Nameless Hunters. Jak na ten moment opcji może być niewiele, lecz z czasem bot będzie aktualizowany w celu ułatwienia pracy na naszym gildyjnym serwerze :)')
	    .setThumbnail('https://cdn.discordapp.com/avatars/165759901597958144/a_920a322bd93627b6114090420a8b3c0a.webp')
	    .addFields(
        { name: '\u200B', value: '\u200B' },
		 { name: 'Lista dostępnych komend ', value: 'Wraz z ich opisem' },
		  { name: '!q join', value: 'Wysłanie prywatnej wiadomości do wszystkich rekróterów z informacją, że ktoś czeka na zwerbowanie :) (komenda dostępna tylko dla osób nie posiadających żadnej rangi)', inline: true },
		  { name: '!q clear', value: 'Komenda czyszcząca kanał, na którym została wywołana z wiadomości (komenda jednorazowo może usunąć 100 wiadomości, więc jeśli jest ich więcej na kanale, to trzeba ją wpisać kilka razy :/ ) \n (Komenda dostępna tylko dla osób z uprawnieniami administratora!)', inline: true },
      { name: '!q zebranie', value: 'Komenda przenosząca wszystkie osoby, które przebywają aktualnie na innych kanałach głosowych, do kanału Zebranie. \n(Przenoszone są tylko osoby posiadające role NH) \n (Komenda dostępna tylko dla osób z uprawnieniami administratora!)', inline: true },
      { name: '!q caller (SOON!)', value: 'Komenda wyciszająca wszystkie osoby na danym kanale, oprócz osób posiadających role Callera \n(Komenda dostępna tylko dla osób z rolą Callera lub wyższą!)', inline: true },
	)
	//.addField('Jeżeli masz pomysł na jakąś komende!', 'Napisz do mnie priv, jestem otwarty na każdy pomysł, a wszystko po to, by żyło nam się łatwiej! ^^', true)
	.setImage('https://i.imgur.com/TeUPRMW.png')
	.setTimestamp()
	.setFooter({ text: 'Jeżeli masz pomysł na jakąś komende napisz do mnie priv, jestem otwarty na każdy pomysł, a wszystko po to, by żyło nam się łatwiej! ^^', iconURL: 'https://i.imgur.com/TeUPRMW.png' });

        message.channel.send({ embeds: [exampleEmbed] });
    }
    if(message.content === `${prefix} join`){
      message.channel.bulkDelete(1);
      if(talkedRecently.has(message.author.id)) { message.member.user.send("Żeby nasi rekruterzy mogli utrzymać porządek w prywatnych wiadomościach, tą komendę możesz używać co 5 minut, więc jeżeli żaden z rekruterów jeszcze się nie pojawił, to prawdopodobnie jakimś cudem udało im się uciec od komputera! :scream: Spróbuj dać im o sobie znać znowu za kilka chwil :wink:")
    } else {
      console.log(message.member.user.username + " użył komendy !q join. Próba wysłania wiadomości do rekruterów.");
      var licznik = 0;
      //const channel = "959737866634801152"; 915367153664917555 = rekruter | 954323037103226941 = nadzorca rekrutacji
      if(message.member.roles.cache.has("915365776058376282") || message.member.roles.cache.has("944532140350132255")) return message.member.user.send("Przecież już jesteś w gildii, po co chcesz marnować czas rekruterom?...");
      {message.guild.members.cache.forEach(member => {
        if(member.roles.cache.has("915367153664917555") || member.roles.cache.has("954323037103226941"))
        {if(!member.voice.channel) return console.log(member.user.username + " niedostępny!");
        {licznik = licznik + 1;
        member.send(`Nowa osoba na kanale rekrutacji! <@`+message.member.user.id+`>`)
        console.log("Wysłano wiadomość do " + member.user.username)}}} )
        if(licznik === 0)
        message.member.user.send("Niestety aktualnie wszyscy nasi rekruterzy są zajęci graniem w prawdziwe życie :pleading_face: , proszę spróbuj jeszcze raz później :wink:");
        if(licznik > 0)
        message.member.user.send("Nasi rekruterzy zostali poinformowani o twojej chęci dołączenia w nasze szregi :wink:, zaraz ktoś do ciebie przyjdzie!");
        console.log("ilosc wysłanych pw do rekruterów: " +licznik);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a 5 minutes
          talkedRecently.delete(message.author.id);
        }, 300000);
    }}

    

    }

    if(message.content === `${prefix} clear`){
      if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`<@`+message.member.user.id+`> nie masz uprawnień do tej komendy!`);
      message.channel.bulkDelete(100)
      message.channel.send(`Wiadomości usunięte! \n Możesz usunąć tą wiadomość.`)
      console.log(message.member.user.username + " clear channel #" + message.channel.name)
    }

    if(message.content === `${prefix} test`){
      message.channel.bulkDelete(1);
      if(!message.member.permissions.has("ADMINISTRATOR")) return message.member.user.send("Sorki mordo ale nie masz wystarczających uprawnień do komendy ["+ message.content + "]  :pensive:");
      if(message.member.voice.channel)
      {message.member.voice.setMute(true); console.log(message.member.user.username + " wyciszono.")}
      else {console.log(message.member.user.username + " nie jest na żadnym kanale głosowym")}
      }

    if(message.content === `${prefix} caller`){
      if(!message.member.roles.has("Caller")) return message.channel.send(`<@`+message.member.user.id+`> nie jesteś callerem!`);
    }

    if(message.content === `${prefix} zebranie`){
      console.log("zebranie wywałanie")
      message.channel.bulkDelete(1); 
       const channel = "915940770677153823";
       if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`<@`+message.member.user.id+`> nie masz uprawnień do tej komendy!`);
       message.guild.members.cache.forEach(member => {
         if(member.voice.channel && member.roles.cache.has("915365776058376282")){
         // if(member.id != message.member.id)
         member.voice.setChannel(channel);
         console.log(member.user.username)}
       });
        
    }
})
client.login(process.env.token);

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }