import React from 'react'

import {
    BlogCard,
    CardInfo,
    CardOverlayLink,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './ProjectsStyles'
import {
    Section,
    SectionDivider,
    SectionTitle,
    Button
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/projects'

const Projects = () => (
    <Section id="projects" fullHeight>
        <SectionDivider></SectionDivider>
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {/* old way we did {projects.map((project) => 
				however, it's redundant to keep referencing the project
				variable like project.id, project.image...
				So instead, we can destructure our map to look like the
				code below.
				*/}
            {projects.map(
                ({ id, image, title, description, tags, source, visit }) => (
                    <BlogCard key={id}>
                        {
                            visit && visit !== '' ?
                            <CardOverlayLink href={visit} target="_blank" rel="noopener noreferrer" aria-label={`${title} — view live app`} />
                            :
                            null
                        }
                        {image ? <Img src={image} alt={title} /> : null}
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                            <Hr></Hr>
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <div>
                            <TagList>
                                {tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            {
                                visit && visit !== '' ?
                                <ExternalLinks href={visit} target="_blank">
                                    View app
                                </ExternalLinks>
                                :
                                null
                            }
                            {
                                source && source !== '' ?
                                <ExternalLinks href={source} target="_blank">
                                    Source Code
                                </ExternalLinks>
                                :
                                null
                            }
                        </UtilityList>
                    </BlogCard>
                ),
            )}
        </GridContainer>
    </Section>
)

export default Projects