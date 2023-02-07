// NOTE: this list is incomplete
const memes = [
    {
        subject: 'toons',
        images: [
            'toons/all_of_the_things.jpg',
            'toons/bitch_please.png',
            'toons/forever_alone.jpg',
            'toons/great_scott.jpg',
            'toons/i_hate.jpg',
            'toons/me_gusta.jpg',
            'toons/my_little_pony_1.jpg',
            'toons/not_sure_if.jpg',
            'toons/okay.jpg',
            'toons/philosoraptor.jpg',
            'toons/rage_fu.jpg',
            'toons/rainbow_star_pony.jpg',
            'toons/socially_awkward_penguin.jpg',
            'toons/trollface.jpg',
            'toons/whyyyyy.jpg',
            'toons/yuno_guy.jpg',
        ]
    },
    {
        subject: 'people',
        images: [
            'people/rlemon_smash.jpg',
            'people/condescending_wonka.jpg',
            'people/ridiculously_photogenic_guy.jpg',
            'people/when_i_was_a_kid.jpg',
            'people/baby_godfather.jpg',
            'people/fuck_you_linus.jpg',
            'people/kewpie_poophead.png',
            'people/not_bad_obamas.jpg',
            'people/geek_reader.jpg',
            'people/first_world_problems.jpg',
            'people/rick_rolled.jpg',
            'people/bitch_please_colour.jpg',
            'people/power_ranger_girls.jpg',
            'people/you_dont_say.jpg',
            'people/helicopter_kid.jpg',
            'people/yo_dawg.jpg',
            'people/loktarian.jpg',
            'people/one_does_not_simply.jpg',
            'people/too_tanned_guy.jpg',
            'people/scumbag_steve.jpg',
            'people/pissed_off_nun.jpg',
            'people/spirit_fingers.jpg',
            'people/hipster_barista.jpg',
            'people/good_guy_greg.jpg',
            'people/chuck_norris.jpg',
            'people/bear_grylls.jpg',
            'people/the_most_interesting_man_in_the_world.jpg',
            'people/success_kid.jpg',
            'people/my_name_is_earl.jpg'
        ]
    },
    {
        subject: 'animals',
        images: [
            'animals/ice_creme_unicorn.jpg',
            'animals/zion_go_seek.jpg',
            'animals/projectile_squirt.jpg',
            'animals/science_cat.jpg',
            'animals/conversational_penguins.jpg'
        ]
    }
]

const flat = memes.map(s => s.images).flat()
const thumb = (src) => src.split('.').slice(0,-1).join('.') + '_tn.jpg'
const memeList = flat.map(m => ({
    src: `./memes/${m}`,
    'thumb': `./memes/${thumb(m)}`
}))

export default memeList