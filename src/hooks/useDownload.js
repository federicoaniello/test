export const useDownload =  () => {

    const download = async (link) => {
        const res = await fetch(link);
        if(!res.ok) return ; 
        const toJson = await res.json();
        return toJson;
    }



    return {
        download
    }
}

export default useDownload;