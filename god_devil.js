// requerimientos
const Discord = require('discord.js');

//agregar keep_alive
const keep_alive = require ('./keep_alive.js');
require ('./keep_alive.js');

require('dotenv').config();
const TOKEN_BOT = process.env.token_god_devil;

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
    if (message.content === '!Repetir'){
        console.log('Retornando...')
        message.reply('Retornando Respuesta: ' + message.content);
        console.log('Retornando Respuesta: ' + message.content)
    }
    if(message.content === '!hora'){
        const date = new Date()
        const dia = date.getDay()
        const hora = date.getHours()
        const minutos = date.getMinutes()
        message.reply('La Hora es: ' + hora + ':' + minutos + ' hs.')
        console.log('La Hora es: ' + dia + ' ' + hora + ':' + minutos + ' hs.')
    }
    if(message.content === '!fecha'){
        console.log('moments' , moment.tz.guess(message.createdTimestamp.toLocaleString()))
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
        const date = new Date()
        const region = message.createdTimestamp
        const anio = date.getFullYear()
        const mes = meses[date.getMonth()]
        const diaN = date.getDate()
        const dia = dias[date.getDay()]
        const hora = date.getHours()
        const minutos =  date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() :  date.getMinutes()
        message.reply('La fecha y hora es: ' + dia + ', ' + diaN + ' de ' + mes + ' del ' + anio + ' y son las ' + hora + ':' + minutos + ' hs.')
        console.log('La Hora es: ' + dia + ' ' + hora + ':' + minutos + ' hs.')
    }
    if(message.content === '!commands'){
        message.reply('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola" + '\n' + "!Repetir" + '\n' + "!hora" + '\n' + "!fecha")
        console.log('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola" + '\n' + "!Repetir" + '\n' + "!hora" + "\n" + "!fecha")
    }
})

// conectar
Client.login(TOKEN_BOT)