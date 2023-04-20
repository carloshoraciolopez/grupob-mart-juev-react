export const fromResourceApiToResourceDomain = (externalResource) => {
    const array = externalResource.data;
    return array.map(e => fromTo(e));
}

export const fromTo = (obj) => {
    return {
        id: obj.id,
        descripcion: obj.name
    }
}