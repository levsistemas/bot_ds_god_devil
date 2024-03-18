// requerimientos
const Discord = require('discord.js');

//agregar keep_alive
const keep_alive = require ('./keep_alive.js');
require ('./keep_alive.js');

//definir cliente
const Client = new Discord.Client({
    intents: 33539
});

// contenido
Client.on('ready', async ( client ) => {
    console.log(`Estoy listo!!! Hola Mundo, yo soy: ${client.user.tag}`)
});

Client.on('messageCreate', message => {
    if (message.content === '!Hola'){
        console.log('saludemos...')
        message.reply('¡Hola!, ¿Como te encuentras?');
        console.log('¡Hola!, ¿Como te encuentras?')
    }
})

// conectar
Client.login(process.env.token_god_devil)