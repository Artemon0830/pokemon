export interface IPoke {
    name: string;
    url: string;
    cries:{
        latest: string;
        legacy: string;
    }
}