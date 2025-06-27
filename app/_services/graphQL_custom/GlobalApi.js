import { gql, request } from "graphql-request";
///import {getServicesData}  from './QueryGraphQL';



const MASTER_URL= process.env.NEXT_PUBLIC_API_URL;

const getServices =async(arg)=>{

    const query=gql ``+arg+``
    

const result = await request(MASTER_URL, query)
return result
}

export default {
    getServices
}