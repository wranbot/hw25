// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6282393734303?text=bang+ini+link+donasi+yah+https://bit.ly/3Mw6t30+aku+mau+donasi'
global.ig = '@HW MODS WA' // ubah aja
global.email = 'denyp857@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'HW MODS WA' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6282393734303'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'HW MODS WA' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'HW MODS WA' // ubah aja ini nama sticker
global.author = 'HW MODS WA' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.mess = 
{
    success: '_Sukses_ ✅',
    admin: '_Fiture khusus admin group_',
    botAdmin: '_Bot harus menjadi admin terlebih dahulu_',
    owner: '_Fiture khusus owner bot_',
    group: '_Fiture hanya dapat digunakan di group chat_',
    private: '_Fiture hanya dapat digunakan di private chat_',
    bot: '_Fiture khusus pengguna nomor bot_',
    error: '_Mungkin sedang error ka harap lapor owner agar segera di perbaiki 🧑‍🔧_ ',
    wait: '_Sedang Di Proses ..._',
    premium: '_Fiture khusus premium user_',
/*    success: '𝙎𝙪𝙠𝙨𝙚𝙨 ✅',
    admin: '𝙁𝙞𝙩𝙪𝙧𝙚 𝙆𝙝𝙪𝙨𝙪𝙨 𝘼𝙙𝙢𝙞𝙣 𝙂𝙧𝙤𝙪𝙥❗',
    botAdmin: '𝘽𝙤𝙩 𝙃𝙖𝙧𝙪𝙨 𝙈𝙚𝙣𝙟𝙖𝙙𝙞 𝘼𝙙𝙢𝙞𝙣 𝙏𝙚𝙧𝙡𝙚𝙗𝙞𝙝 𝘿𝙖𝙝𝙪𝙡𝙪❗',
    owner: '𝙁𝙞𝙩𝙪𝙧 𝙆𝙝𝙪𝙨𝙪𝙨 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩❗',
    group: '𝙁𝙞𝙩𝙪𝙧 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙃𝙖𝙣𝙮𝙖 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥❗',
    private: '𝙁𝙞𝙩𝙪𝙧 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙃𝙖𝙣𝙮𝙖 𝙐𝙣𝙩𝙪𝙠 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝘾𝙝𝙖𝙩',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '𝙏𝙪𝙣𝙜𝙜𝙪 𝙎𝙚𝙗𝙚𝙣𝙩𝙖𝙧 ...',
    premium: '𝙁𝙞𝙩𝙪𝙧 𝙆𝙝𝙪𝙨𝙪𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝙐𝙨𝙚𝙧❗',*/
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})