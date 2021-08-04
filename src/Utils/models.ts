export interface Profile {
    id: number,
    name: string
}

export interface User {
    success: boolean,
    token: string,
    user: any,
    profiles: Profile[]
}

export interface IContextProps {
    user: User;
    setUser: (User: User) => void;
}

export interface IProfileContext {
    profile: Profile;
    setProfile: (Profile: Profile) => void;
}