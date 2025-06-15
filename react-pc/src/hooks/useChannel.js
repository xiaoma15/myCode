import { useEffect, useState } from "react";
import { getChannelsAPI } from "@/apis/article";
const useChannel = () => {
    const [channels, setChannels] = useState([])
    useEffect(() => {
        async function getChannels() {
            const res = await getChannelsAPI()
            setChannels(res.data.data.channels)
        }

        getChannels()

    }, [])

    return {
        channels,
    }

}

export { useChannel };