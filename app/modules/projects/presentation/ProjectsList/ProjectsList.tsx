import { Grid, GridColProps, Tabs } from '@mantine/core'
import React, { useRef, useState } from 'react'
import { projects } from '../../../../../constants'
import ProjectCard from '../ProjectCard'
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '../../../../hooks/use-is-mobile';

const vairants = {
    initialL: { opacity: 0, translateX: -50 },
    initialR: { opacity: 0, translateX: 50 },
    animate: { opacity: 1, translateX: 0 }
}

const GridCol = ({ index, ...props }: GridColProps & { index: number }) => {
    const isMobile = useIsMobile()
    const cardRef = useRef(null)
    const isServiceCardRefInView = useInView(cardRef, { once: true })
    const initial = isMobile ? index % 2 === 0 ? 'initialL' : 'initialR' : 'initialL'
    const animate = isServiceCardRefInView ? 'animate' : initial

    return (
        <Grid.Col ref={cardRef} {...props}>
            <motion.div ref={cardRef}
                variants={vairants}
                initial='initial'
                animate={animate}
                transition={{
                    delay: 0.1 * index,
                    duration: 0.5
                }}>
                {props.children}
            </motion.div>
        </Grid.Col>
    );
}

const ProjectsList = () => {
    const [option, setOption] = useState('all')
    const options = ['all', 'Web UI', 'Mobile UI', 'Social Media ADs', 'Logo & Branding']

    return (
        <Tabs defaultValue='all' keepMounted={false} variant='default'>
            <Tabs.List justify="space-between" mb='calc(var(--mantine-spacing-md) * 2)'>
                {options.map((opt) => <Tabs.Tab key={opt} tt='capitalize' onClick={() => setOption(opt)} value={opt} style={{ opacity: option === opt ? 1 : 0.25 }}>
                    {opt}
                </Tabs.Tab>)}
            </Tabs.List>
            <Tabs.Panel value="all">
                <Grid grow gutter="md">
                    <GridCol index={0} span={{ base: 12, xs: 8 }}>
                        <ProjectCard project={projects[0]} />
                    </GridCol>
                    <GridCol index={1} span={{ base: 12, xs: 4 }}>
                        <ProjectCard project={projects[1]} titleTop />
                    </GridCol>
                    <GridCol index={2} span={{ base: 12, xs: 4 }}>
                        <ProjectCard project={projects[2]} titleTop />
                    </GridCol>
                    <GridCol index={3} span={{ base: 12, xs: 8 }}>
                        <ProjectCard project={projects[3]} />
                    </GridCol>
                </Grid>
            </Tabs.Panel>
        </Tabs>
    )
}

export default ProjectsList