export interface Project {
    id: string
    title: string
    desc: string
    tags: string[]
    url: string
}

export interface Experience {
    title: string
    company: string
    period: string
    description?: string
}
