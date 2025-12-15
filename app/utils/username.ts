// Random username format: adjective + noun + numer

import User from "../models/User"

const adjectives = [
    'silent', 'brave', 'swift', 'neon', 'lucky',
    'wild', 'cool', 'calm', 'bright', 'frozen'
]

const nouns = [
    'fox', 'lion', 'wolf', 'eagle', 'river',
    'moon', 'storm', 'shadow', 'fire', 'sky'
]


export const generateRandomUsername = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    const number = Math.floor(1000 + Math.random() * 9000);
    return `${adj}${noun}${number}`
}

export async function getUniqueUsername() {
    let username
    let exists = true

    while (exists) {
        username = generateRandomUsername();
        exists = await User.findOne({ username }) !== null
    }

    return username;
} 