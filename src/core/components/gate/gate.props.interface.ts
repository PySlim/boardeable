export interface GatePropsInterface{
    nameButton: string,
    nameLink: string,
    handlerButton: (username: string, password: string)=>void,
    handlerLink: ()=>void
}