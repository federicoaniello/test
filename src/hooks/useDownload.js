export const useDownload =  () => {

    const download = async (link) => {
        const res = await fetch(link);
        if(!res.ok) return ; 
        const toJson = await res.json();
        return toJson;
    }

    const colorUtility = (jsonData) => {
        let colors = [];
        jsonData.value.forEach(({color}) => {
            console.log(color)
            colors.push(...color);
           })
           colors =[...new Set(colors)]; 
           console.log(colors)
           return colors;
    }



    return {
        download,
        colorUtility
    }
}

export default useDownload;