import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'
import { subjects } from '../../helper/constant.jsx'
import { FaEquals } from 'react-icons/fa6'
import { RiArrowDropDownLine, RiPencilFill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdOutlineNavigateNext, MdOutlineRemoveRedEye } from 'react-icons/md'
import { BsEyeSlash } from 'react-icons/bs'
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import { setCoursePrivacydata } from '../../redux/slices/coursePrivacySlice.jsx'
export const Container = ({ enabled, setEnabled, title }) => {
    const [click, setClick] = useState(false)
    const dispatch = useDispatch()

    {
        const [cards, setCards] = useState(subjects)
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            setCards((prevCards) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex]],
                    ],
                }),
            )
        }, [])
        const renderCard = (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    img={card?.img}
                    questioncount={card?.questioncount}
                    moveCard={moveCard}
                    enabled={enabled}
                    setEnabled={setEnabled}
                />
            )
        }
        return (
            <>
                <div className="text-base font-semibold flex justify-between items-center mb-3">
                    <h2 className="text-lg font-bold flex items-center gap-3">

                        {enabled && <FaEquals />} {click ? (
                            <input
                                type="text"
                                value={title}
                                className="border rounded-lg ps-2 bg-transparent font-bold text-lg outline-none"
                            />
                        ) : title} {enabled && <RiPencilFill className='cursor-pointer' onClick={() => setClick(!click)} />}
                    </h2>
                    <h3 className="text-lightgray flex items-center gap-3">

                        {enabled ? (
                            <div className="flex items-center gap-3">
                                <Menu>
                                    <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold   focus:outline-none data-[open]:rounded-full  data-[open]:bg-[#F2F3FF] data-[open]:text-black data-[focus]:outline-1 ">
                                        <span className="regular-text">Mato visi</span>
                                        <RiArrowDropDownLine
                                            fontSize={20}
                                        />
                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        anchor="bottom end"
                                        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white shadow-md p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[hover]:bg-lightgray data-[closed]:opacity-0"
                                    >
                                        <MenuItem>
                                            <button
                                                onClick={() => {
                                                    dispatch(setCoursePrivacydata("matovisi"));
                                                }}
                                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                                            >
                                                <MdOutlineRemoveRedEye fontSize={20} />
                                                Mato visi
                                            </button>
                                        </MenuItem>
                                        <MenuItem>
                                            <button
                                                onClick={() => {
                                                    dispatch(setCoursePrivacydata("Nematoniekas"))
                                                }}
                                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                                            >
                                                <BsEyeSlash fontSize={20} />
                                                Nemato niekas
                                            </button>
                                        </MenuItem>
                                        <MenuItem>
                                            <button
                                                onClick={() => { }}
                                                className="group flex justify-between w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#F7F7F7]"
                                            >
                                                <div className='flex items-center gap-2'>
                                                    <PiDotsThreeOutlineVerticalFill fontSize={20} className='text-lightgray' />
                                                    Pasirinktinai
                                                </div>
                                                <div>
                                                    <MdOutlineNavigateNext fontSize={20} className='text-lightgray' />
                                                </div>
                                            </button>
                                        </MenuItem>
                                        <div className="my-1 h-px bg-white/5" />
                                    </MenuItems>
                                </Menu>
                                <RxCross2 color="black" />
                            </div>
                        ) : (
                            " Mato visi"
                        )}
                    </h3>
                </div>
                <div className='w-full rounded-3xl'>{cards.map((card, i) => renderCard(card, i))}</div>
            </>
        )
    }
}
