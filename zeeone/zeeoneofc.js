const petik = '```'
const help = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)=> {
	return`┌❏ *INDONESIA TIME*
${petik}│◦➛ WIB : ${timuu}
│◦➛ WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapannya}
│◦➛Jam : ${timuu}
│◦➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛ Owner : ${ownername}
│◦➛Mode : ${status}
│◦➛Prefix : ${prefix}
│◦➛Total Hit : ${hit_today.length}
│◦➛Personal Chat : ${totalchat.length - ini_gcchat.lenght}
│◦➛Total All Chat : ${totalchat.length}
│◦➛Group Chat : ${ini_gcchat}
│◦➛Browser : Chrome
│◦➛Server : Baileys
│◦➛Version : 3.5.1${petik}
${petik}│◦➛Speed :${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}


┌❑ *LIST MENU* ❑
│
${petik}├❒ Allmenu 
├❒ Convertmenu
├❒ Asupanmenu
├❒ Downloadmenu
├❒ Funmenu
├❒ Makermenu
├❒ Othermenu
├❒ Ownermenu
├❒ Storagemenu
├❒ Tagmenu
├❒ Upmenu
├❒ Set_sticker_cmd
├❒ Gacha_cecan
├❒ Telegram_sticker
└❒ Image_effect${petik}

┌❑ *ABOUT* ❑
│
${petik}├❒ Source
├❒ ThanksTo
├❒ Group_support
└❒ Ownerbot${petik}

❒ _Creator BotWea © 2K21_ ❒
`
}
const convert = (prefix) => {
	return`┌❑ *CONVERT MENU* ❑
│
${petik}├❒ ${prefix}toimg
├❒ ${prefix}tomp3
├❒ ${prefix}tomp4
├❒ ${prefix}slow
├❒ ${prefix}fast
├❒ ${prefix}reverse
└❒ ${prefix}tourl${petik}
`
}
const download = (prefix) => {
	return`┌❑ *DOWNLOAD MENU* ❑
│
${petik}├❒ ${prefix}ytsearch${petik} _query_
${petik}├❒ ${prefix}igstalk${petik} _username_
${petik}├❒ ${prefix}ghstalk${petik} _username_
${petik}├❒ ${prefix}play${petik} _query_
${petik}├❒ ${prefix}playmp4${petik} _query_
${petik}├❒ ${prefix}video${petik} _query_
${petik}├❒ ${prefix}ytmp3${petik} _link_
${petik}├❒ ${prefix}ytmp4${petik} _link_
${petik}├❒ ${prefix}ig${petik} _link_
${petik}├❒ ${prefix}twitter${petik} _link_
${petik}├❒ ${prefix}tiktokwm${petik} _link_
${petik}├❒ ${prefix}tiktoknowm${petik} _link_
${petik}├❒ ${prefix}tiktokaudio${petik} _link_
${petik}├❒ ${prefix}fb${petik} _link_
${petik}├❒ ${prefix}brainly${petik} _query_
${petik}├❒ ${prefix}image${petik} _query_
${petik}├❒ ${prefix}pinterest${petik} _query_
${petik}├❒ ${prefix}pinterest2${petik} _query_
${petik}├❒ ${prefix}playstore${petik} _query_
${petik}├❒ ${prefix}gcwa${petik} _query_
${petik}├❒ ${prefix}lirik${petik} _query_
${petik}├❒ ${prefix}komiku${petik} _query_
${petik}└❒ ${prefix}anime${petik} _random_
`
}
const allmenu = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return`❏───「 *ilham BOT* 」───❏
     
┌❏ *INDONESIA TIME*
${petik}│◦➛ WIB : ${timuu}
│◦➛ WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapannya}
│◦➛Jam : ${timuu}
│◦➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛Mode : ${status}
│◦➛Prefix : ${prefix}
│◦➛Total Hit : ${hit_today.length}
│◦➛Personal Chat : ${totalchat.length - ini_gcchat.lenght}
│◦➛Total All Chat : ${totalchat.length}
│◦➛Group Chat : ${ini_gcchat}
│◦➛Browser : Chrome
│◦➛Server : Baileys
│◦➛Version : 3.5.1${petik}
${petik}│◦➛Speed :${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}

┌─❑「 *CONVERT MENU* 」
│
${petik}│◦ ${prefix}toimg
│◦ ${prefix}tomp3
│◦ ${prefix}tomp4
│◦ ${prefix}slow
│◦ ${prefix}fast
│◦ ${prefix}reverse
│◦ ${prefix}tourl${petik}
│
├❑「 *DOWNLOAD MENU* 」
│
${petik}│◦ ${prefix}ytsearch${petik} _query_
${petik}│◦ ${prefix}igstalk${petik} _username_
${petik}│◦ ${prefix}ghstalk${petik} _username_
${petik}│◦ ${prefix}play${petik} _query_
${petik}│◦ ${prefix}playmp4${petik} _query_
${petik}│◦ ${prefix}video${petik} _query_
${petik}│◦ ${prefix}ytmp3${petik} _link_
${petik}│◦ ${prefix}ytmp4${petik} _link_
${petik}│◦ ${prefix}ig${petik} _link_
${petik}│◦ ${prefix}twitter${petik} _link_
${petik}│◦ ${prefix}tiktokwm${petik} _link_
${petik}│◦ ${prefix}tiktoknowm${petik} _link_
${petik}│◦ ${prefix}tiktokaudio${petik} _link_
${petik}│◦ ${prefix}fb${petik} _link_
${petik}│◦ ${prefix}brainly${petik} _query_
${petik}│◦ ${prefix}image${petik} _query_
${petik}│◦ ${prefix}pinterest${petik} _query_
${petik}│◦ ${prefix}pinterest2${petik} _query_
${petik}│◦ ${prefix}playstore${petik} _query_
${petik}│◦ ${prefix}gcwa${petik} _query_
${petik}│◦ ${prefix}lirik${petik} _query_
${petik}│◦ ${prefix}komiku${petik} _query_
${petik}│◦ ${prefix}anime${petik} _random_
│
├❑「 *FUN MENU* 」
│
${petik}│◦ ${prefix}fitnah
│◦ ${prefix}fitnahpc${petik} text|balasan
${petik}│◦ ${prefix}kontak${petik} 62xxx|text
${petik}│◦ ${prefix}tictactoe${petik} @user
${petik}│◦ ${prefix}delttt${petik}
${petik}│◦ ${prefix}voting${petik} @user|reason|time
${petik}│◦ ${prefix}delvote${petik}
${petik}│◦ ${prefix}jadibot${petik}
${petik}│◦ ${prefix}stopjadibot${petik}
${petik}│◦ ${prefix}listbot${petik}
│
├❑「 *MAKER MENU* 」
│
${petik}│◦ ${prefix}sticker${petik}
${petik}│◦ ${prefix}smeme${petik} atas|bawah
${petik}│◦ ${prefix}attp${petik}
${petik}│◦ ${prefix}swm${petik} author|packname
${petik}│◦ ${prefix}take${petik} author|packname
${petik}│◦ ${prefix}fdeface${petik}
${petik}│◦ ${prefix}tahta${petik} text
${petik}│◦ ${prefix}neon2${petik} text
${petik}│◦ ${prefix}wall${petik} text
${petik}│◦ ${prefix}wolf${petik} text
${petik}│◦ ${prefix}tfire${petik} text
${petik}│◦ ${prefix}ytgold${petik} text
${petik}│◦ ${prefix}ytsilver${petik} text
${petik}│◦ ${prefix}t3d${petik} text
${petik}│◦ ${prefix}logoa${petik} text&text
${petik}│◦ ${prefix}pornhub${petik} text&text
${petik}│◦ ${prefix}marvel${petik} text&text
${petik}│◦ ${prefix}leavest${petik} text
${petik}│◦ ${prefix}phcoment${petik} text&text
${petik}│◦ ${prefix}nulis${petik} text
${petik}│◦ ${prefix}emoji${petik} 👼
│
├❑ 「 *IMAGE EFFECT* 」
│
${petik}│◦ ${prefix}trigger
│◦ ${prefix}gay
│◦ ${prefix}glass
│◦ ${prefix}passed
│◦ ${prefix}jail
│◦ ${prefix}comrade
│◦ ${prefix}hijau
│◦ ${prefix}biru
│◦ ${prefix}greyscale
│◦ ${prefix}invert
│◦ ${prefix}invert_greyscale
│◦ ${prefix}red
│◦ ${prefix}blurple
│◦ ${prefix}blurple2
│◦ ${prefix}wasted
│◦ ${prefix}pelangi
│◦ ${prefix}sepia${petik}
│
├❑「 *GROUP MENU* 」
│
${petik}│◦ ${prefix}add${petik} _reply pesan @user_
${petik}│◦ ${prefix}add2${petik} 62xxx
${petik}│◦ ${prefix}kick${petik} _reply pesan @user_
${petik}│◦ ${prefix}ping${petik}
${petik}│◦ ${prefix}antilink${petik} _on / off_
${petik}│◦ ${prefix}get${petik} _link_
${petik}│◦ ${prefix}getpp${petik} _@user_
${petik}│◦ ${prefix}getbio${petik} _@user_
${petik}│◦ ${prefix}tagall
│◦ ${prefix}caripesan${petik} query
${petik}│◦ ${prefix}caripesan2${petik} _query_
${petik}│◦ ${prefix}searchmsg${petik} _query|total_
${petik}│◦ ${prefix}sider${petik} _reply pesan bot_
${petik}│◦ ${prefix}promoteall
│◦ ${prefix}setname
│◦ ${prefix}setdesk
│◦ ${prefix}spam${petik} text|jumlah
${petik}│◦ ${prefix}demoteall
│◦ ${prefix}admin
│◦ ${prefix}listpc
│◦ ${prefix}listgroup
│◦ ${prefix}hentai
│◦ ${prefix}trapnime
│◦ ${prefix}blowjob
│◦ ${prefix}awoo
│◦ ${prefix}megumin${petik}
│
├❑「 *OWNER MENU* 」
│
${petik}│◦ ${prefix}off
│◦ ${prefix}on
│◦ ${prefix}buggc
│◦ ${prefix}bc
│◦ ${prefix}bcimage
│◦ ${prefix}bcgif
│◦ ${prefix}bcvideo
│◦ ${prefix}bcaudio
│◦ ${prefix}bcsticker
│◦ ${prefix}status
│◦ ${prefix}clearall
│◦ ${prefix}self
│◦ ${prefix}public
│◦ ${prefix}join
│◦ ${prefix}leave
│◦ ${prefix}clearall
│◦ ${prefix}setthumb
│◦ ${prefix}settarget
│◦ ${prefix}setfakeimg
│◦ ${prefix}setreply${petik}
${petik}│◦ ${prefix}term${petik} _code_
${petik}│◦ x or >${petik} _code_
${petik}│◦ $ ${petik} _termux code_
${petik}│◦ => ${petik} _eval async_
│
├❑「 *SET STC CMD* 」
│
${petik}│◦ ${prefix}set_stc_menu
│◦ ${prefix}set_stc_ping
│◦ ${prefix}set_stc_music
│◦ ${prefix}set_stc_gclose
│◦ ${prefix}set_stc_gopen
│◦ ${prefix}set_stc_itos
│◦ ${prefix}set_stc_toimg
│◦ ${prefix}set_stc_self
│◦ ${prefix}set_stc_public${petik}
│
├❑「 *STORAGE  MENU* 」
│
${petik}│◦ ${prefix}addstik 
│◦ ${prefix}addimg 
│◦ ${prefix}addvid 
│◦ ${prefix}addvn   
│◦ ${prefix}liststick
│◦ ${prefix}listimg
│◦ ${prefix}listvid
│◦ ${prefix}listvn
│◦ ${prefix}addrespon
│◦ ${prefix}delrespon
│◦ ${prefix}listrespon${petik}
│
├❑「 *TAG  MENU* 」
│
${petik}│◦ ${prefix}hidetag
│◦ ${prefix}kontag
│◦ ${prefix}sticktag
│◦ ${prefix}totag${petik}
│
├❑「 *UP ESWE* 」
│
${petik}│◦ ${prefix}upswteks
│◦ ${prefix}upswimage
│◦ ${prefix}upswvideo${petik}
│
├❑「 *NSFW & SFW* 」
│
${petik}│◦ ahegao
│◦ ass
│◦ bdsm
│◦ blowjob2
│◦ cuckold
│◦ cum
│◦ ero
│◦ femdom
│◦ foot
│◦ gangbang
│◦ glasses
│◦ hentai2
│◦ hentai_gifs
│◦ jahy
│◦ manga
│◦ masturbation
│◦ neko
│◦ orgy
│◦ panties
│◦ pussy
│◦ neko_sfw
│◦ tentacles
│◦ thighs
│◦ yuri
│◦ zettai${petik}
│
├❑ 「 *STC  MENU* 」
│
${petik}│◦ awoawo
│◦ benedict
│◦ chat
│◦ dbfly
│◦ dino_kuning
│◦ doge
│◦ gojosatoru
│◦ hope_boy
│◦ jisoo
│◦ kr_robot
│◦ kucing
│◦ lonte
│◦ manusia_lidi
│◦ menjamet
│◦ meow
│◦ nicholas
│◦ patrick
│◦ popoci
│◦ sponsbob
│◦ kawan_sponsbob
│◦ tyni${petik}
│
├❑「 *GACHA  MENU* 」 
│
${petik}│◦ china
│◦ indonesia
│◦ malaysia
│◦ thailand
│◦ korea
│◦ japan
│◦ vietnam
│◦ jenni
│◦ jiso
│◦ lisa
│◦ rose${petik}
│
├❑「 *ASUPAN  MENU* 」
│
${petik}│◦ rikagusriani 
│◦ ukhty 
│◦ santuy 
│◦ geayubi   
│◦ bocil
│◦ asupan
│◦ chika 
│◦ delvira 
│◦ ayu   
│◦ bunga
│◦ aura
│◦ nisa 
│◦ ziva 
│◦ yana   
│◦ viona
│◦ syania
│◦ riri   
│◦ syifa
│◦ mama_gina
│◦ alcakenya 
│◦ mangayutri${petik}
└─❑「 MENU BOT 」

❏───「 *ALPHA BOT* 」───❏
`
}

const fun = (prefix) => {
	return`┌❑  *FUN MENU* ❑
│
${petik}├❒${prefix}fitnah
├❒ ${prefix}fitnahpc${petik} text|balasan
${petik}├❒ ${prefix}kontak${petik} 62xxx|text
${petik}├❒ ${prefix}tictactoe${petik} @user
${petik}├❒ ${prefix}delttt${petik}
${petik}├❒ ${prefix}voting${petik}
${petik}├❒ ${prefix}delvote${petik}
${petik}├❒ ${prefix}jadibot${petik}
${petik}├❒ ${prefix}stopjadibot${petik}
${petik}└❒ ${prefix}listbot${petik}
`
}

const maker = (prefix) => {
	return`┌❑  *MAKER MENU* ❑
│
${petik}├❒ ${prefix}sticker${petik}
${petik}├❒ ${prefix}smeme${petik}
${petik}├❒ ${prefix}attp${petik}
${petik}├❒ ${prefix}swm${petik} author|packname
${petik}├❒ ${prefix}take${petik} author|packname
${petik}├❒ ${prefix}fdeface${petik}
${petik}├❒ ${prefix}tahta${petik} text
${petik}├❒ ${prefix}neon2${petik} text
${petik}├❒ ${prefix}wall${petik} text
${petik}├❒ ${prefix}wolf${petik} text
${petik}├❒ ${prefix}tfire${petik} text
${petik}├❒ ${prefix}ytgold${petik} text
${petik}├❒ ${prefix}ytsilver${petik} text
${petik}├❒ ${prefix}t3d${petik} text
${petik}├❒ ${prefix}logoa${petik} text&text
${petik}├❒ ${prefix}pornhub${petik} text&text
${petik}├❒ ${prefix}marvel${petik} text&text
${petik}├❒ ${prefix}leavest${petik} text
${petik}├❒ ${prefix}phcoment${petik} text&text
${petik}├❒ ${prefix}nulis${petik} text
${petik}└❒ ${prefix}emoji${petik} 👼
`
}

const other = (prefix) => {
	return`┌❑  *GROUP MENU* ❑
│
${petik}├❒ ${prefix}add${petik} _reply pesan @user_
${petik}├❒ ${prefix}add2${petik} 62xxx
${petik}├❒ ${prefix}kick${petik} _reply pesan @user_
${petik}├❒ ${prefix}ping${petik}
${petik}├❒ ${prefix}antilink${petik} _on / off_
${petik}├❒ ${prefix}get${petik} _link_
${petik}├❒ ${prefix}getpp${petik} _@user_
${petik}├❒ ${prefix}getbio${petik} _@user_
${petik}├❒ ${prefix}tagall
├❒ ${prefix}promoteall
├❒ ${prefix}demoteall
├❒ ${prefix}admin
├❒ ${prefix}hentai
├❒ ${prefix}trapnime
├❒ ${prefix}blowjob
├❒ ${prefix}awoo
└❒ ${prefix}megumin${petik}
`
}

const ownermenu = (prefix) => {
	return`┌❑  *OWNER MENU* ❑
│
${petik}├❒ ${prefix}off
├❒ ${prefix}on
├❒ ${prefix}buggc
├❒ ${prefix}bc
├❒ ${prefix}bcimage
├❒ ${prefix}bcgif
├❒ ${prefix}bcvideo
├❒ ${prefix}bcaudio
├❒ ${prefix}bcsticker
├❒ ${prefix}status
├❒ ${prefix}clearall
├❒ ${prefix}self
├❒ ${prefix}public
├❒ ${prefix}join 
├❒ ${prefix}leave
├❒ ${prefix}clearall
├❒ ${prefix}setthumb
├❒ ${prefix}settarget
├❒ ${prefix}setfakeimg
├❒ ${prefix}setreply${petik}
${petik}├❒ ${prefix}term${petik} _code_
${petik}│◦ $ ${petik} _termux code_
${petik}│◦ => ${petik} _eval async_
${petik}└❒ x or >${petik} _code_
`
}

const setStcCmd = (prefix) => {
	return`┌❑  *SET STC CMD* ❑
│
${petik}├❒ ${prefix}set_stc_menu
├❒ ${prefix}set_stc_ping
├❒ ${prefix}set_stc_music
├❒ ${prefix}set_stc_gclose
├❒ ${prefix}set_stc_gopen
├❒ ${prefix}set_stc_itos
├❒ ${prefix}set_stc_toimg
├❒ ${prefix}set_stc_self
└❒ ${prefix}set_stc_public${petik}

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`┌❑  *STORAGE MENU* ❑
│
${petik}├❒ ${prefix}addstik 
├❒ ${prefix}addimg 
├❒ ${prefix}addvid 
├❒ ${prefix}addvn   
├❒ ${prefix}liststick
├❒ ${prefix}listimg
├❒ ${prefix}listvid
├❒ ${prefix}listvn
├❒ ${prefix}addrespon
├❒ ${prefix}delrespon
└❒ ${prefix}listrespon${petik}
`
}
const cecanmenu = (prefix) => {
	return`┌❑  *GACHA MENU* ❑
│
${petik}├❒ china
├❒ indonesia
├❒ malaysia
├❒ thailand
├❒ korea
├❒ japan
├❒ vietnam
├❒ jenni
├❒ jiso
├❒ lisa
└❒ rose${petik}

_No prefix (khusus)_
`
}

const tag = (prefix) => {
	return`┌❑  *TAG MENU* ❑
│
${petik}├❒ ${prefix}hidetag
├❒ ${prefix}kontag
├❒ ${prefix}sticktag
└❒ ${prefix}totag${petik}
`
}

const upmenu = (prefix) => {
	return`┌❑  *UP ESWE* ❑
│
${petik}├❒ ${prefix}upswteks
├❒ ${prefix}upswimage
└❒ ${prefix}upswvideo${petik}
`
}
const nsfw = (prefix) => {
	return`┌❑  *NSFW & SFW* ❑
│
${petik}├❒ ahegao
├❒ ass
├❒ bdsm
├❒ blowjob2
├❒ cuckold
├❒ cum
├❒ ero
├❒ femdom
├❒ foot
├❒ gangbang
├❒ glasses
├❒ hentai2
├❒ hentai_gifs
├❒ jahy
├❒ manga
├❒ masturbation
├❒ neko
├❒ orgy
├❒ panties
├❒ pussy
├❒ neko_sfw
├❒ tentacles
├❒ thighs
├❒ yuri
└❒ zettai${petik}

_No prefix (khusus)_
`
}
const asupan = (prefix) => {
	return`┌❑  *ASUPAN MENU* ❑
│
${petik}├❒ rikagusriani 
├❒ ukhty 
├❒ santuy 
├❒ geayubi   
├❒ bocil
├❒ asupan
├❒ chika 
├❒ delvira 
├❒ ayu   
├❒ bunga
├❒ aura
├❒ nisa 
├❒ ziva 
├❒ yana   
├❒ viona
├❒ syania
├❒ riri   
├❒ syifa
├❒ mama_gina
├❒ alcakenya 
└❒ mangayutri${petik}

_No prefix (khusus)_
`
}
const telestiker = (prefix) => {
	return`┌❑  *STICKERS MENU* ❑
│
${petik}├❒ awoawo
├❒ benedict
├❒ chat
├❒ dbfly
├❒ dino_kuning
├❒ doge
├❒ gojosatoru
├❒ hope_boy
├❒ jisoo
├❒ kr_robot
├❒ kucing
├❒ lonte
├❒ manusia_lidi
├❒ menjamet
├❒ meow
├❒ nicholas
├❒ patrick
├❒ popoci
├❒ sponsbob
├❒ kawan_sponsbob
└❒ tyni${petik}


_No prefix (khusus)_
`
}
const image_effect_menu = (prefix) => {
	return`┌❑  *IMAGE EFFECT* ❑
│
${petik}├❒ ${prefix}trigger
├❒ ${prefix}gay
├❒ ${prefix}glass
├❒ ${prefix}passed
├❒ ${prefix}jail
├❒ ${prefix}comrade
├❒ ${prefix}hijau
├❒ ${prefix}biru
├❒ ${prefix}greyscale
├❒ ${prefix}invert
├❒ ${prefix}invert_greyscale
├❒ ${prefix}red
├❒ ${prefix}blurple
├❒ ${prefix}blurple2
├❒ ${prefix}wasted
├❒ ${prefix}pelangi
└❒ ${prefix}sepia${petik}
`
}

exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.image_effect = image_effect_menu
