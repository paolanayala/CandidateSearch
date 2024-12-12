// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;
    avatar_url: string;
    location: string;
    email: string;
    company: string;
    bio: string;
    name: string;
    username: string
    html_url: string;
    login: string;
    hireable: boolean;
    }

    export default Candidate;