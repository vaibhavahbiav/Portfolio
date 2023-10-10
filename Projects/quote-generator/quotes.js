const localQuotes = [
    {
        text: 'Oh, don\'t you worry. Whatever happens... you may think it all a mere bad dream...',
        author: 'Blood Minister',
    },
    {
        text: 'This town is cursed. Whatever your reasons might be, you should plan a swift exit. Whatever can be gained from this place, it will do more harm than good...',
        author: 'Gilbert',
    },
    {
        text: 'A hunter should hunt beasts. Leave the hunting of hunters to me.',
        author: 'Eileen the Crow',
    },
    {
        text: 'Vermin writhe deep within all filth, and are the root of man\'s impurity. ...All vermin are to be crushed. The League exists to expunge all vermin, ridding is of any trace of human corruption. And so, until we are rid of all vermin, you must continue to hunt and kill. This bloody fate is ours alone. Do not expect the world to grasp our work...',
        author: 'Valtr',
    },
    {
        text: 'We are born of the blood, made men by the blood, undone by the blood. Our eyes have yet to open... Fear the Old Blood.',
        author: 'Provost Willem',
    },
    {
        text: 'Curse the fiends. Their children too. And their children, forever, true.',
        author: 'Narrator',
    },
    {
        text: 'Shrouded by night but with steady stride. Colored by blood, but always clear of mind. Proud hunter of the Church; beasts are a curse, and the curse is a shackle. Only ye are the true blades of the Church.',
        author: 'Yamamura',
    },
    {
        text: 'A corpse should be left well alone. Oh I know, how the secrets beckon so sweetly. Only an honest death will cure you now. Free you from your wild curiosity.',
        author: 'Lady Maria',
    },
    {
        text: 'Ah, sweet child of Kos, returned to the ocean. A bottomless curse, a bottomless sea. Accepting of all that there is, and can be',
        author: 'Fishing Hamlet Fish-Guy',
    },
    {
        text: 'Yharnam is the home of blood ministration. You need only unravel its mystery.',
        author: 'Blood Minister',
    },
    {
        text: 'Without fear in our hearts, we\'re little different from the beasts themselves.',
        author: 'Eileen the Crow',
    },
    {
        text: 'Ooh! Majestic! A hunter is a hunter, even in a dream.',
        author: 'Micolash, Host of the Nightmare',
    },
    {
        text: 'The nightmare swirls and churns unending!',
        author: 'Micolash, Host of the Nightmare',
    },
    {
        text: 'Aaaaaaaaaaaaaaah. Now I\'m waking up. I\'ll forget everything?',
        author: 'Micolash, Host of the Nightmare',
    },
    {
        text: 'Aah, you were at my side, all along. My true mentor... My guiding moonlight...',
        author: 'Ludwig, The Holy Blade',
    },
    {
        text: '"Good hunter, have you seen the thread of light? Just a hair, a fleeting thing, yet I clung to it, steeped as I was in the stench of blood and beasts. I never wanted to know, what it really was. Really, I didn\'t.',
        author: 'Ludwig, The Talking Head',
    },
    {
        text: 'Dear, oh dear. What was it? The Hunt? The Blood? Or the horrible dream? Oh, it doesn\'t matter... It always comes down to the Hunter\'s helper to clean up after these sort of messes. Tonight, Gehrman joins the hunt...',
        author: 'Gehrman, The First Hunter',
    },
    {
        text: 'Wolf, Thank You',
        author: 'Sculptor, Demon of Hatred',
    },
    {
        text: 'A Code Must Be Determined By The Individual... This Is What I\'ve Decided.',
        author: 'Wolf',
    },
    {
        text: 'How Many Times Have You Died And Come Back To Life For My Sake...?',
        author: 'Kuro',
    },
    {
        text: 'There Is No Shame In Losing One Battle. But You Must Take Revenge By Any Means Necessary!',
        author: 'Owl, Great Shinobi',
    },
    {
        text: 'ROOOOOOBEERTOOOOO!!',
        author: 'Armored Warrior',
    },
    {
        text: 'Hesitation is defeat.',
        author: 'Isshin, the Glock Master',
    },
    {
        text: 'If It Is For The Sake Of Preserving Ashina, I Will Seize Any Matter Of Heretical Strength.',
        author: 'Genichiro',
    },
    {
        text: 'To Be Alive... To Walk This Earth... That\'s The Real Curse Right There.',
        author: 'Crestfallen Saulden',
    },
    {
        text: 'I May Be But Small, But I Will Die A Colossus.',
        author: 'Ludleth the Exiled',
    },
    {
        text: 'A war from which no lord arose. A war leading to abandonment by the Greater Will. Arise now, ye Tarnished. Ye dead, who yet live. The call of long-lost grace speaks to us all.',
        author: '',
    },
    {
        text: 'But soon the flames will fade and only Dark will remain. Even now there are only embers, and man sees not light, but only endless nights.',
        author: '',
    },
    {
        text: 'Only In Truth, The Lords Will Abandon Their Thrones, And The Unkindled Will Tise. Nameless Accursed Undead, Unfit Even To Be Cinder. And So It Is That Ash Seeketh Embers...',
        author: '',
    },
    {
        text: 'The Darksign brands the Undead. And in this land, the Undead are corralled and led to the north, where they are locked away, to await the end of the world... This is your fate.',
        author: '',
    },
    {
        text: 'Hmmmmmmmm. Hmmmm. Hmmmmmm. Hmmmmmmmmmm. Hmmmmmm. Oh!',
        author: 'Seigmeyer of Catarina',
    },
    {
        text: 'I dreamt for so long. My flesh was dull gold... and my blood, rotted. Corpse after corpse, left in my wake. As I awaited... his return. Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat.',
        author: 'I wonder who?',
    },
    {
        text: 'Put these foolish ambitions to rest.',
        author: 'Margit, the Fell Omen',
    },
    {
        text: 'Wilful traitors, all. Thy kind are all of a piece. Pillagers. Emboldened by the flame of ambition.',
        author: 'Morgott, the Omen King',
    },
    {
        text: 'Foul Tarnished, in search of the Elden Ring. Emboldened by the flame of ambition. Someone must extinguish thy flame.',
        author: 'Margit, the Fell',
    },
    {
        text: 'Long and hard didst thou fight. Tarnished Warrior. Spurned by the grace of gold. Be assured, the Elden Ring resteth close at hand. Alas, I am returned. To be granted audience once more.',
        author: 'Godfrey, First Elden Lord',
    },
    {
        text: 'Lord of Frenzied Flame... I will seek you, as far as you may travel... To deliver you what is yours. Destined Death.',
        author: 'Melina',
    },
    {
        text: 'Join the serpent king as family. Togethaaaaaa we will devour the very god-akh-s.',
        author: 'Rykard, Lord of Blasphemy',
    },
    {
        text: 'Oh yes... Tarnished, are we? Come to the Lands Between for the Elden Ring, hmm? Of course you have. No shame in it. Unfortunately for you, however, you are maidenless. Without guidance, without the strength of runes, and without an invitation to the Roundtable Hold... You are fated, it seems, to die in obscurity.',
        author: 'Varre',
    },
    {
        text: 'We are both strangers in this strange land. But, at least now there are two of us.',
        author: 'Marvelous Chester',
    },
    {
        text: 'And you talk of beasts? You hunters are the real killers! Have you got a screw loose? Or is it your... animal intuition.',
        author: 'Abhorrent Beast',
    },
    {
        text: 'You hunters have got more blood on your hands. Die! Die, die! Hunters are killers, nothing less!',
        author: 'Abhorrent Beast',
    },
    {
        text: 'You call ME a beast? A Beast!? What would you know? I didn\'t ask for this!',
        author: 'Abhorrent Beast',
    },
    {
        text: 'So, you\'re awake. Looks like death is not your fate... just yet.',
        author: 'Sculptor',
    },
    {
        text: 'No matter what I do, any Buddha I carve is an incarnation of wrath. Thus is the fate of those who owe a deep karmic debt. You\'ll understand when you try carving one for yourself one day. So... Need something?',
        author: 'Sculptor',
    },
    {
        text: 'That is all I can see. It doesn\'t matter what offering I make. Flames... spreading as far as the eye can see and consuming Ashina...',
        author: 'Sculptor',
    },
    {
        text: 'Upon my name as Ranni the Witch. Mother\'s rich slumber shall not be disturbed by thee. Foul trespasser. Send word far and wide. Of the last Queen of Caria, Rennala of the Full Moon. And the majesty of the night she conjureth.',
        author: 'Blue Skinned Four-handed ASMR Witch Doll Lady',
    },
    {
        text: 'Oh? A dogged fellow, aren\'t we? Or is it merely thy habit, to talk to dolls?',
        author: 'Miniature Ranni',
    },
    {
        text: 'Mighty dragon, thou\'rt a trueborn heir. Lend me thy strength, o kindred. Deliver me unto greater heights. Well... a lowly Tarnished playing as a lord. I command thee, kneel! I am the lord of all that is golden!',
        author: 'Godrick the Grafted',
    },
    {
        text: 'Lowly Tarnished... Thou\'rt unfit even to graft...',
        author: 'Godrick the Grafted',
    },
    {
        text: 'Forefathers, one and all… Bear witness!',
        author: 'Godrick the Grafted',
    },
    {
        text: 'Farewell, Good Hunter. May you find your worth in the waking world.',
        author: 'The Doll',
    },
    {
        text: 'Time is a cruel, cruel thing. Haven\'t you noticed?',
        author: 'Gehrman',
    },
    {
        text: 'My name is Gyuobu Masataka Oniwa. As i breathe you will not pass this castle gate.',
        author: 'Horse guy',
    }
]