import { LeftTask } from "../components/Taskbar/LeftTask"
import { RightTask } from "../components/Taskbar/RightTask"

export const Taskbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-8 bg-gray-800 opacity-90 backdrop-filter backdrop-blur-md">
            <LeftTask />
            <RightTask />
        </div>
    )
}
