import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { FaEquals } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
const style = {
    padding: '0.5rem 0rem',
    // marginBottom: '.5rem',
    backgroundColor: 'white',
    // cursor: 'move',
}
export const Card = ({ id, text, index, moveCard, img, questioncount, enabled, setEnabled }) => {

    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} style={{ ...style, opacity }} className={`${enabled ? 'cursor-move' : 'cursor-auto'} relative`} data-handler-id={handlerId}>
            <div className="flex items-center justify-between md:justify-center gap-5 bg-white">
                <div className="flex sm:flex-col items-center gap-5">
                    {enabled && <FaEquals className="lg:absolute lg:left-3 lg:top-3" />}
                    <img src={img} alt={index} />
                    <div>
                        <h2 className="text-lg font-bold md:text-center">{text}</h2>
                        <div className="flex items-center md:items-start sm:justify-between gap-5 underline regular-text mt-2">
                            <h3>Klausimai {questioncount}</h3>
                            <h3>Statistika</h3>
                            <h3>Apie kaladę</h3>
                        </div>
                    </div>
                </div>
                {enabled && <RxCross2 color="black" className="lg:absolute lg:right-3 lg:top-3" />}
            </div>
        </div>
    )
}
