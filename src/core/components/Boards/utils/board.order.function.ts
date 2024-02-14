
type FieldSearch = "title" | "created"
interface BoardElement {
    id: string | number,
    title: string,
    color: string
    created: string
    user_id: number | string
}
export const boardOrderFunction = (array: BoardElement[], field: FieldSearch)=>{

    const arrayCopy = [...array]
    arrayCopy.sort((a,b)=>{
        if(field === "title"){
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();
            if(titleA < titleB) return -1
            if(titleA > titleB ) return 1
            return 0;
         }else if(field === "created"){
            const dateA = new Date(a.created);
            const dateB = new Date(b.created);
            if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
                return dateA.getTime() - dateB.getTime();
            }
        }
        return 0
    })

    const formatTitle = (title: string)=>{
        const words = title.split(' ');
        const wordsCapitalized = words.map((word)=>{
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        })
        return wordsCapitalized.join(' ')
    }
    return arrayCopy.map(item => ({
        ...item,
        title: formatTitle(item.title)
    }));
}