import { Box, Container, Grid, Typography } from '@mui/material'
import { SkillCard } from './shared/SkillCard';

export const Projects = () => {
    return (
        < Box id="projects" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                {/* Section title */}
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3,
                    }}
                >
                    Projects
                </Typography>

                <Grid container spacing={4} sx={{ width: '100%' }}>
                    {/* POKÉMON APP CARD */}
                    <SkillCard
                        gitHref="https://github.com/raztz15/pokedex"
                        subtitleTech={["React", " TypeScript ", "RTK Query", "MUI", "Local Storage"]}
                        title="Pokémon Regions Companion App"
                        usedTechnologies={['React',
                            'TypeScript',
                            'RTK Query',
                            'MUI',
                            'Local Storage']}
                        body={[<>An app that pulls data from the <strong>PokéAPI</strong> and turns it into an
                            easy-to-use tool for exploring <strong>regions</strong> and <strong>Pokémon</strong>.
                            I built it because I actively play Pokémon and wanted this data to be
                            <strong> more approachable</strong> in real life.</>, <>The app displays <strong>regions</strong> and their Pokémon, with
                            <strong> filtering</strong>, <strong>grouping by region</strong>,
                            <strong> favorites</strong>, and both a full <strong>Pokémon profile view</strong> and
                            a compact <strong>drawer</strong> for quick info.</>, <> I focused on <strong>clean architecture</strong>, <strong>custom hooks</strong> and
                            <strong> reusable components</strong>, so the app stays
                            <strong> scalable</strong> and <strong>maintainable</strong> as features grow. which is helpful to me</>, <>Data is persisted with <strong>local storage</strong>, and <strong>RTK Query </strong>
                            handles API access, caching and performance so the UI feels fast and smooth.</>]}
                    />

                    {/* TABLE INFRASTRUCTURE CARD */}
                    <SkillCard
                        gitHref="https://github.com/raztz15/react-table-library"
                        subtitleTech={['React', 'TypeScript', 'MUI', 'Local Storage']

                        } title='Reusable Data Table Infrastructure'
                        usedTechnologies={["React", 'TypeScript', 'Memoization', 'Custom Hools', 'Local Storage']}
                        body={[<> A <strong>generic table infrastructure</strong> built with React and TypeScript, designed
                            to be reused across multiple screens. It powers complex data views with a consistent API
                            and behavior.</>, <>Supports <strong>sorting</strong>, <strong>filtering</strong>, <strong>searching</strong>,{' '}
                            <strong>pagination</strong> and <strong>column visibility</strong>, all driven by
                            configuration. The same infrastructure can be plugged into different datasets without
                            rewriting logic.</>, <>I focused on <strong>clean abstractions</strong> and <strong>reusable hooks</strong>, so
                                table state and behavior (sorting, filters, page index, page size) are encapsulated and
                                easy to reuse.</>, <>User preferences are persisted with <strong>local storage</strong>, so columns, filters
                                    and layout choices are remembered between sessions, improving real-world usability.</>]} />

                    {/* FORM INFRASTRUCTURE CARD */}
                    <SkillCard usedTechnologies={['React', 'TypeScript', 'Custom Hooks', 'Local Storage', 'Validation']} title='Form Infrastructure / Lightweight Form Engine' subtitleTech={['React', 'TypeScript', 'Custom Hooks', 'Local Storage', 'Validation']} gitHref="https://github.com/raztz15/react-form-library" body={[<>A reusable <strong>form engine</strong> inspired by libraries like React Hook Form, designed
                        to handle complex forms with <strong>data persistence</strong>, <strong>validation</strong>{' '}
                        and flexible layouts using a clean, scalable architecture.</>, <>The core logic manages <strong>form state</strong> (values, errors, touched state) and exposes
                            a simple API via <strong>custom hooks</strong>, so individual inputs can plug into the form
                        without duplicating logic.</>, <>Supports <strong>input validation</strong> and <strong>data persistence</strong> using{' '}
                        <strong>local storage</strong>, allowing users to come back to a form without losing their
                        progress.</>, <>The same engine can power different <strong>layouts</strong> and UI structures, keeping form
                            behavior centralized while giving full freedom on how each form looks and feels.</>]} />


                </Grid>
            </Container>
        </Box >

    )
}
