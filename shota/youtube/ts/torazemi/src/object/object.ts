export default function objectSample() {
    const a: object = {
        name: 'torahack',
        age: 28
    }
    // a.name

    // オブジェクトリテラル記法で型定義
    let country: {
        language: string
        name: string
    } = {
        language: 'Japanese',
        name: 'Japan'
    }

    console.log('Object object sample1:', country)

    country = {
        language: 'English',
        name: 'United states of America'
    }

    console.log('Object object sample2:', country)

    let torahack: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 28,
        lastName: 'Yamada',
        firstName: 'Tarou'
    }

    torahack.gender = 'male'
    torahack.lastName = 'Kamado'
    // torahack.firstName = 'Tanjiro'

    console.log('Object object sample3:', torahack)

    const capitals: {
        [countryName: string]: string
    } = {
        Japan: 'Tokyo',
        Korea: 'Seoul'
    }
    capitals.China = 'Beijing',
    capitals.Canada = 'Otawa'

    console.log('Object object sample4:', capitals)
}