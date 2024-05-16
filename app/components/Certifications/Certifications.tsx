import { Grid } from '@mantine/core'
import Image from 'next/image'

const Certifications = () => {
    return (
        <Grid justify='center' align='center'>
            <Grid.Col
                order={{
                    base: 1,
                    lg: 1
                }}
                h={125}
                span={{ lg: 3, base: 6 }}
                pos={'relative'}>
                <Image objectFit='contain' src={"/certified/GSG.png"} alt='certificate' fill priority style={{ mixBlendMode: 'exclusion' }} />
            </Grid.Col>

            <Grid.Col
                order={{
                    base: 3,
                    lg: 2
                }}
                h={125}
                span={{ lg: 3, base: 6 }}
                pos={'relative'}>
                <Image objectFit='contain' src={"/certified/ixdf.png"} alt='certificate' fill priority style={{ mixBlendMode: 'normal' }} />
            </Grid.Col>

            <Grid.Col
                order={{
                    base: 2,
                    lg: 3
                }}
                h={125}
                span={{ lg: 3, base: 6 }}
                pos={'relative'}>
                <Image objectFit='contain' src={"/certified/KA.png"} alt='certificate' fill priority style={{ mixBlendMode: 'exclusion' }} />
            </Grid.Col>
        </Grid>
    )
}

export default Certifications