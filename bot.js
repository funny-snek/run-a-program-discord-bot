const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'Your Discord Token Here'


bot.on('message', function(message)
{
    if(message.channel.type === "dm")
    {
    message.author.send("Nice Try. Please use the proper channel."); 
    }

    else if(message.content == "!hardreset")
    {

        
        var child = require('child_process').execFile;
        var executablePath = "C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/fullRestart.bat";
        
        child(executablePath, function(err, data) {
            if(err){
               console.error(err);
               return;
            }
         
            console.log(data.toString());

        });
                message.reply('Server Fully Rebooted');  




    }   
})

bot.login(TOKEN);
