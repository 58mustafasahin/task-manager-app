import { Button } from "@/components/ui/button"
import { BiFirstPage, BiLastPage } from "react-icons/bi"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import PaginationSelection from "./PaginationSelection"

const PaginationArea = () => {
    return (
        <div
            className={`relative w-full overflow-hidden
                flex justify-between items-center mt-2`}
        >
            <span className="text-slate-600 text-sm">0 of 36 row(s) selected.</span>
            <div className="flex items-center gap-14">
                <PaginationSelection />
                <div className="flex gap-6 items-center">
                    <span className="text-sm  font-medium">
                        Page 1 of 4
                    </span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                    <Button
                        variant={'outline'}
                        className="size-9 w-12"
                        size={'sm'}
                    >
                        <BiFirstPage />
                    </Button>
                    <Button
                        variant={'outline'}
                        className="size-9 w-12"
                        size={'sm'}
                    >
                        <GrFormPrevious />
                    </Button>
                    <Button
                        variant={'outline'}
                        className="size-9 w-12"
                        size={'sm'}
                    >
                        <GrFormNext />
                    </Button>
                    <Button
                        variant={'outline'}
                        className="size-9 w-12"
                        size={'sm'}
                    >
                        <BiLastPage />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PaginationArea
