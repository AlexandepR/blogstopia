export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string
    build: string
    html: string
    public: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    analyzer?: boolean
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    analyzer?: boolean
    apiUrl?: string
    project?: 'storybook' | 'frontend' | 'jest'
}
