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

    if (message.content === '!NuevaInvitacion') { // Este sería tu comando para generar una nueva invitación
        // Verificar que el usuario que solicita la invitación tiene permisos para crearla (opcional)
        if (!message.member.hasPermission('CREATE_INSTANT_INVITE')) {
            return message.reply('No tienes permiso para generar una invitación.');
        }

        // Obtener el canal en el que el comando fue enviado
        const channel = message.channel;

        // Generar una nueva invitación para el canal
        channel.createInvite({ maxAge: 604800 }) // 604800 segundos = 7 días
            .then(invite => {
            // Enviar el enlace de la nueva invitación al canal
            message.channel.send(`¡Aquí tienes el nuevo enlace de invitación al servidor! (válido por 7 días) ${invite.url}`);
        })
        .catch(console.error);
    }
    if(message.content === '!commands'){
        message.reply('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola" + '\n' + "!Repetir" + '\n' + "!hora" + '\n' + "!fecha" + '\n' + "!NuevaInvitacion")
        console.log('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola" + '\n' + "!Repetir" + '\n' + "!hora" + "\n" + "!fecha" + '\n' + "!NuevaInvitacion")
    }
})

// conectar
Client.login(process.env.token_god_devil)