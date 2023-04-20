import axios from "axios"
import { fromResourceApiToResourceDomain } from "../adapters/resource-adepter";

const basePath = 'https://reqres.in/api';

export const findResources = async () => {
    const response = await axios.get(`${basePath}/unknown`);
    return fromResourceApiToResourceDomain(response.data);
}